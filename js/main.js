
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
  


// Drop-down content
let acc = document.getElementsByClassName("jsAccordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("jsActive");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// hide hover image - needs fixing
const jsBtn = document.querySelector('.jsBtn');
jsBtn.addEventListener('click', toggleMenu);

const jsHide = document.querySelector('.jsHide');

function toggleMenu() {
    console.log('aloha');
    jsHide.classList.toggle('jsHide')
}