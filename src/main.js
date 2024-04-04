import { getImage} from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const form = document.querySelector('.js-search-form');
const listElement = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.js-load-more');
const endSearch = document.querySelector('.end_search')

form.addEventListener('submit', handlerSubmit);
btnLoadMore.addEventListener('click', onLoadMoreClick);

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

// ================================================

let searchQuery;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;

// =================================================

async function handlerSubmit(event) {
    event.preventDefault()
      endSearch.classList.add('is-hidden');
     listElement.innerHTML = '';
    currentPage = 1;
    searchQuery = event.target.elements.input_search.value.trim();
    if (!searchQuery) {
        iziToast.info({
            position: "topRight",
            message: "INPUT SEARCH"
        })
        hiddenLoadMore();
        return
    }
   
    try {
        showLoader();
        const data = await getImage(searchQuery, currentPage);
      

        maxPage = Math.ceil(data.totalHits / pageSize);

        if (!data.hits.length) {
            iziToast.error({
                position: "topRight",
                message: "Sorry, there are no images matching your search query. Please try again!"
            });
            hiddenLoadMore();
            loaderEl.classList.add('is-hidden');
            form.reset();
            return
        }
       
        renderImages(data.hits);
    } catch (err) {
        console.log(err);
    }
    hiddenLoader();
        lightbox.refresh();
   
    form.reset();
    
    checkBtnLoadMoreStatus();
   
}



async function onLoadMoreClick() {
    showLoader();
    currentPage += 1;
    try {
        const data = await getImage(searchQuery, currentPage);
        // list.innerHTML = imagesTemplate(data.hits);
        renderImages(data.hits);
    } catch (err) {
        console.log(err);
    }
   
    lightbox.refresh();
 
    checkBtnLoadMoreStatus();
    hiddenLoader();
    myScroll();
}


// =====================================
function showLoadMore() {
    btnLoadMore.classList.remove('is-hidden');
}

function hiddenLoadMore() {
    btnLoadMore.classList.add('is-hidden');
}

function checkBtnLoadMoreStatus() {
    if (currentPage >= maxPage) {
        hiddenLoadMore();
         endSearch.classList.remove('is-hidden');

    } else {
        showLoadMore();
    }
}

function showLoader() {
    loaderEl.classList.remove('is-hidden');
}

function hiddenLoader() {
     loaderEl.classList.add('is-hidden');
}
// =====================================
function renderImages(arr) {
  const markup = imagesTemplate(arr);
    listElement.insertAdjacentHTML('beforeend', markup);
}
// =======================================

function myScroll() {
    const heightCard = listElement.firstChild.getBoundingClientRect().height;
    console.log(heightCard);
    scrollBy({
        top: heightCard * 2,
        behavior: 'smooth',
    });
}