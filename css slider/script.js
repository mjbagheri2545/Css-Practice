let slider = document.querySelector('.slider');
let middleIndex = 2;
let backward = document.querySelector('.back');
let forward = document.querySelector('.for');

backward.addEventListener('click',()=>{
    slider.children[middleIndex].classList.remove('active');
    slider.appendChild(slider.children[0]);
    slider.children[middleIndex].classList.add('active');
})
forward.addEventListener('click',()=>{
    slider.children[middleIndex].classList.remove('active');
    slider.prepend(slider.children[4]);
    slider.children[middleIndex].classList.add('active');
})