"use strict";

const newForm = document.querySelector(".js-new-form");
//newForm.classList.remove("collapsed");

const newList = document.querySelector(".js-list");

let cat1Url= "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";

let cat1Name= "Anastacio";
let cat1Description= "Ruiseño, juguetón, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
let cat1Race="";

let cat2Url="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";

let cat2Name="Fiona";
let cat2Description="Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!";
let cat2Race="British Shorthair";


let cat3Url="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
let cat3Name="Cielo";
let cat3Description="Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!";
let cat3Race="British Shorthair";
let html= '';
if (cat1Race === "") { html="No se ha especificado la raza";
  
} else {
  html = cat1Race;
}

const cat1 = `<li class="card">
<article>
  <img 
    class="card_img"
    src= ${cat1Url} 
    alt="gatito"
  />
  <h3 class="card_title">${cat1Name}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">
    ${cat1Description}
  </p>
</article>
</li>`;

const cat2 = `<li class="card">
<img
  class="card_img"
  src=${cat2Url}
  alt="gatito"
/>
<h3 class="card_title">${cat2Name}</h3>
<h4 class="card_race">${cat2Race}</h4>
<p class="card_description">${cat2Description}
</p>
</li>`;

const cat3= `<li class="card">
<img
  class="card_img"
  src=${cat3Url}
  alt="gatito"
/>
<h3 class="card_title">${cat3Name}</h3>
<h4 class="card_race">${cat3Race}</h4>
<p class="card_description">
${cat3Description}
</p>
</li>`;

newList.innerHTML = cat1 + cat2 + cat3; 
//newList.innerHTML += cat2;
//newList.innerHTML += cat3;

/*const nameUppercase = document.querySelector(".card_title");

cat1Name = cat1Name.toUpperCase();*/


const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

const resultText = document.querySelector ('.js_in_search');

if( cat1Description.includes(descrSearchText) ) {
  resultText.innerHTML = 'Prueba';
  //console.log("Prueba");
  }


 const icon= document.querySelector(".js-icon");
 
 icon.addEventListener( "click" , (event) => {
  event.preventDefault(icon); 
  newForm.classList.remove("collapsed");
 } )


const btnAdd = document.querySelector(".js-btn-add");
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

 btnAdd.addEventListener("click", (event)=> {
  event.preventDefault(btnAdd);
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    labelMesageError.innerHTML = "¡Muy bien!";
  }

 })

const btnCancel = document.querySelector(".js-btn-cancel");

btnCancel.addEventListener("click", (event)=>{
  event.preventDefault(btnCancel);
  newForm.classList.add("collapsed");
})
  
  