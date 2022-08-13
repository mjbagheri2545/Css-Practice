let menu = document.querySelector('.hamburger-icon');
menu.addEventListener('click',()=>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active');
    }
})