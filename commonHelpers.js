import{S as d,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(s){const r="https://pixabay.com",i="/api/",e={key:"43059810-21766dfeafea29ca9c24ae0e2",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0},t=new URLSearchParams(e),o=`${r}${i}?${t}`;return fetch(o).then(a=>a.json()).catch(a=>{throw new Error(response.status)})}function g(s){const{largeImageURL:r,webformatURL:i,tags:l,likes:e,views:t,comments:o,downloads:a}=s;return`<li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img
            src="${i}"
            alt="${l}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><p class="gallery-descript__p">likes</p> ${e}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Views</p> ${t}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Coments</p> ${o}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Dowloads</p> ${a}</li>
     </ul>
	</a>
</li>`}function f(s){return s.map(g).join("")}const u=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),n=document.querySelector(".loader");u.addEventListener("submit",y);const h=new d(".gallery-link",{captionsData:"alt",captionDelay:250});function y(s){s.preventDefault(),p.innerHTML="";const r=s.target["input-search"].value.trim();if(!r){c.info({position:"topRight",message:"INPUT SEARCH"});return}console.log(r),n.classList.remove("is-hidden"),m(r).then(i=>{if(console.log(i.hits),!i.hits.length){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.add("is-hidden");return}p.innerHTML=f(i.hits),n.classList.add("is-hidden"),h.refresh()}),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
