const galleryItems = document.querySelectorAll('.gallery-item');
const fullScreenImage = document.getElementById('fullScreenImage');
const fullImage = document.getElementById('fullImage');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        fullImage.src = item.src;
        fullScreenImage.style.display = 'flex';
    });
});

function closeFullScreen() {
    fullScreenImage.style.display = 'none';
}
