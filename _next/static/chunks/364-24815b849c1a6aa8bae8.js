(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{6071:function(e,r,t){"use strict";var n=t(3848),o=t(9448);r.default=void 0;var i=o(t(7294)),l=t(1689),a=t(2441),c=t(5749),s={};function u(e,r,t,n){if(e&&(0,l.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.asPath||"/",f=i.default.useMemo((function(){var r=(0,l.resolveHref)(o,e.href,!0),t=n(r,2),i=t[0],a=t[1];return{href:i,as:e.as?(0,l.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),p=f.href,v=f.as,y=e.children,d=e.replace,h=e.shallow,g=e.scroll,O=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var b=i.Children.only(y),m=b&&"object"===typeof b&&b.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),x=n(w,2),j=x[0],k=x[1],E=i.default.useCallback((function(e){j(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,j]);(0,i.useEffect)((function(){var e=k&&r&&(0,l.isLocalURL)(p),n="undefined"!==typeof O?O:t&&t.locale,o=s[p+"%"+v+(n?"%"+n:"")];e&&!o&&u(t,p,v,{locale:n})}),[v,p,k,O,r,t]);var L={ref:E,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,i,a,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),r[o?"replace":"push"](t,n,{shallow:i,locale:c,scroll:a}))}(e,t,p,v,d,h,g,O)},onMouseEnter:function(e){(0,l.isLocalURL)(p)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),u(t,p,v,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var z="undefined"!==typeof O?O:t&&t.locale,P=t&&t.isLocaleDomain&&(0,l.getDomainLocale)(v,z,t&&t.locales,t&&t.domainLocales);L.href=P||(0,l.addBasePath)((0,l.addLocale)(v,z,t&&t.defaultLocale))}return i.default.cloneElement(b,L)};r.default=f},5749:function(e,r,t){"use strict";var n=t(3848);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!l,c=(0,o.useRef)(),s=(0,o.useState)(!1),u=n(s,2),f=u[0],p=u[1],v=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=a.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return a.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,i=n.observer,l=n.elements;return l.set(e,r),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:r}))}),[t,r,f]);return(0,o.useEffect)((function(){if(!l&&!f){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[v,f]};var o=t(7294),i=t(8391),l="undefined"!==typeof IntersectionObserver;var a=new Map},1664:function(e,r,t){e.exports=t(6071)},1140:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),n.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),n.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),n.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Calendar",r.Z=c},6702:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="GitHub",r.Z=c},9318:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),n.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),n.createElement("circle",{cx:"4",cy:"4",r:"2"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Linkedin",r.Z=c},2549:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Moon",r.Z=c},1414:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),n.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Send",r.Z=c},8231:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("circle",{cx:"12",cy:"12",r:"5"}),n.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),n.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),n.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),n.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),n.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),n.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),n.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),n.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Sun",r.Z=c},706:function(e,r,t){"use strict";var n=t(7294),o=t(5697),i=t.n(o);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,n.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,s=a(e,["color","size"]);return n.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Twitter",r.Z=c}}]);