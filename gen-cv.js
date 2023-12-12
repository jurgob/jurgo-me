const fs = require('fs');
const text = fs.readFileSync('./cover-letter.txt', 'utf8');

let [notUsed, notUsed2,  employerName, jobTitle, companyName] = process.argv


if(!employerName){
    employerName = "Hiring Manager"
}

let errMes = []

if(!employerName) errMes.push('Please provide an employer name');
if(!jobTitle) errMes.push('Please provide an jobTitle name');
if(!companyName) errMes.push('Please provide an companyName name');


if(errMes.length > 0) {
    console.error(errMes.join('\n'));
    process.exit(1);
    return;
}

function replaceAllSimple(replaceWhat,replaceTo){
    // return ;
    var str = this.toString();
    var re = new RegExp(replaceWhat, 'g');
    return str.replace(re,replaceTo);
}

String.prototype.replaceAllSimple = replaceAllSimple;


console.log(text
    .replaceAllSimple('\\[EmployerName\\]', employerName)
    .replaceAllSimple('\\[Job Title\\]', jobTitle)
    .replaceAllSimple('\\[Company Name\\]', companyName)
);

// console.log(text
//     .replaceAll('[Employer Name]', employerName)
// );