
// Carousel in hero
function carouselTitle(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  
  parentSelector.insertAdjacentHTML('beforeend', clone);
  
  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}
 
window.addEventListener('load', carouselTitle('.jsCarouselTitle', .4))
  


// accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// Mas info

// Mobile menu - opening/closing from Menu button
const jsBtn = document.querySelector('.jsBtn');
jsBtn.addEventListener('click', toggleMenu);

const jsHide = document.querySelector('.jsHide');

function toggleMenu() {
    jsHide.classList.toggle('jsHide')
}

// // Mobile menu - closing from green layer
// const jsList = document.querySelector('.jsList');
// jsList.addEventListener('click', hideMenu);

// const closeMenu = document.querySelector('.jsList');

// function hideMenu() {
//     closeMenu.classList.toggle('jsHide')
// }