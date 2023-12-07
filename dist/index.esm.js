import{useRef as t,useMemo as r,useState as e,useCallback as n,useEffect as o}from"react";import{extendMethodByChain as i,_sessionStorage as a,_localStorage as u}from"@iicoding/utils";function c(e){var n=t(e);n.current=r((function(){return e}),[e]);var o=t();return o.current||(o.current=function(){for(var t=arguments.length,r=Array(t),e=0;t>e;e++)r[e]=arguments[e];return n.current.apply(this,r)}),o.current}function l(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var r=1;arguments.length>r;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?l(Object(e),!0).forEach((function(r){d(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function s(){s=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=Object.create((r&&r.prototype instanceof m?r:m).prototype),a=new N(n||[]);return o(i,"_invoke",{value:S(t,e,a)}),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",d="suspendedYield",y="executing",v="completed",g={};function m(){}function w(){}function b(){}var x={};l(x,a,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(D([])));j&&j!==e&&n.call(j,a)&&(x=j);var E=b.prototype=m.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function P(t,r){function e(o,i,a,u){var c=h(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,u)}),(function(t){e("throw",t,a,u)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return e("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function S(r,e,n){var o=p;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=k(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=h(r,e,n);if("normal"===l.type){if(o=n.done?v:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function A(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function D(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return w.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=l(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},L(P.prototype),l(P.prototype,u,(function(){return this})),r.AsyncIterator=P,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new P(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),l(E,c,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=D,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(this.prev>=a.tryLoc){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(a.catchLoc>this.prev)return o(a.catchLoc,!0);if(a.finallyLoc>this.prev)return o(a.finallyLoc)}else if(c){if(a.catchLoc>this.prev)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(a.finallyLoc>this.prev)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(this.prev>=o.tryLoc&&n.call(o,"finallyLoc")&&o.finallyLoc>this.prev){var i=o;break}}i&&("break"===t||"continue"===t)&&r>=i.tryLoc&&i.finallyLoc>=r&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),A(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;A(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:D(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function h(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function p(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){h(i,n,o,a,u,"next",t)}function u(t){h(i,n,o,a,u,"throw",t)}a(void 0)}))}}function d(t,r,e){return(r=function(t){var r=function(t,r){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof r?r:r+""}(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function y(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return v(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);r>e;e++)n[e]=t[e];return n}var g=function(t,r,o){var i=r||{},a=i.code,u=i.codeData,c=i.conversionFn,l=y(e({loading:!1,data:i.defaultData}),2),h=l[0],d=l[1],v=n(function(){var r=p(s().mark((function r(e){var n,o,i,l,h,p,y,v,g,m,w;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d((function(t){return f(f({},t),{},{loading:!0})})),r.next=3,t(e).catch((function(t){d((function(t){return f(f({},t),{},{loading:!1})})),console.log("this request is failed! err info: ",t)}));case 3:if(i=(n=r.sent).status,h=n.payload,p=n.msg,y=n.message,v=null!=(o=n.code)?o:i,g=null!=(l=n.data)?l:h,!a){r.next=10;break}return d((function(t){return f(f({},t),{},{loading:!1,data:g})})),r.abrupt("return",v);case 10:if(!u){r.next=14;break}return m={code:v,data:g,msg:null!=p?p:y},d((function(t){return f(f({},t),{},{loading:!1,data:m})})),r.abrupt("return",m);case 14:if(!c||!g){r.next=18;break}return w=c(g),d((function(t){return f(f({},t),{},{loading:!1,data:w})})),r.abrupt("return",w);case 18:if(200!==v){r.next=21;break}return d((function(t){return f(f({},t),{},{loading:!1,data:g})})),r.abrupt("return",g);case 21:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),null!=o?o:[]),g=n((function(t){d((function(r){return f(f({},r),{},{loading:!1,data:t})}))}),[]);return{loading:h.loading,data:h.data,caller:v,setData:g}},m=function(t,r,o){var i=(r||{}).conversionFn,a=y(e({loading:!1}),2),u=a[0],c=a[1],l=n(p(s().mark((function r(){var e,n,o,a,l,h;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c((function(t){return f(f({},t),{},{loading:!0})})),e={},n=[],o=0,a=t.map((function(t){return t.name&&o++,t.service(null==t?void 0:t.params)})),o&&t.length>o&&console.log("If the name field is passed, pass it for each item."),r.next=8,Promise.all(a).catch((function(t){c((function(t){return f(f({},t),{},{loading:!1})})),console.log("this request is failed! err info: ",t)}));case 8:if(!Array.isArray(l=r.sent)){r.next=15;break}return t.forEach((function(t,r){var o,i=l[r],a=(null===(o=i.data)||void 0===o?void 0:o.records)||i.data||i;e[t.name]=a,n.push(a)})),h=o?e:n,i&&(h=i(h)),c((function(t){return f(f({},t),{},{loading:!1,data:h})})),r.abrupt("return",h);case 15:return r.abrupt("return",u.data);case 16:case"end":return r.stop()}}),r)}))),null!=o?o:[]),h=n((function(t){c((function(r){return f(f({},r),{},{loading:!1,data:t})}))}),[]);return{loading:u.loading,data:u.data,caller:l,setData:h}};function w(r,n){var i=y(e(0),2),a=i[0],u=i[1],c=t(!1),l=t(),f="function"==typeof n?["set"]:Array.isArray(n)?n:[n||"set"];if(o((function(){"function"==typeof n&&n();var t=function(t){if(!c.current){var e=t.newValue,o=t.newKey;f.includes(t.triggerAction)&&o===r&&e!==l.current&&("function"==typeof n?n():u(Math.random()),l.current=e)}};return window.addEventListener("storeChange",t),function(){c.current=!0,window.removeEventListener("storeChange",t)}}),[]),"function"!=typeof n)return a}function b(){if(window)switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all"){case"sessionStorage":i(window.sessionStorage,a);break;case"localStorage":i(window.localStorage,u);break;default:i(window.sessionStorage,a),i(window.localStorage,u)}}export{b as initExtendStorage,c as useMemoizedHandle,g as useRequest,m as useRequestAll,w as useStorageChange};
