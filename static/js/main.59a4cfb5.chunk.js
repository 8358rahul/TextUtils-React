(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(9),a(1));a(11);function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("b",null,e.title)),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",name:"myBox",id:"myBox",cols:"30",rows:"10",onChange:function(e){c(e.target.value)},value:r,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"}})),l.a.createElement("div",{class:"d-auto"},l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to uppercase!","success")}},"Convert To UpperCase"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to lower!","success")}},"Convert To LowerCase"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard!","success")}},"Copy Text"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra spaces removed!","success")}},"Remove Extra Spaces"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");c(t),e.showAlert("Remove punchutions!","success")}},"Remove Punctuation"),l.a.createElement("button",{type:"button",className:"btn btn-primary mx-1 my-1",onClick:function(){c(""),e.showAlert("Text Cleared!","success")}},"Clear"))),l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"Your Text Summery"),l.a.createElement("p",null,r.split(" ").length," Words And ",r.length," Characters"),l.a.createElement("p",null,.008*r.split(" ").length," Minutes Read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter Something In The Textbox Above To Priview It Here")))}function i(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)}s.defaultProps={title:"Set Title Here"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",h("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(r("light"),document.body.style.backgroundColor="white",h("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),l.a.createElement(i,{alert:d}),l.a.createElement(m,{showAlert:h,heading:"Enter the text analyze below",mode:a}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,14)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(13)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.59a4cfb5.chunk.js.map