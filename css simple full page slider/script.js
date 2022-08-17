let back = document.querySelector('.back');
let next = document.querySelector('.next');

let imageBoxs = document.querySelectorAll('.slider-box');
let imageActiveIndex = 2;

back.addEventListener('click',()=>{
    imageBoxs[imageActiveIndex].classList.remove('active');
    decreaseImageActiveIndex();
    imageBoxs[imageActiveIndex].classList.add('active');
})

next.addEventListener('click',()=>{
    imageBoxs[imageActiveIndex].classList.remove('active');
    increaseImageActiveIndex();
    imageBoxs[imageActiveIndex].classList.add('active');
})

function decreaseImageActiveIndex(){
    if(imageActiveIndex == 0){
        imageActiveIndex = imageBoxs.length -1;
        return;
    }
    imageActiveIndex -=1;
}

function increaseImageActiveIndex(){
    if(imageActiveIndex == imageBoxs.length -1){
        imageActiveIndex = 0;
        return;
    }
    imageActiveIndex +=1;
}

setInterval(()=>{
    imageBoxs[imageActiveIndex].classList.remove('active');
    increaseImageActiveIndex();
    imageBoxs[imageActiveIndex].classList.add('active');
},4000);