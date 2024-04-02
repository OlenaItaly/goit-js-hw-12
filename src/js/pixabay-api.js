// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// const BASE_URL = 'https://pixabay.com';
// const END_POINT = '/api/';
// const API_KEY = '43059810-21766dfeafea29ca9c24ae0e2';


//  export function getImage(q, page) {
//     const params = {
//     key: API_KEY,
//         q: '',
//     image_type: "photo",
//     page: 1,
//     per_page: 20,
//     orientation: 'horizontal',
//     safesearch: true,
           
//     };
//     const options = new URLSearchParams(params);
//     return fetch(`${BASE_URL}${END_POINT}?${options}`).then(res => {
//         if (!res.ok) {
//            throw new Error(' ERROR!')
//         }
//         return res.json()
//      });
//   }
// getImage('cat', 1).then(res => console.log(res));
// ==============================================

export function getImage(q) {
    const BASE_URL= 'https://pixabay.com';
    const END_POINT = '/api/';
    const API_KEY = '43059810-21766dfeafea29ca9c24ae0e2';
     const params = {
  key: API_KEY,
    q,
    image_type: "photo",
    orientation: 'horizontal',
    safesearch: true,
    };
    const options = new URLSearchParams(params);
    const url=`${BASE_URL}${END_POINT}?${options}`;
    return fetch(url).then(res => {
        // if (!res.ok) {
        //     throw new Error(response.status);
        // }
        return res.json();
    }).catch(error => {
        throw new Error(response.status)
    });
}
         
