let registrationBtn = document.querySelector('.account__name');
let closeRegistration = document.querySelector('.close_clean_form');
let navMobile = document.querySelector('.header__nav_menu');
let closeNavMobile = document.querySelector('.mobile__close');
let windowWidth = window.innerWidth;

let navMobileOutside =  document.querySelector('.header__mobile');

document.addEventListener('click', outsideEvtListener);

function outsideEvtListener(evt) {
   console.log(evt.target);
   console.log(navMobileOutside);
    if (navMobileOutside.contains(evt.target)) {
      document.querySelector('.header__mobile').classList.remove("scroll");
    }
}

registrationBtn.addEventListener('click', function(){
   document.querySelector('.clean_form_block').style.display='block';
});

closeRegistration.addEventListener('click', function(){
   document.querySelector('.clean_form_block').style.display='none';
});

navMobile.addEventListener('click', function(){
   document.querySelector('.header__mobile').classList.add("scroll");
});

closeNavMobile.addEventListener('click', function(){
   document.querySelector('.header__mobile').classList.remove("scroll");
});
