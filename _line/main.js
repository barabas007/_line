

const bar = document.querySelector('.bar');


window.addEventListener('scroll',scrollBar);

function scrollBar(e) {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // Получаем высоту нашей страницы
  let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // Получаем количество прокрутки в процентах
  let formula = (windowScroll / windowHeight) * 100; 
  
  // передаём в наш div

  bar.style.width = formula + '%';


}