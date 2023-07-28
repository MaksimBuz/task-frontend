const clouse_btn = document.querySelector('#clouse-btn');
const list_item = document.querySelectorAll('#menu__list-item');
console.log(list_item);
clouse_btn.addEventListener('click',()=>{
    list_item.forEach(element => {
        element.classList.toggle('active')
        element.classList.toggle('disible')
       


  
})});