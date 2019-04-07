var
//put dropdown menuitems into an array
  dropdown = document.getElementsByClassName('dropdown-item'),
    
  menuButton = document.getElementById('first'),
    
  companyLogo = document.getElementById('company-logo'),
    
  menuSvg = document.getElementById('menu-svg'),
    
  marker = document.getElementById('marker');

//get state of layout
function getLayoutMarker() {
  return window.getComputedStyle(marker).getPropertyValue('display');
}

//hiding elements
function hide() {
    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].className = 'button hidden dropdown-item';
    nav.classList.remove('menu-radius');
    menuButton.classList.remove('bg-blue');
    menuSvg.src = '/res/menu.svg'; 
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
  if (getLayoutMarker() === 'flex'){
    return;
  } else {
    if (dropdown[1].classList.contains('visible')) {
      hide();
      nav.classList.remove('menu-radius');
      menuButton.classList.remove('bg-blue');
      menuSvg.src = '/res/menu.svg';
      companyLogo.src = '/res/copmany_logo.svg';
    } else {
      reveal();
      nav.classList.add('menu-radius');
      menuButton.classList.add('bg-blue');
      menuSvg.src = '/res/menu_inv.svg';
      companyLogo.src = '/res/copmany_logo_inv.svg';
    }
  }
}

//adding listener to menu button
document.getElementById('first').addEventListener("click", toggleMenu);

//adding listener to document body
document.getElementById('main-page').addEventListener("click", clickAway);

//adding listener to menu elements
for (links = 0; links < dropdown.length; links++) {
  dropdown[links].addEventListener("click", hide);
}