const hamburger = document.querySelector(".hamburger");

const nav_list = document.querySelector(".nav_list");

const section_padding = document.querySelector(".section_padding");

hamburger.addEventListener('click', ()=>{
    nav_list.classList.toggle('show');
    section_padding.classList.toggle('section_p');
});