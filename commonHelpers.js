import{a as b,S as P,i as g}from"./assets/vendor-550cebad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function m(e,s){const a="https://pixabay.com",o="/api/",r={key:"43059810-21766dfeafea29ca9c24ae0e2",q:e,page:s,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0},i=`${a}${o}`;return(await b.get(i,{params:r})).data}function E(e){const{largeImageURL:s,webformatURL:a,tags:o,likes:t,views:r,comments:i,downloads:p}=e;return`<li class="gallery-item">
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
        <li class="gallery-descript__item"><p class="gallery-descript__p">Dowloads</p> ${p}</li>
     </ul>
	</a>
</li>`}function v(e){return e.map(E).join("")}const f=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".loader"),u=document.querySelector(".js-load-more");f.addEventListener("submit",$);u.addEventListener("click",I);const h=new P(".gallery-link",{captionsData:"alt",captionDelay:250});let l,n=1,y=0;const M=15;async function $(e){if(e.preventDefault(),c.innerHTML="",n=1,l=e.target.elements.input_search.value.trim(),!l){g.info({position:"topRight",message:"INPUT SEARCH"});return}try{_();const s=await m(l,n);if(y=Math.ceil(s.totalHits/M),!s.hits.length){g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.classList.add("is-hidden");return}w(s.hits)}catch(s){console.log(s)}S(),h.refresh(),f.reset(),L()}async function I(){_(),n+=1;try{const e=await m(l,n);w(e.hits)}catch(e){console.log(e)}h.refresh(),L(),S(),T()}function O(){u.classList.remove("is-hidden")}function R(){u.classList.add("is-hidden")}function L(){n>=y?R():O()}function _(){d.classList.remove("is-hidden")}function S(){d.classList.add("is-hidden")}function w(e){const s=v(e);c.insertAdjacentHTML("beforeend",s)}function T(){const e=c.firstChild.getBoundingClientRect().height;console.log(e),scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
