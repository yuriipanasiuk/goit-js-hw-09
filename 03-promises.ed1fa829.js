function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u=i("eWCmQ");const r={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputSpep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')};function l(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.form.addEventListener("submit",(function(n){n.preventDefault();const t=Number(r.inputDelay.value),o=Number(r.inputSpep.value),i=Number(r.inputAmount.value);for(let n=1;n<=i;n+=1){l(n,t+o*(n-1)).then((({position:n,delay:t})=>{e(u).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(u).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.ed1fa829.js.map
