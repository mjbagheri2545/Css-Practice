let iconOne = document.querySelector('.icon-one');
let iconTwo = document.querySelector('.icon-two');
let imageNumber = document.querySelector('h2');
let images = document.querySelectorAll('img');
let imageIndex = parseInt(imageNumber.innerText) - 1;

iconOne.addEventListener('click',()=>{
    images[imageIndex].classList.remove('active')
    decreaseIndex(imageIndex);
    images[imageIndex].classList.add('active')
    imageNumber.innerText = imageIndex + 1;
})
iconTwo.addEventListener('click',()=>{
    images[imageIndex].classList.remove('active')
    increseIndex(imageIndex);
    images[imageIndex].classList.add('active')
    imageNumber.innerText = imageIndex + 1;
})

function increseIndex(){
    if(imageIndex == 2){
        imageIndex = 0;
    }else{
        imageIndex +=1;
    }
}
function decreaseIndex(){
    if(imageIndex == 0){
        imageIndex = 2;
    }else{
        imageIndex -=1;
    }
}