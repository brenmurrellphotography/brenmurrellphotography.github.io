"use strict";(self.webpackChunkbren_murrell_photography=self.webpackChunkbren_murrell_photography||[]).push([[439],{7803:function(e,t,a){a.r(t);var n=a(7294),m=a(7838);t.default=function(e){const{product:t}=e.data;return n.createElement(m.Z,{product:t})}},7838:function(e,t,a){var n=a(7294);t.Z=function(e){let{product:t}=e;const{0:a,1:m}=(0,n.useState)(t.price),{0:l,1:s}=(0,n.useState)({frame:"Black",glass:"UV70",size:"8x6",thickness:"Skinny"}),i=e=>{s({...l,[e.target.name]:e.target.value})};(0,n.useEffect)((()=>{const e=c.frame[l.frame]+c.glass[l.glass]+c.thickness[l.thickness];m(t.price+e)}),[l]);const c={frame:{Black:0,White:0,Slate:5,Rimu:0},glass:{Standard:0,UV70:25},thickness:{Skinny:0,Slim:5,Standard:5}};return n.createElement("main",null,n.createElement("div",{className:"spacer"}),n.createElement("div",{className:"simple-grid"},n.createElement("div",{className:"simple-grid__400"},"busin",n.createElement("img",{className:"product__image",alt:t.description,src:"https://bmp-images.s3.ap-southeast-2.amazonaws.com/"+t.meta.sku+"/"+l.size+"/"+l.frame+l.thickness+".png"})),n.createElement("div",{className:"simple-grid__fill"},n.createElement("h1",null,t.name),n.createElement("p",null,t.description),n.createElement("p",null,"$",a),n.createElement("label",null,"Frame colour",n.createElement("select",{name:"frame",id:"frame",onChange:i,value:l.frame},n.createElement("option",null,"Select one..."),n.createElement("option",{value:"Black"},"Black"),n.createElement("option",{value:"Rimu"},"Rimu"),n.createElement("option",{value:"Slate"},"Slate"),n.createElement("option",{value:"White"},"White"))),n.createElement("label",null,"Glass type",n.createElement("select",{name:"glass",id:"glass",onChange:i,value:l.glass},n.createElement("option",null,"Select one..."),n.createElement("option",{value:"Standard"},"Standard"),n.createElement("option",{value:"UV70"},"UV70"))),n.createElement("label",null,"Print size",n.createElement("select",{name:"size",id:"size",onChange:i,value:l.size},n.createElement("option",null,"Select one..."),n.createElement("option",{value:"8x6"},'8" x 6"'))),n.createElement("label",null,"Frame thickness",n.createElement("select",{name:"thickness",id:"thickness",onChange:i,value:l.thickness},n.createElement("option",{value:"Standard"},"Standard (30mm wide x 20mm deep)"),n.createElement("option",{value:"Skinny"},"Skinny (20mm wide x 20mm deep)"),n.createElement("option",{value:"Slim"},"Slim (20mm wide x 30mm deep)"))),n.createElement("button",{className:"snipcart-add-item","data-item-id":t.meta.id,"data-item-price":t.price,"data-item-description":t.description,"data-item-image":"https://bmp-images.s3.ap-southeast-2.amazonaws.com/"+t.meta.sku+"/"+l.size+"/"+l.frame+l.thickness+".png","data-item-name":t.name,"data-item-custom1-type":"readonly","data-item-custom1-name":"Frame color","data-item-custom1-options":"Black|White|Rimu|Slate[+5]","data-item-custom1-value":l.frame,"data-item-custom2-name":"Glass type","data-item-custom2-options":"Standard|UV70[+25]","data-item-custom2-type":"readonly","data-item-custom2-value":l.glass,"data-item-custom3-name":"Size","data-item-custom3-options":"8x6","data-item-custom3-type":"readonly","data-item-custom3-value":l.size,"data-item-custom4-name":"Thickness","data-item-custom4-options":"Standard[+5]|Skinny|Slim[+5]","data-item-custom4-type":"readonly","data-item-custom4-value":l.thickness},"Add to cart"),n.createElement("button",{className:"snipcart-checkout"},"Click here to checkout"))))}}}]);
//# sourceMappingURL=component---src-pages-products-product-meta-sku-js-0d1531ff208e79ff30db.js.map