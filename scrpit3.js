/* javascript*/

var header = document.getElementById('header')
var navigationHeader = document.getElementById('navigation-header')
var content = document.getElementById('content')
var showSidebar = false; 

function toggleSidebar (){
    showSidebar = !showSidebar
    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vw'
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(3px)'
    }
    else{
        navigationHeader.style.marginLeft = '-100vw'
        navigationHeader.style.animationName = '';
        content.style.filter = ''
    }
}

function closeSidebar(){
    if(showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
})
/* carrossel */



//card carrossel
  const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
