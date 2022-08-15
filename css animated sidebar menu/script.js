let hamburger = document.querySelector('.hamburger-icon');
let hamburgerContainer = document.querySelector('.hamburger-container');
let menu = document.querySelector('.menu');
let links = document.querySelectorAll('a');
let lists = document.querySelectorAll('li');

let hamburgerOpen = false;

hamburger.addEventListener('click',()=>{
    if(hamburger.classList.contains('active')){
        hamburger.classList.remove('active');
        hamburgerContainer.classList.remove('active');
        menu.style.width = '55px';
    }else{
        hamburger.classList.add('active');
        hamburgerContainer.classList.add('active');
        menu.style.width = '200px';
    }
})
lists.forEach((list)=>{
    list.addEventListener('click',()=>{
        activateLink();
        list.children[0].classList.add('active');
    })
})
function activateLink(){
    links.forEach((link)=>{
        link.classList.remove('active');
    })
}