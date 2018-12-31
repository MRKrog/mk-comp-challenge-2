// ********************************************
// GLOBAL VARIABLES ***************************
// ********************************************

navClick = document.getElementById("nav-btn");
sideBar = document.getElementById("side-Bar");
mainContent = document.getElementById("main");


if (window.innerWidth < 960) {
  resetSideBarMobile()
  navClick.addEventListener("click", mobileNav);
} else {
  navClick.addEventListener("click", desktopNav);
}

window.addEventListener('resize', function(){
  if (window.innerWidth > 960) {
    
    navClick.addEventListener("click", desktopNav);
    navClick.removeEventListener("click", mobileNav);
    // sideBar.classList.add('closedMobileNav');
  }
  if (window.innerWidth < 960) {
    navClick.removeEventListener("click", desktopNav);
    navClick.addEventListener("click", mobileNav);
  }
});

function mobileNav(){
  console.log('in mobile nav function');
  if (!(navClick.classList.contains('opened'))){
    navClick.classList.add('opened');
    sideBar.classList.remove('closedMobileNav');
    sideBar.classList.add('openMobileNav');
  } else if (navClick.classList.contains('opened')) {
    navClick.classList.remove('opened');
  }
}

function desktopNav(){
  console.log('in desktop nav function');
  if (!(navClick.classList.contains('opened'))){
    navClick.classList.add('opened');
    sideBar.classList.remove('closedDesktopNav');
    sideBar.classList.add('openDesktopNav');
    mainContent.classList.add('mainFull');
  } else if (navClick.classList.contains('opened')) {
    navClick.classList.remove('opened');
    sideBar.classList.add('closedDesktopNav');
    sideBar.classList.remove('openDesktopNav');
    mainContent.classList.remove('mainFull');
  }
}

function closeMobileNav() {
  navClick.classList.remove('opened');
  sideBar.classList.remove('openMobileNav')
  sideBar.classList.add('closedMobileNav')
}

function resetSideBarMobile(){
  sideBar.classList.add('closedMobileNav');
}
