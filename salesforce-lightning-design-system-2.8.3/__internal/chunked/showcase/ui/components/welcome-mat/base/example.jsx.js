var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/welcome-mat/base/example.jsx.js"]=function(e){function t(t){for(var n,i,u=t[0],s=t[1],c=t[2],d=0,p=[];d<u.length;d++)i=u[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(o&&o(t);p.length;)p.shift()();return a.push.apply(a,c||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],n=!0,u=1;u<l.length;u++){var s=l[u];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=l[0]))}return e}var n={},r={149:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},a=[];function i(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=n,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var o=s;return a.push([224,0]),l()}({0:function(e,t){e.exports=React},224:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.Context=void 0;var n=u(l(0)),r=l(26),a=u(l(33)),i=u(l(57));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,l=Array(e.length);t<e.length;t++)l[t]=e[t];return l}return Array.from(e)}var c=(0,r.sampleTiles)(),o=[Object.assign({},c[0],{completed:!0}),Object.assign({},c[1],{completed:!0})].concat(s(c.slice(2))),d=[].concat(s(o)).concat(c.slice(2));t.Context=function(e){return n.default.createElement("div",{className:"demo-only",style:{height:"800px"}},e.children,n.default.createElement("div",{className:"slds-backdrop slds-backdrop_open"}))};t.default=n.default.createElement(a.default,null);t.examples=[{id:"with-completed-tiles",label:"With Completed Tiles",element:n.default.createElement(a.default,{tiles:o})},{id:"with-overflowing-tiles",label:"With Overflowing Tiles",element:n.default.createElement(a.default,{tiles:d})},{id:"with-overflowing-tiles-and-long-description",label:"With Overflowing Tiles and Long Description",element:n.default.createElement(a.default,{tiles:d,content:function(e){var t=e.complete,l=e.total,r=e.labelId;return n.default.createElement(i.default,{complete:t,total:l,labelId:r,description:n.default.createElement(n.default.Fragment,null,n.default.createElement("p",null,"Integer nibh libero, pulvinar sed libero et, rhoncus convallis purus. Sed faucibus nibh vel arcu vestibulum, nec commodo sapien tincidunt. In dignissim faucibus ipsum, nec placerat dui pulvinar a mi nec lectus feugiat vel arcu rhoncus convallis, nibh libero."),n.default.createElement("p",null,"Sed vestibulum dui ac diam suscipit vehicula. Nam vestibulum mi nec lectus feugiat euismod. Phasellus in suscipit est."),n.default.createElement("p",null,"Morbi facilisis aliquet dapibus. Morbi ac leo viverra, cursus nibh eget, ultrices mauris. Integer pharetra, lorem ac hendrerit vulputate, sem elit luctus metus, sit amet vehicula justo ex at sem."))})}})}]}});