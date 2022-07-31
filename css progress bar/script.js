let loader = document.querySelector('.loader');
let increaseBtn = document.querySelector('.increase');
let decreaseBtn = document.querySelector('.decrease');
let value = document.querySelector('.value');
let loaderValue = document.querySelector('.loader-value');
let increaseLongPressed = false;
let LongPressedTime = 0;
let decreaseLongPressed = false;
let timeHandlerLongPress;
const INCREASE_TIME = 40;
let progress = 
{
    width : 0,
    backsize : 0,
    value : 0,
    loaderValue : 0
}
loaderStyleChanger();

increaseBtn.addEventListener('click',()=>{
    increase();
    LongPressedTime = 0;
    clearInterval(timeHandlerLongPress);
})

decreaseBtn.addEventListener('click',()=>{
    decrease();
    LongPressedTime = 0;
    clearInterval(timeHandlerLongPress);
})
addEventListenerLongPress(increaseBtn);
addEventListenerLongPress(decreaseBtn);

function calculateBackgroundSize(width){
    let result = (10000/width);
    return result;
}
function loaderStyleChanger(){
    loader.style.setProperty('--progwidth',progress.width + '%');
    loader.style.setProperty('--backsize',progress.backsize + '%');
    value.innerText = progress.value + '';
    loaderValue.innerText = '%' + progress.loaderValue;
}
function increaseLongPress(){
    if(increaseLongPressed && LongPressedTime >= 200){
        increase();
    }
}
function decreaseLongPress(){
    if(decreaseLongPressed && LongPressedTime >= 200){
        decrease();
    }
}
function increase(){
    if(progress.width === 100) return
    progress.width +=1;
    progress.backsize = calculateBackgroundSize(progress.width);
    progress.value +=1;
    progress.loaderValue +=1;
    loaderStyleChanger();
}
function decrease(){
    if(progress.width === 0) return
    progress.width -=1;
    progress.backsize = calculateBackgroundSize(progress.width);
    progress.value -=1;
    progress.loaderValue -=1;
    loaderStyleChanger();
}
function addEventListenerLongPress(button){
    button.addEventListener('mousedown',()=>{
        if(button === increaseBtn){
            increaseLongPressed = true;
            timeHandlerLongPress = setInterval(increaseTime,INCREASE_TIME)
        }else{
            decreaseLongPressed = true;
            timeHandlerLongPress = setInterval(increaseTime,INCREASE_TIME)
        }
    })
    button.addEventListener('mouseup',()=>{
        if(button === increaseBtn){
            increaseLongPressed = false;
            LongPressedTime = 0;
            clearInterval(timeHandlerLongPress);
        }else{
            decreaseLongPressed = false;
            LongPressedTime = 0;
            clearInterval(timeHandlerLongPress);
        }
    })
}
function increaseTime(){
    LongPressedTime +=INCREASE_TIME;
}

let timeHandlerDecrease = setInterval(decreaseLongPress,50);
let timeHandlerIncrease = setInterval(increaseLongPress,50);
