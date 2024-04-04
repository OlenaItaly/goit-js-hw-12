import{a as P,S as E,i as f}from"./assets/vendor-550cebad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function h(e,s){const a="https://pixabay.com",o="/api/",r={key:"43059810-21766dfeafea29ca9c24ae0e2",q:e,page:s,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0},i=`${a}${o}`;return(await P.get(i,{params:r})).data}function v(e){const{largeImageURL:s,webformatURL:a,tags:o,likes:t,views:r,comments:i,downloads:m}=e;return`<li class="gallery-item">
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
        <li class="gallery-descript__item"><p class="gallery-descript__p">Dowloads</p> ${m}</li>
     </ul>
	</a>
</li>`}function M(e){return e.map(v).join("")}const c=document.querySelector(".js-search-form"),u=document.querySelector(".js-gallery"),p=document.querySelector(".loader"),g=document.querySelector(".js-load-more");c.addEventListener("submit",I);g.addEventListener("click",O);const y=new E(".gallery-link",{captionsData:"alt",captionDelay:250});let l,n=1,L=0;const $=15;async function I(e){if(e.preventDefault(),u.innerHTML="",n=1,l=e.target.elements.input_search.value.trim(),!l){f.info({position:"topRight",message:"INPUT SEARCH"}),d();return}try{S();const s=await h(l,n);if(L=Math.ceil(s.totalHits/$),!s.hits.length){f.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d(),p.classList.add("is-hidden"),c.reset();return}b(s.hits)}catch(s){console.log(s)}w(),y.refresh(),c.reset(),_()}async function O(){S(),n+=1;try{const e=await h(l,n);b(e.hits)}catch(e){console.log(e)}y.refresh(),_(),w(),T()}function R(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}function _(){n>=L?d():R()}function S(){p.classList.remove("is-hidden")}function w(){p.classList.add("is-hidden")}function b(e){const s=M(e);u.insertAdjacentHTML("beforeend",s)}function T(){const e=u.firstChild.getBoundingClientRect().height;console.log(e),scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
