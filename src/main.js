import { getImage} from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



const form = document.querySelector('.js-search-form');
const list = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');

form.addEventListener('submit', handlerSubmit);

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});


function handlerSubmit(event) {
    event.preventDefault()
    
     list.innerHTML = '';
    const searchQuery = event.target['input-search'].value.trim();
    if (!searchQuery) {
        iziToast.info({
            position: "topRight",
            message: "INPUT SEARCH"
        })
        return
    }
   
    console.log(searchQuery);
    loaderEl.classList.remove('is-hidden');
    getImage(searchQuery).then(res => {
        console.log(res.hits);
        if (!res.hits.length ) {
             iziToast.error({
                position: "topRight",
                 message: "Sorry, there are no images matching your search query. Please try again!"
                
             });
             loaderEl.classList.add('is-hidden');
            return
        }
        list.innerHTML = imagesTemplate(res.hits);
         loaderEl.classList.add('is-hidden');
        lightbox.refresh();
    });
    form.reset();
}


