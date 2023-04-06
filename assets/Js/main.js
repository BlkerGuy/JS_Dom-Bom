"use strict";

// Opacity: 0-10;
let range_inp=document.querySelector('#rangeinp');
let card=document.querySelectorAll('.card-size')
let show_range=document.querySelector('#range-txt')

//Border Percentage: 1-100%;

let border_range_inp=document.querySelector('#border-rangeinp');
let card_img=document.querySelectorAll('.card-size img')
let show_b_range=document.querySelector('#range-txt-sec')

function Range(){
    let newOpct=range_inp.value/10;
    for(let i=0; i<card.length; i++){
    card[i].style.opacity=newOpct;
    show_range.innerText=(`${range_inp.value}%`);
    }
}
range_inp.addEventListener('change',Range);

function BorderRange(){
    let newBorderPercent=border_range_inp.value*10;
    console.log(newBorderPercent);
    for(let i=0; i<card.length; i++){
    card_img[i].style.borderRadius=(`${newBorderPercent}%`);
    show_b_range.innerText=(`${border_range_inp.value}%`);
    }
}
border_range_inp.addEventListener('change',BorderRange);