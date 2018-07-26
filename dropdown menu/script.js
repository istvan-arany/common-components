var
//select top menu button
  menuButton = document.getElementById('first'),

//put dropdown menuitems into an array
  dropdown = document.getElementsByClassName('dropdown-item'),

//click away area
  noMenu = '.main-page';

//get state of layout
function getLayoutMarker() {
  let 
  layoutMarker = document.getElementById('hide-this'),
  style = window.getComputedStyle(layoutMarker),
  marker = style.getPropertyValue('display');
  return marker;
}

//hiding elements
function hide() {
    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].className = 'button hidden dropdown-item';  
    }
}

//revealing elements
function reveal() {
    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].className = 'button visible dropdown-item';
    }
}

//hide dropdown when user clicks off area
function clickAway() {
  if (dropdown[1].classList.contains('visible')) {
    hide();
  }
}

//menu button toggle on/off
function toggleMenu() {
  //is it navbar layout?
  if (getLayoutMarker() === ('none')){
    return;
  } else {
    if (dropdown[1].classList.contains('visible')) {
      hide();
    } else {
      reveal();
    }
  }
}

//smooth scrolling function
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    var isFirst = this.id,
        marker = getLayoutMarker();
      //if its dropdown layout, menu button pressed > don't scroll
      if (isFirst == 'first' && marker == 'list-item') {
      event.preventDefault();
    } else {
      console.log(this.id, getLayoutMarker());
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 48
      }, 1000);
    }
  }
});

//adding listener to menu button
menuButton.addEventListener("click", toggleMenu);
//adding listener to document body
document.getElementById('main-page').addEventListener("click", clickAway);
//adding listener to menu elements
for (links = 0; links < dropdown.length; links++) {
  dropdown[links].addEventListener("click", hide);
}