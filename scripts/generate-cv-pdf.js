/**
 * Renders the built site with print styles (same CSS as Ctrl/Cmd+P) using
 * headless Chrome and saves the result as a real PDF file, so it can be
 * offered as a one-click download instead of opening the print dialog.
 *
 * Requires `gatsby build` to have already produced ./public.
 * Run via `npm run cv:pdf` (build + generate) or as part of `npm run deploy`.
 */
const path = require("path")
const http = require("http")
const fs = require("fs")
const { spawn } = require("child_process")

const ROOT = path.join(__dirname, "..")
const PORT = process.env.CV_PDF_PORT || 9009
const URL = `http://localhost:${PORT}/`
const STATIC_OUTPUT = path.join(ROOT, "static", "cv.pdf")
const PUBLIC_OUTPUT = path.join(ROOT, "public", "cv.pdf")

function waitForServer(url, timeoutMs = 60000) {
  const deadline = Date.now() + timeoutMs
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      http
        .get(url, (res) => {
          res.resume()
          resolve()
        })
        .on("error", () => {
          if (Date.now() > deadline) {
            reject(new Error(`Timed out waiting for ${url}`))
          } else {
            setTimeout(tryOnce, 300)
          }
        })
    }
    tryOnce()
  })
}

async function main() {
  if (!fs.existsSync(path.join(ROOT, "public", "index.html"))) {
    console.error('public/index.html not found. Run "gatsby build" first (or use "npm run cv:pdf").')
    process.exit(1)
  }

  const puppeteer = require("puppeteer")

  console.log(`Starting server on port ${PORT}...`)
  const server = spawn("npx", ["gatsby", "serve", "-p", String(PORT)], {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
  })

  let serverOutput = ""
  server.stdout.on("data", (d) => (serverOutput += d))
  server.stderr.on("data", (d) => (serverOutput += d))

  try {
    await waitForServer(URL)

    console.log("Rendering CV PDF...")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(URL, { waitUntil: "networkidle0" })
    await page.emulateMediaType("print")
    await page.pdf({
      path: STATIC_OUTPUT,
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
      margin: { top: "12mm", bottom: "12mm", left: "10mm", right: "10mm" },
    })
    await browser.close()

    fs.copyFileSync(STATIC_OUTPUT, PUBLIC_OUTPUT)
    console.log(
      `CV PDF written to ${path.relative(ROOT, STATIC_OUTPUT)} and ${path.relative(ROOT, PUBLIC_OUTPUT)}`
    )
  } catch (err) {
    console.error(serverOutput)
    throw err
  } finally {
    server.kill()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
