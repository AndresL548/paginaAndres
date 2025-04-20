document.getElementById('showButton').addEventListener('click', function() {
    document.getElementById('vegeta').classList.add('mostrar');
});

document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('vegeta').classList.remove('mostrar');
});



// Parte de la barra de frutas que cambian con el tiempo

const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const images = card.querySelectorAll('img');
    const dots = card.querySelectorAll('.dot');
    let current = 0;

    function showSlide(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
      });
    }

    function nextSlide() {
      current = (current + 1) % images.length;
      showSlide(current);
    }

    const slider = card.querySelector('.slider-container');
    slider.addEventListener('click', nextSlide);

    setInterval(() => {
      nextSlide();
    }, 4000);
  });

