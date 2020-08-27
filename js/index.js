window.onload = function() {
  var menuIcon = document.getElementById('menu_icon');
  var mobileMenuIcon = document.getElementsByClassName('mobile-menu-icon');
  var mobileMenu = document.getElementsByClassName('mobile-menu');
  
  menuIcon.addEventListener('click', activeMenu);
  
  function activeMenu() {
    mobileMenu[0].classList.toggle('mobile-menu-active');
  }
  
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 300,
    pagination: {
      el: '.swiper-pagination',
    }
  })
  
  function onAutoplay() {
    var slideElement = document.getElementsByClassName('review');
    return slideElement.length > 3 || window.innerWidth <= 928;
  }
  var reviewsSlider = new Swiper('.reviews-container', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: onAutoplay(),
    speed: 300,
    spaceBetween: 0,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      928: {
        slidesPerView: 3,
        spaceBetween: 100,
      }
    }
  })
  
  var navigationUserProfile = document.getElementById('navigation_user_profile');
  var userProfileSubmenu = document.getElementsByClassName('user-profile-submenu');
  navigationUserProfile.onmouseover = function() {
    userProfileSubmenu[0].classList.add('user-profile-submenu-active');
  }
  navigationUserProfile.onmouseout = function() {
    userProfileSubmenu[0].classList.remove('user-profile-submenu-active');
  }
  userProfileSubmenu[0].onclick = function() {
    this.classList.remove('user-profile-submenu-active');
  }
  
  var element = document.getElementsByClassName('tracked-element');
  var pageNavigationLink = document.getElementsByClassName('page-navigation-name-blok');
  var pageNavigationClass = document.getElementsByClassName('page-navigation');

  function pageNavigationInicialize() {
    var width = window.innerWidth;

    if (width >= 1160) {
      window.addEventListener('scroll', function () {
        pageNavigation(element);
      });

      pageNavigation(element);
    }
  }
  pageNavigationInicialize();
  window.onresize = function () {
    pageNavigationInicialize();
  }

  function pageNavigation(target) {
    windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    for (let i = 0; i < target.length; i++) {
      var targetPosition = {
        top: window.pageYOffset + target[i].getBoundingClientRect().top,
        bottom: window.pageYOffset + target[i].getBoundingClientRect().bottom
      };
      pageNavigationLink[i].classList.remove('page-navigation-name-blok-active');
      pageNavigationClass[0].classList.remove('page-navigation-color');
      if (window.pageYOffset !== 0) {
        pageNavigationClass[0].classList.add('page-navigation-color');
      }
      if (windowPosition.top >= targetPosition.top - 3 && windowPosition.top < targetPosition.bottom - 3) {
        pageNavigationLink[i].classList.add('page-navigation-name-blok-active');
      }
    }
  };

  //const anchors = document.querySelectorAll('a[href*="#"]');
  const anchors = document.getElementsByClassName('page-link');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }
}
