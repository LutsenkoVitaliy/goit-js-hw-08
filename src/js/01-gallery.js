import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);
const renderGallery = items => {
  const { preview, original, description } = items;
    
  return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
  `;
};
const galleryRef = document.querySelector('.gallery')

const imgGalleryEl = galleryItems.map(renderGallery).join('') 
galleryRef.insertAdjacentHTML('beforeend', imgGalleryEl)

new SimpleLightbox('.gallery a');
