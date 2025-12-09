document.addEventListener('DOMContentLoaded', function() {
  // Get all front images (the ones that should flip)
  const image1 = document.querySelector('.image1');
  const image2 = document.querySelector('.image2');
  const image3 = document.querySelector('.image3');
  const image4 = document.querySelector('.image4');
  const image5 = document.querySelector('.image5');
  const image6 = document.querySelector('.image6');
  const image7 = document.querySelector('.image7');
  const image8 = document.querySelector('.image8');
  const image9 = document.querySelector('.image9');
  const image10 = document.querySelector('.image10');
  const image11 = document.querySelector('.image11');
  const image12 = document.querySelector('.image12');
  const image13 = document.querySelector('.image13');
  const image14 = document.querySelector('.image14');
  const image15 = document.querySelector('.image15');
  const image16 = document.querySelector('.image16');
  const image17 = document.querySelector('.image17');
  const image18 = document.querySelector('.image18');
  const image19 = document.querySelector('.image19');
  const image20 = document.querySelector('.image20');
  
  const allImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
                     image11, image12, image13, image14, image15, image16, image17, image18, image19, image20];
  
  function addClickListeners() {
    if (window.innerWidth <= 1800) {
      allImages.forEach(img => {
        if (img) {
          img.addEventListener('click', function() {
            this.classList.toggle('hidden');
          });
        }
      });
    }
  }
  
  // Add listeners on load
  addClickListeners();
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1800) {
      allImages.forEach(img => {
        if (img) {
          img.classList.remove('hidden');
        }
      });
    }
  });
});