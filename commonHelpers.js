import{a as v,S as E,i as h}from"./assets/vendor-550cebad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function f(e,s){const a="https://pixabay.com",o="/api/",r={key:"43059810-21766dfeafea29ca9c24ae0e2",q:e,page:s,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0},i=`${a}${o}`;return(await v.get(i,{params:r})).data}function M(e){const{largeImageURL:s,webformatURL:a,tags:o,likes:t,views:r,comments:i,downloads:g}=e;return`<li class="gallery-item">
	<a class="gallery-link" href="${s}">
		<img
            src="${a}"
            alt="${o}"
            width="360"
            height="200"
            class="gallery-img"
            loading="lazy"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><p class="gallery-descript__p">likes</p> ${t}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Views</p> ${r}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Coments</p> ${i}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Dowloads</p> ${g}</li>
     </ul>
	</a>
</li>`}function $(e){return e.map(M).join("")}const c=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),m=document.querySelector(".loader"),p=document.querySelector(".js-load-more"),y=document.querySelector(".end_search");c.addEventListener("submit",q);p.addEventListener("click",O);const L=new E(".gallery-link",{captionsData:"alt",captionDelay:250});let l,n=1,_=0;const I=15;async function q(e){if(e.preventDefault(),y.classList.add("is-hidden"),u.innerHTML="",n=1,l=e.target.elements.input_search.value.trim(),!l){h.info({position:"topRight",message:"INPUT SEARCH"}),d();return}try{w();const s=await f(l,n);if(_=Math.ceil(s.totalHits/I),!s.hits.length){h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d(),m.classList.add("is-hidden"),c.reset();return}P(s.hits)}catch(s){console.log(s)}b(),L.refresh(),c.reset(),S()}async function O(){w(),n+=1;try{const e=await f(l,n);P(e.hits)}catch(e){console.log(e)}L.refresh(),S(),b(),T()}function R(){p.classList.remove("is-hidden")}function d(){p.classList.add("is-hidden")}function S(){n>=_?(d(),y.classList.remove("is-hidden")):R()}function w(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}function P(e){const s=$(e);u.insertAdjacentHTML("beforeend",s)}function T(){const e=u.firstChild.getBoundingClientRect().height;console.log(e),scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
