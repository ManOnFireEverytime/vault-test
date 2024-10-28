import{_ as g,r as h,y as p,z as f,v,c,a as t,F as E,n as I,t as e,p as w,o as d}from"./COHBFirr.js";const y={setup(){const l=h(null),o=p(),i="http://localhost/vault/products/",r=s=>s?`${i}${s}`:null,u=s=>{s.target.src="/path/to/fallback-image.jpg",console.error("Image failed to load:",s.target.src)},m=f(()=>{if(!l.value)return[];const s=[];for(let a=2;a<=5;a++){const _=l.value[`image${a}`];_&&s.push(_)}return s});return v(async()=>{try{const s=await fetch(`http://localhost/vault/getProductById.php?id=${o.params.id}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);const a=await s.json();a.status==="success"?l.value=a.data:console.error("Failed to fetch product details:",a.message)}catch(s){console.error("Error fetching product:",s)}}),{product:l,additionalImages:m,getImageUrl:r,handleImageError:u}}},U={key:0,class:"product__id"},b={class:"row"},x={class:"col-lg-6 col-md-6 left"},P={class:"row"},T={class:"col-12"},A=["src","alt"],D=["src","alt"],N={class:"col-lg-6 col-md-6 right d-flex flex-column justify-content-between"},k={class:"desc"},R={class:"crimson-text"},B={class:"featuring"};function C(l,o,i,r,u,m){return r.product?(d(),c("div",U,[t("div",b,[t("div",x,[t("div",P,[t("div",T,[t("img",{src:r.getImageUrl(r.product.image1),class:"img-fluid main-image",alt:r.product.product_name,onError:o[0]||(o[0]=(...n)=>r.handleImageError&&r.handleImageError(...n))},null,40,A)]),(d(!0),c(E,null,I(r.additionalImages,(n,s)=>(d(),c("div",{key:s,class:"col-3 bottom__image"},[t("img",{src:r.getImageUrl(n),alt:`${r.product.product_name} - view ${s+2}`,class:"img-fluid",onError:o[1]||(o[1]=(...a)=>r.handleImageError&&r.handleImageError(...a))},null,40,D)]))),128))])]),t("div",N,[t("div",null,[t("h5",null,e(r.product.product_name),1),t("h6",k,e(r.product.description),1),t("h5",R,"£"+e(parseInt(r.product.price)),1),t("small",B,"Guaranteed value: £"+e(parseInt(r.product.min_range))+" - £"+e(parseInt(r.product.max_range)),1),o[2]||(o[2]=t("button",{class:"gradient__bg"},"SHOP NOW",-1))]),o[3]||(o[3]=t("div",{class:"pills"},[t("div",{class:"mission__pill"},[t("h6",null,"AUTHENTICITY GUARANTEED"),t("small",null,"Partnered with 100+ leading luxury brands")]),t("div",{class:"mission__pill"},[t("h6",null,"GUARANTEED VALUE"),t("small",null,"Partnered with 100+ leading luxury brands")]),t("div",{class:"mission__pill"},[t("h6",null,"REFUNDS AND RETURNS ACCEPTED"),t("small",null,"Partnered with 100+ leading luxury brands")])],-1))])])])):w("",!0)}const S=g(y,[["render",C],["__scopeId","data-v-51358a39"]]);export{S as default};