var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/visual-picker/link/example.jsx.js"]=function(e){function t(t){for(var l,n,o=t[0],i=t[1],c=t[2],d=0,f=[];d<o.length;d++)n=o[d],a[n]&&f.push(a[n][0]),a[n]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],l=!0,o=1;o<s.length;o++){var i=s[o];0!==a[i]&&(l=!1)}l&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var l={},a={169:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},r=[];function n(t){if(l[t])return l[t].exports;var s=l[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=l,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;return r.push([249,0]),s()}({0:function(e,t){e.exports=React},249:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VisualPickerMediaObject=void 0;var l=n(s(0)),a=n(s(1)),r=s(6);function n(e){return e&&e.__esModule?e:{default:e}}var o=t.VisualPickerMediaObject=function(e){var t=e.symbol||"knowledge_base",s=e.icon||l.default.createElement(r.UtilityIcon,{className:"slds-icon-text-default",symbol:t,title:!1,assistiveText:!1});return l.default.createElement("a",{href:"javascript:void(0);",className:(0,a.default)("slds-box slds-box_link slds-box_x-small slds-media",e.className)},l.default.createElement("div",{className:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small"},s),l.default.createElement("div",{className:"slds-media__body slds-border_left slds-p-around_small"},e.children))};t.default=l.default.createElement("div",{className:"demo-only",style:{width:"24rem"}},l.default.createElement(o,{symbol:"knowledge_base"},l.default.createElement("h2",{className:"slds-truncate slds-text-heading_small",title:"Share the knowledge"},"Share the knowledge"),l.default.createElement("p",{className:"slds-m-top_small"},"Harness your team's collective know-how with our powerful knowledge base")))}});