

const lightbox = document.createElement("div");
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.scr = image.scr;
    lightbox.appendChild(img);
  })
})