import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),a=t.elements.email,o=t.elements.message,s="feedback-form-state",m=JSON.parse(localStorage.getItem(s))||{email:"",message:""};a.value=m.email;o.value=m.message;t.addEventListener("input",n);function n(){const e={email:a.value.trim(),message:o.value.trim()};r(e)}function r(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}t.addEventListener("submit",c);function c(e){if(e.preventDefault(),a.value==""||o.value=="")return alert("Please, check input information!!!");const l={email:a.value.trim(),message:o.value.trim()};console.log(l),localStorage.removeItem(s),t.reset()}
//# sourceMappingURL=commonHelpers2.js.map