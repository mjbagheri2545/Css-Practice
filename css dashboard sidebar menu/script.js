let menu = document.querySelector('.menu');
let lists = document.querySelectorAll('li');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let hamburgerIcon = document.querySelector('.hamburger-icon');

hamburgerMenu.addEventListener('click',()=>{
    if(hamburgerMenu.classList.contains('active')){
        hamburgerMenu.classList.remove('active');
        hamburgerIcon.setAttribute('name','menu-outline');
        menu.style.width = '55px';
    }else{
        hamburgerMenu.classList.add('active');
        hamburgerIcon.setAttribute('name','close-outline');
        menu.style.width = '200px';
    }
})