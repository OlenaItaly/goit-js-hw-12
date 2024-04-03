function imageTemplate(data) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = data;
  return `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img
            src="${webformatURL}"
            alt="${tags}"
            width="360"
            height="200"
            class="gallery-img"
            loading="lazy"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><p class="gallery-descript__p">likes</p> ${likes}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Views</p> ${views}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Coments</p> ${comments}</li>
        <li class="gallery-descript__item"><p class="gallery-descript__p">Dowloads</p> ${downloads}</li>
     </ul>
	</a>
</li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

