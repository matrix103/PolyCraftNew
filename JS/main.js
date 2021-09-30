let registrationBtn = document.querySelector('.account__name');
let closeRegistration = document.querySelector('.close_clean_form');
registrationBtn.addEventListener('click', function(){
   document.querySelector('.clean_form_block').style.display='block';
});

closeRegistration.addEventListener('click', function(){
   document.querySelector('.clean_form_block').style.display='none';
});