(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(n,e,t){n.exports=t.p+"static/media/logo.7132cb1b.png"},12:function(n,e,t){n.exports=t.p+"static/media/phone.d630886d.jpg"},17:function(n,e,t){n.exports=t(29)},25:function(n,e,t){},27:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a,o=t(0),i=t.n(o),r=t(10),c=t.n(r),l=(t(25),t(4)),s=t(2),u=t(11),d=t.n(u),f=(t(27),t(12)),p=t.n(f),g=t(6),m=t(3);function h(n){var e=n.content,t={contentWidth:0,left:0,duration:n.duration},r=Object(o.useState)(t),c=Object(l.a)(r,2),u=c[0],d=c[1],f=Object(o.useRef)(null);Object(o.useEffect)(function(){var n=f.current,e=n.offsetWidth,t=n.parentElement;d(Object(g.a)({},u,{contentWidth:e,left:t.offsetWidth}))},[e]);var p=u.contentWidth,h=u.left,v=u.duration,b="marquee_".concat(p),w=m.a.p(a||(a=Object(s.a)(["\n      position: relative;\n      left: ","px;\n      animation: "," ","s linear infinite both;\n      animation-play-state: running;\n      animation-fill-mode: forwards;\n  \n      @keyframes "," {\n        0% {\n          transform: translateX(0px);\n        }\n  \n        100% {\n          transform: translateX(-","px);\n        }\n      }\n    "])),h,b,v,b,p+h);return i.a.createElement("div",{className:"marquee_box"},i.a.createElement(w,{ref:f},e))}h.defaultProps={content:"",duration:3};var v,b=i.a.memo(h),w=m.a.div(v||(v=Object(s.a)(["\nmargin-top: 40px;\nposition: relative;\n"])));function O(n){var e=n.notification,t=Object(o.useMemo)(function(){if(!e)return"\u6b22\u8fce\u56de\u6765\uff01";var n=e.heading,t=e.content;return"".concat(n,"\uff1a").concat(t)},[e]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null,i.a.createElement("img",{src:p.a,alt:"Phone",width:"190",height:"410"}),i.a.createElement(b,{content:t,duration:8})))}var j=t(7),x=t(16);function E(){return localStorage.getItem("lastKey")}function k(n){var e=localStorage.getItem(n);if(!e)throw new Error("No message found for key ".concat(n));return JSON.parse(e)}function y(n){var e,t=function(n){return"message_".concat(n.id)}(n);!function(n,e,t){localStorage.setItem(n,JSON.stringify(Object(g.a)({},e,{previousKey:t})))}(t,n,E()),e=t,localStorage.setItem("lastKey",e)}var S,W,C,P,I=t(15),N=t.n(I),F=m.a.div(S||(S=Object(s.a)(["\nbackground-color: rgba(0,0,0,0.8);\nposition: absolute;\ntop: 0;\nleft: 0;\nright: 0;\nbottom: 0;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-direction: column;\n"]))),K=m.a.div(W||(W=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: start;\noverflow-y: scroll;\nwidth: 100%;\npadding-left: 30px;\npadding-right: 30px;\npadding-top: 47px;\npadding-bottom: 34px;\n"]))),L=m.a.p(C||(C=Object(s.a)(["\ncolor: white;\n"]))),B=m.a.div(P||(P=Object(s.a)(["\nwidth: 100%;\n"])));var D,J,M=function(n){var e=n.onClose,t=function(){for(var n=E(),e=[];n;){var t=k(n),a=t.previousKey,o=Object(x.a)(t,["previousKey"]);e.push(o),n=a}return e}();return i.a.createElement(F,{onClick:e},i.a.createElement(K,{onClick:e},t.map(function(n,e){var t=n.id,a=n.heading,o=n.content,r=n.data.timestamp;return i.a.createElement(B,{key:t},e>0&&i.a.createElement("hr",null),i.a.createElement(L,null,N()(new Date(r)).format("M-D H:mm")),i.a.createElement(L,null,a),i.a.createElement(L,null,o))})))},T=m.a.main(D||(D=Object(s.a)(["\nposition: relative;\njustify-content: center;\nalign-items: center;\nheight: 100svh;\ndisplay: flex;\nflex-direction: column;\n"]))),A=m.a.a(J||(J=Object(s.a)(["\ndisplay: block;\nmargin: 52px auto 0;\nwidth: 160px;\nheight: 38px;\nline-height: 38px;\ncolor: #fff;\nfont-size: 14px;\nfont-weight: 700;\nbackground: -webkit-linear-gradient(173.82deg, #ff373c 4.68%, #ff5757 83.21%);\nbackground: -moz-linear-gradient(173.82deg, #ff373c 4.68%, #ff5757 83.21%);\nbackground: linear-gradient(276.18deg, #ff373c 4.68%, #ff5757 83.21%);\nborder-radius: 19px;\ntext-decoration: none;\ntext-align: center;\n"])));var R=function(){var n=Object(o.useState)(!1),e=Object(l.a)(n,2),t=(e[0],e[1]),a=Object(o.useState)(null),r=Object(l.a)(a,2),c=r[0],s=r[1],u=Object(o.useState)(!1),f=Object(l.a)(u,2),p=f[0],g=f[1];return Object(o.useEffect)(function(){j.a.init({appId:"4141a199-dcc1-4ac0-95c4-d8c15258d208",promptOptions:{slidedown:{prompts:[{type:"push",autoPrompt:!0,text:{actionMessage:"\u8bf7\u5141\u8bb8\u63a5\u53d7\u6211\u4eec\u7684\u63a8\u9001\u901a\u77e5\uff0c\u4ee5\u514d\u9519\u8fc7\u6700\u65b0\u6700\u5168\u8d44\u8baf\u54e6\uff01",acceptButton:"\u9a6c\u4e0a\u5141\u8bb8",cancelButton:"\u518d\u60f3\u60f3"},delay:{pageViews:1,timeDelay:1}}]}}}).then(function(){t(!0),j.a.showSlidedownPrompt().then(function(){console.log("OneSignal prompt shown")}),j.a.addListenerForNotificationOpened(function(n){s(n=n),y(n)})})},[t]),i.a.createElement(T,null,i.a.createElement("img",{src:d.a,alt:"Logo",width:"106",height:"36"}),i.a.createElement(O,{notification:c}),p&&i.a.createElement(M,{onClose:g.bind(void 0,!1)}),i.a.createElement(A,{href:"#",onClick:g.bind(void 0,!0)},"\u4e0b\u8f7d\u4eca\u65e5\u5934\u6761"))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}var q=function(n){n&&n instanceof Function&&t.e(1).then(t.bind(null,30)).then(function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),a(n),o(n),i(n),r(n)})};c.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R,null))),function(n,e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){U?(function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):_(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")})):_(n,e)})}}("".concat("","/OneSignalSDKWorker.js")),q()}},[[17,3,2]]]);
//# sourceMappingURL=main.38ec7099.chunk.js.map