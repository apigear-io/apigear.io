"use strict";(self.webpackChunkapigear=self.webpackChunkapigear||[]).push([[840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"API surface for objects",description:"Overview of a typical API surface for objects in an IDL.",slug:"api-surface",tags:["api","idl"],authors:[{name:"J\xfcrgen Ryannel",title:"Lead Programmer",image_url:"https://avatars.githubusercontent.com/u/636357?v=4"}]},i=void 0,c={permalink:"/blog/api-surface",source:"@site/blog/2023-02-27-api-surface.md",title:"API surface for objects",description:"Overview of a typical API surface for objects in an IDL.",date:"2023-02-27T00:00:00.000Z",formattedDate:"February 27, 2023",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"idl",permalink:"/blog/tags/idl"}],readingTime:2.945,hasTruncateMarker:!0,authors:[{name:"J\xfcrgen Ryannel",title:"Lead Programmer",image_url:"https://avatars.githubusercontent.com/u/636357?v=4",imageURL:"https://avatars.githubusercontent.com/u/636357?v=4"}],frontMatter:{title:"API surface for objects",description:"Overview of a typical API surface for objects in an IDL.",slug:"api-surface",tags:["api","idl"],authors:[{name:"J\xfcrgen Ryannel",title:"Lead Programmer",image_url:"https://avatars.githubusercontent.com/u/636357?v=4",imageURL:"https://avatars.githubusercontent.com/u/636357?v=4"}]}},s={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An API surface is the public interface of an object which is exposed to users of the object. The API surface is defined by an IDL and defines the contract between the user and the implementer of an object."))}p.isMDXComponent=!0}}]);