(self.webpackChunkjurgo_me=self.webpackChunkjurgo_me||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var a,u,s,l;if(Array.isArray(e)){if((a=e.length)!=c.length)return!1;for(u=a;0!=u--;)if(!o(e[u],c[u]))return!1;return!0}if(n&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!c.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],c.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!c.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((a=e.length)!=c.length)return!1;for(u=a;0!=u--;)if(e[u]!==c[u])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((a=(s=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(c,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!o(e[s[u]],c[s[u]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=i.prototype;return c.UNSAFE_componentWillMount=function(){s.push(this),l()},c.componentDidUpdate=function(){l()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},c.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",a),f}}},5127:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),i=n(5444),o=n(2407),c=function(e){var t=e.siteTitle;return r.createElement(r.Fragment,null,r.createElement("header",{className:"header"},r.createElement("div",{className:"header__inner"},r.createElement("h1",{style:{margin:0,fontSize:"1.5em",fontWeight:"500"}},r.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none",verticalAlign:"middle",lineHeight:"120%"}},r.createElement(o.S,{src:"../images/jurgo-icon.png",height:"38",width:"38",__imageData:n(9984)})," ",r.createElement("div",{style:{display:"inline-block",marginTop:"8px"}},t))))),r.createElement("section",{className:"header-for-print"},r.createElement("div",{className:"header-for-print-image"},r.createElement(o.S,{src:"../images/jurgo-icon.png",height:"98",width:"98",style:{borderRadius:"50px"},__imageData:n(182)})),r.createElement("div",{className:"header-for-print-texts"},r.createElement("h2",{className:"header-for-print-name"},"Jurgo Boemo "),r.createElement("h3",{className:"header-for-print-jobtitle"},"Fullstack software engineer."))))};c.defaultProps={siteTitle:""};var a=c,u=function(e){var t=e.href,n=e.children;return r.createElement("a",{style:{color:"white"},href:t},n)},s=function(e){var t,n=e.children,o=(0,i.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(a,{siteTitle:(null===(t=o.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",null,r.createElement("section",{className:"header-extension"},r.createElement("h2",{className:"header-extension-title"}," Fullstack software engineer. ",r.createElement("span",{style:{whiteSpace:"nowrap"}},"Trying to be ...  ",r.createElement("span",{style:{fontSize:"0.85em"}},"⁄⁄ TODO")),r.createElement("div",{className:"header-extension-links"}," ",r.createElement(u,{href:"https://casual-programming.com/"},"Blog")," | ",r.createElement(u,{href:"https://github.com/jurgob"},"Github")))),r.createElement("div",{className:"main-content"},r.createElement("main",null,n),r.createElement("footer",{className:"footer"},"Updated on February, 2024"))))}},3751:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,i,o,c,a=n(7294),u=n(5697),s=n.n(u),l=n(4839),f=n.n(l),p=n(2993),d=n.n(p),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",E="href",A="http-equiv",O="innerHTML",S="itemprop",C="name",j="property",k="rel",x="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",D=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),B=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=G(e,w.TITLE),n=G(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,L);return t||r||void 0},V=function(e){return G(e,_)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),c=0;c<o.length;c++){var a=o[c],u=a.toLowerCase();-1===t.indexOf(u)||n===k&&"canonical"===e[n].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==O&&a!==T&&a!==S||(n=a)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),c=0;c<o.length;c++){var a=o[c],u=h()({},r[a],i[a]);r[a]=u}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,i),ae(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,o),metaTags:se(w.META,c),noscriptTags:se(w.NOSCRIPT,a),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),i=r?r.split(","):[],o=[].concat(i),c=Object.keys(t),a=0;a<c.length;a++){var u=c[a],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(F):n.getAttribute(F)!==c.join(",")&&n.setAttribute(F,c.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(F,"true"),i.some((function(e,t){return c=t,n.isEqualNode(e)}))?i.splice(c,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,i=fe(n,r),[a.createElement(w.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ce(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",c=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(c?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(g,i,r),link:pe(w.LINK,o,r),meta:pe(w.META,c,r),noscript:pe(w.NOSCRIPT,a,r),script:pe(w.SCRIPT,u,r),style:pe(w.STYLE,s,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:Z([E,P],e),bodyAttributes:Q(y,e),defer:G(e,I),encode:G(e,M),htmlAttributes:Q(g,e),linkTags:$(w.LINK,[k,E],e),metaTags:$(w.META,[C,v,A,j,S],e),noscriptTags:$(w.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:$(w.SCRIPT,[x,O],e),styleTags:$(w.STYLE,[T],e),title:J(e),titleAttributes:Q(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),he=(i=me,c=o=function(e){function t(){return q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(r.type){case w.TITLE:return Y({},i,((t={})[r.type]=c,t.titleAttributes=Y({},o),t));case w.BODY:return Y({},i,{bodyAttributes:Y({},o)});case w.HTML:return Y({},i,{htmlAttributes:Y({},o)})}return Y({},i,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(U(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(i,r)},z(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(a.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);he.renderStatic=he.rewind;var ye=n(5444);function ge(e){var t,n,r=e.description,i=e.lang,o=e.meta,c=e.title,u=(0,ye.useStaticQuery)("63159454").site,s=r||u.siteMetadata.description,l=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(he,{htmlAttributes:{lang:i},title:c,titleTemplate:l?"%s | "+l:null,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)})}ge.defaultProps={lang:"en",meta:[],description:""};var be=ge},182:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5926c27078cd744c33f9ef9e625f4c99/c9352/jurgo-icon.png","srcSet":"/static/5926c27078cd744c33f9ef9e625f4c99/88208/jurgo-icon.png 25w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/856df/jurgo-icon.png 49w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/c9352/jurgo-icon.png 98w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/546fa/jurgo-icon.png 196w","sizes":"(min-width: 98px) 98px, 100vw"},"sources":[{"srcSet":"/static/5926c27078cd744c33f9ef9e625f4c99/2fa99/jurgo-icon.webp 25w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/f2d16/jurgo-icon.webp 49w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/f1ce5/jurgo-icon.webp 98w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/cace6/jurgo-icon.webp 196w","type":"image/webp","sizes":"(min-width: 98px) 98px, 100vw"}]},"width":"98","height":98}')},9984:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5926c27078cd744c33f9ef9e625f4c99/f2a56/jurgo-icon.png","srcSet":"/static/5926c27078cd744c33f9ef9e625f4c99/ebf64/jurgo-icon.png 10w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/546b2/jurgo-icon.png 19w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/f2a56/jurgo-icon.png 38w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/67bac/jurgo-icon.png 76w","sizes":"(min-width: 38px) 38px, 100vw"},"sources":[{"srcSet":"/static/5926c27078cd744c33f9ef9e625f4c99/bd5c1/jurgo-icon.webp 10w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/89d20/jurgo-icon.webp 19w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/0852d/jurgo-icon.webp 38w,\\n/static/5926c27078cd744c33f9ef9e625f4c99/984aa/jurgo-icon.webp 76w","type":"image/webp","sizes":"(min-width: 38px) 38px, 100vw"}]},"width":"38","height":38}')}}]);
//# sourceMappingURL=commons-106838fecbcc0ebbe157.js.map