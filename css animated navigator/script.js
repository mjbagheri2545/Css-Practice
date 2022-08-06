let navList = document.querySelectorAll('li');
let navItems = document.querySelectorAll('a');
navList.forEach((list)=>{
    list.addEventListener('click',(e)=>{
        removeClassName();
        list.children[0].classList.add('active')
    })
})
function removeClassName(){
    navItems.forEach((item)=>{
        if(item.classList.contains('active')){
            item.classList.remove('active');
        }
    })
}