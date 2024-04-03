// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

export async function getImage(q, currentPage) {
    const BASE_URL= 'https://pixabay.com';
    const END_POINT = '/api/';
    const API_KEY = '43059810-21766dfeafea29ca9c24ae0e2';
     const params = {
  key: API_KEY,
         q,
         page: currentPage,
    per_page: 15,
    image_type: "photo",
    orientation: 'horizontal',
    safesearch: true,
    };

    const url = `${BASE_URL}${END_POINT}`;
    const res = await axios.get(url,{params})
    return res.data;
   
}
         
