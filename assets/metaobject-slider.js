const initSwiper = () => {
  console.log('Inicializando Swiper...');
  const swiperElement = document.querySelector('.mySwiper');

 if (swiperElement && typeof Swiper !== 'undefined') {
     new Swiper('.mySwiper', { 
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  } else {
    console.error("Erro: A biblioteca Swiper não foi encontrada. Verifique se o script do CDN está no seu arquivo Liquid.");
  }
}

document.addEventListener('DOMContentLoaded', initSwiper);
document.addEventListener('shopify:section:load', initSwiper);