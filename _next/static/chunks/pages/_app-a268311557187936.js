(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8264)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3740:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,r=n(2648).Z,l=n(1598).Z,i=n(7273).Z,a=l(n(7294)),s=r(n(2636)),c=n(7757),u=n(3735),f=n(3341);n(4210);var d=r(n(7746));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function _(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,r,l,i,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,l=!1;r.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}function m(e){let[t,n]=a.version.split("."),o=parseInt(t,10),r=parseInt(n,10);return o>18||18===o&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let v=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:r,widthInt:l,qualityInt:s,className:c,imgStyle:u,blurStyle:f,isLazy:d,fetchPriority:p,fill:h,placeholder:_,loading:v,srcString:b,config:y,unoptimized:w,loader:j,onLoadRef:x,onLoadingCompleteRef:C,setBlurComplete:E,setShowAltText:S,onLoad:k,onError:P}=e,M=i(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return v=d?"lazy":v,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},M,m(p),{loading:v,width:l,height:r,decoding:"async","data-nimg":h?"fill":"1",className:c,style:o({},u,f)},n,{ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,b,_,x,C,E,w))},[b,_,x,C,E,P,w,t]),onLoad:e=>{let t=e.currentTarget;g(t,b,_,x,C,E,w)},onError:e=>{S(!0),"blur"===_&&E(!0),P&&P(e)}})))}),b=a.forwardRef((e,t)=>{let n,r;var l,{src:g,sizes:b,unoptimized:y=!1,priority:w=!1,loading:j,className:x,quality:C,width:E,height:S,fill:k,style:P,onLoad:M,onLoadingComplete:O,placeholder:N="empty",blurDataURL:L,fetchPriority:R,layout:I,objectFit:z,objectPosition:A,lazyBoundary:T,lazyRoot:D}=e,H=i(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=a.useContext(f.ImageConfigContext),F=a.useMemo(()=>{let e=p||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:n})},[B]),U=H,W=U.loader||d.default;delete U.loader;let Z="__next_img_default"in W;if(Z){if("custom"===F.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:n}=t,o=i(t,["config"]);return e(o)}}if(I){"fill"===I&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(P=o({},P,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!b&&(b=t)}let G="",K=_(E),q=_(S);if("object"==typeof(l=g)&&(h(l)||void 0!==l.src)){let e=h(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,r=e.blurHeight,L=L||e.blurDataURL,G=e.src,!k){if(K||q){if(K&&!q){let t=K/e.width;q=Math.round(e.height*t)}else if(!K&&q){let t=q/e.height;K=Math.round(e.width*t)}}else K=e.width,q=e.height}}let V=!w&&("lazy"===j||void 0===j);(!(g="string"==typeof g?g:G)||g.startsWith("data:")||g.startsWith("blob:"))&&(y=!0,V=!1),F.unoptimized&&(y=!0),Z&&g.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(y=!0),w&&(R="high");let[J,X]=a.useState(!1),[Y,$]=a.useState(!1),Q=_(C),ee=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:A}:{},Y?{}:{color:"transparent"},P),et="blur"===N&&L&&!J?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:K,heightInt:q,blurWidth:n,blurHeight:r,blurDataURL:L,objectFit:ee.objectFit}),'")')}:{},en=function(e){let{config:t,src:n,unoptimized:o,width:r,quality:l,sizes:i,loader:a}=e;if(o)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:o,allSizes:r}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(n);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let l=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:l,kind:"x"}}(t,r,i),u=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,o)=>"".concat(a({config:t,src:n,quality:l,width:e})," ").concat("w"===c?e:o+1).concat(c)).join(", "),src:a({config:t,src:n,quality:l,width:s[u]})}}({config:F,src:g,unoptimized:y,width:K,quality:Q,sizes:b,loader:W}),eo=g,er=a.useRef(M);a.useEffect(()=>{er.current=M},[M]);let el=a.useRef(O);a.useEffect(()=>{el.current=O},[O]);let ei=o({isLazy:V,imgAttributes:en,heightInt:q,widthInt:K,qualityInt:Q,className:x,imgStyle:ee,blurStyle:et,loading:j,config:F,fetchPriority:R,fill:k,unoptimized:y,placeholder:N,loader:W,srcString:eo,onLoadRef:er,onLoadingCompleteRef:el,setBlurComplete:X,setShowAltText:$},U);return a.default.createElement(a.default.Fragment,null,a.default.createElement(v,Object.assign({},ei,{ref:t})),w?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src,imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:U.crossOrigin},m(R)))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),i=n(4532),a=n(3353),s=n(1410),c=n(9064),u=n(370),f=n(9955),d=n(4224),p=n(508),h=n(1516),_=n(4266);let g=new Set;function m(e,t,n,o,r){if(r||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(g.has(l))return;g.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function v(e){return"string"==typeof e?e:s.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let n,o;let{href:s,as:g,children:b,prefetch:y,passHref:w,replace:j,shallow:x,scroll:C,locale:E,onClick:S,onMouseEnter:k,onTouchStart:P,legacyBehavior:M=!1}=e,O=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,M&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let N=!1!==y,L=l.default.useContext(f.RouterContext),R=l.default.useContext(d.AppRouterContext),I=null!=L?L:R,z=!L,{href:A,as:T}=l.default.useMemo(()=>{if(!L){let e=v(s);return{href:e,as:g?v(g):e}}let[e,t]=i.resolveHref(L,s,!0);return{href:e,as:g?i.resolveHref(L,g):t||e}},[L,s,g]),D=l.default.useRef(A),H=l.default.useRef(T);M&&(o=l.default.Children.only(n));let B=M?o&&"object"==typeof o&&o.ref:t,[F,U,W]=p.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(H.current!==T||D.current!==A)&&(W(),H.current=T,D.current=A),F(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[T,B,A,W,F]);l.default.useEffect(()=>{I&&U&&N&&m(I,A,T,{locale:E},z)},[T,A,U,E,N,null==L?void 0:L.locale,I,z]);let G={ref:Z,onClick(e){M||"function"!=typeof S||S(e),M&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,o,r,i,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:i,locale:c,scroll:s}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(h):h()}(e,I,A,T,j,x,C,E,z,N)},onMouseEnter(e){M||"function"!=typeof k||k(e),M&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&(N||!z)&&m(I,A,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0},z)},onTouchStart(e){M||"function"!=typeof P||P(e),M&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&(N||!z)&&m(I,A,T,{locale:E,priority:!0,bypassPrefetchedCheck:!0},z)}};if(c.isAbsoluteUrl(T))G.href=T;else if(!M||w||"a"===o.type&&!("href"in o.props)){let e=void 0!==E?E:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&h.getDomainLocale(T,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);G.href=t||_.addBasePath(u.addLocale(T,e,null==L?void 0:L.defaultLocale))}return M?l.default.cloneElement(o,G):l.default.createElement("a",Object.assign({},O,G),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,f]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(c||u)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=i.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),i.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),i.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!u){let e=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,u,d.current]);let h=o.useCallback(()=>{f(!1)},[]);return[p,u,h]};var o=n(7294),r=n(29);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:o,blurHeight:r,blurDataURL:l,objectFit:i}=e,a=o||t,s=r||n,c=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:o,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},8264:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var o=n(5893);n(7952);var r=n(1014),l=n.n(r),i=n(1664),a=n.n(i),s=n(5675),c=n.n(s),u=n(6316),f=n.n(u),d=n(7294);function p(e){let{label:t,options:n,onSelectOption:r}=e,[l,i]=(0,d.useState)(!1),s=(0,d.useRef)(null),c=(0,d.useCallback)(e=>{s.current&&!s.current.contains(e.target)&&i(!1)},[s,i]),u=()=>{i(!1),r()};return(0,d.useEffect)(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[c]),(0,o.jsxs)("div",{ref:s,className:f().select,children:[(0,o.jsx)("div",{className:f().select__label,onClick:()=>i(!l),children:t}),(0,o.jsx)("div",{className:"".concat(f().select__options," ").concat(l&&f().open),children:n.map(e=>(0,o.jsx)("div",{className:f().select__option,children:(0,o.jsx)(a(),{className:f().link,href:e.href,onClick:()=>u(e),children:e.value})},e.value))})]})}function h(){let[e,t]=(0,d.useState)(!1),n=(0,d.useRef)(null),r=(0,d.useCallback)(e=>{!n.current||n.current.contains(e.target)||e.target.classList.contains(l().menu__btn)||t(!1)},[]),i=(0,d.useCallback)(()=>{t(!1)},[]);return(0,d.useEffect)(()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}),[r]),(0,o.jsxs)("header",{className:l().header,children:[(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)(c(),{className:l().logo,src:"./logo.svg",alt:"Cleanlab",width:122,height:24,priority:!0})}),(0,o.jsxs)("div",{className:l().menu__btn,onClick:()=>t(!e),children:[(0,o.jsx)("span",{}),(0,o.jsx)("span",{}),(0,o.jsx)("span",{})]}),(0,o.jsxs)("div",{className:"".concat(l().menu__container," ").concat(e?l().open:""),ref:n,children:[(0,o.jsxs)("nav",{className:l().navigation,children:[(0,o.jsx)(a(),{className:l().link,href:"/about",onClick:()=>t(!1),children:"About"}),(0,o.jsx)(p,{label:"Products",options:[{value:"Product 1",href:"/#"},{value:"Product 2",href:"/#"},{value:"Product 3",href:"/#"}],onSelectOption:i}),(0,o.jsx)(p,{label:"Solutions",options:[{value:"Solution 1",href:"/#"},{value:"Solution 2",href:"/#"}],onSelectOption:i}),(0,o.jsx)(p,{label:"Learn",options:[{value:"Learn 1",href:"/#"},{value:"Learn 2",href:"/#"},{value:"Learn 3",href:"/#"},{value:"Learn 4",href:"/#"}],onSelectOption:i}),(0,o.jsx)(a(),{className:l().link,href:"https://communityinviter.com/apps/cleanlab-community/cleanlab-community",target:"_blank",onClick:()=>t(!1),children:"Join our community"})]}),(0,o.jsx)("button",{className:l().light__btn,type:"button",children:"Get in touch"}),(0,o.jsx)("button",{className:l().hard__btn,type:"button",children:"Try for free"})]})]})}var _=n(7889),g=n.n(_);function m(){return(0,o.jsx)("footer",{className:g().footer,children:"footer"})}function v(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h,{}),(0,o.jsx)(t,{...n}),(0,o.jsx)(m,{})]})}},7952:function(){},7889:function(e){e.exports={footer:"Footer_footer__nKPS_"}},1014:function(e){e.exports={header:"Header_header__D4RXM",menu:"Header_menu__tWkmD",menu__container:"Header_menu__container__xO6s5",logo:"Header_logo__UGbyD",navigation:"Header_navigation__sBx7C",link:"Header_link__5VEnv",light__btn:"Header_light__btn__YNpye",hard__btn:"Header_hard__btn__f_L3x",menu__btn:"Header_menu__btn__rAvkO",open:"Header_open__iZvng","slide-in":"Header_slide-in__ltg88"}},6316:function(e){e.exports={select:"Select_select__yySyj",select__label:"Select_select__label__uE_NA",select__options:"Select_select__options__KA1bb",open:"Select_open__42nSN","slide-in":"Select_slide-in__EkwMD",select__option:"Select_select__option__SxCxd"}},5675:function(e,t,n){e.exports=n(3740)},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);