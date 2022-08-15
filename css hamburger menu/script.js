let hamburger = document.querySelector('.hamburger-icon');
hamburger.addEventListener('click',()=>{
    if(hamburger.classList.contains('active')){
        hamburger.classList.remove('active');
    }else{
        hamburger.classList.add('active');
    }
})