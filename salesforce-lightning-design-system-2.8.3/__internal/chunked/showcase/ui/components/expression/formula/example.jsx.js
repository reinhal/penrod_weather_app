var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/expression/formula/example.jsx.js"]=function(e){function t(t){for(var n,o,u=t[0],s=t[1],c=t[2],p=0,f=[];p<u.length;p++)o=u[p],l[o]&&f.push(l[o][0]),l[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(i&&i(t);f.length;)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==l[s]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},l={177:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var u=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var i=s;return a.push([257,0]),r()}({0:function(e,t){e.exports=React},257:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Formula=void 0;var n=s(r(0)),l=s(r(3)),a=r(40),o=r(8),u=r(68);function s(e){return e&&e.__esModule?e:{default:e}}var c=t.Formula=function(e){return n.default.createElement("div",{className:"slds-expression"},n.default.createElement(a.ExpressionOptions,{optionSelected:e.optionSelected}),n.default.createElement("div",{className:"slds-expression_formula__rte"},n.default.createElement(u.RichTextEditor,{label:"Formula"},n.default.createElement(u.RteToolbar,null,n.default.createElement(u.RteFormula,null)),n.default.createElement(u.RteTextarea,{label:"Compose formula",placeholder:"Compose formula..."}))),n.default.createElement("div",{className:"slds-m-top_small"},n.default.createElement(o.Button,{isNeutral:!0},"Check Syntax")))};c.propTypes={optionSelected:l.default.string},t.default=n.default.createElement(c,{optionSelected:"formula"})}});