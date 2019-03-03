var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/expression/filters/example.jsx.js"]=function(e){function t(t){for(var r,s,o=t[0],u=t[1],i=t[2],c=0,p=[];c<o.length;c++)s=o[c],n[s]&&p.push(n[s][0]),n[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,i||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],r=!0,o=1;o<l.length;o++){var u=l[o];0!==n[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=l[0]))}return e}var r={},n={110:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},a=[];function s(t){if(r[t])return r[t].exports;var l=r[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=r,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var d=u;return a.push([178,0]),l()}({0:function(e,t){e.exports=React},178:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.ExpressionNarrow=t.ExpressionNarrowGroup=t.ExpressionNarrowFooter=void 0;var r=d(l(0)),n=l(40),a=d(l(4)),s=d(l(2)),o=l(8),u=l(216),i=d(l(3));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(e){return r.default.createElement("div",{className:"demo-only",style:{maxWidth:"320px",overflow:"hidden"}},e.children)};c.propTypes={children:i.default.node};var p=t.ExpressionNarrowFooter=function(e){return r.default.createElement("div",{className:"slds-m-top_small"},r.default.createElement(o.Button,{isNeutral:!0},r.default.createElement(a.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"add"}),"Add Condition"),e.hasGroup&&r.default.createElement(o.Button,{isNeutral:!0},r.default.createElement(a.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"add"}),"Add Group"))};p.propTypes={hasGroup:i.default.bool};var f=t.ExpressionNarrowGroup=function(e){return r.default.createElement("div",{className:"slds-filters__group"},r.default.createElement("div",{className:"slds-grid slds-grid_align-spread"},r.default.createElement("span",null,r.default.createElement("strong",null,"AND")),r.default.createElement("span",{className:"slds-assistive-text"},"Condition Group 1"),r.default.createElement(s.default,{className:"slds-button_icon slds-button_icon-small",iconClassName:"slds-button__icon_hint",symbol:"delete",assistiveText:"Remove Group",title:"Remove Group"})),r.default.createElement(n.ExpressionOptions,{isInFilter:!0,optionSelected:e.optionSelected}),r.default.createElement("ol",null,r.default.createElement(u.FilterObject,{type:"Amount",removable:!0,removeSymbol:"delete"},'greater than "1000"')),r.default.createElement(p,null))};f.propTypes={optionSelected:i.default.string};var m=t.ExpressionNarrow=function(e){return r.default.createElement(c,null,r.default.createElement(u.Filters,null,r.default.createElement("h2",{className:"slds-text-heading_small"},"Conditions"),r.default.createElement("div",{className:"slds-m-vertical_small"},r.default.createElement(n.ExpressionOptions,{isInFilter:!0,optionSelected:e.optionSelected})),r.default.createElement("ol",{className:"slds-list_vertical slds-list_vertical-space"},r.default.createElement(u.FilterObject,{type:"Amount",removable:!0,removeSymbol:"delete"},'greater than "1000"'),e.children),r.default.createElement(p,{hasGroup:!0})))};m.propTypes={optionSelected:i.default.string,children:i.default.node},t.default=r.default.createElement(m,null);t.examples=[{id:"with-narrow-expression-group",label:"With Narrow Expression Group",element:r.default.createElement(m,null,r.default.createElement(u.FilterObject,{operator:"AND",type:"Status",removable:!0},"equals Red"),r.default.createElement(u.FilterObjectListItem,null,r.default.createElement(f,null)))},{id:"with-option-selected",label:"With Narrow Expression Group",element:r.default.createElement(m,{optionSelected:"all"},r.default.createElement(u.FilterObject,{operator:"AND",type:"Status",removable:!0},"equals Red"))}]}});