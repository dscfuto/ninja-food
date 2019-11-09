



document.addEventListener('DOMContentLoaded', function() {
  //nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  //add reciepe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
})

let deleteBtn = document.querySelectorAll('.recipie-delete');

deleteBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.remove();
  })
})


let createBtn = document.querySelector('.create-btn');

createBtn.addEventListener('click', () => {
  let reciepieName = document.querySelector('.title').value;
  let reciepeIngredients = document.querySelector('.ingredients').value


  let container = document.querySelector('.box');
  let newCard = document.createElement('div');
  let img = document.createElement('img');
  let detailDiv = document.createElement('div');
  let titleDiv = document.createElement('div');
  let ingredientsDiv = document.createElement('div')
  let deleteDiv = document.createElement('div')
  deleteDiv.className = 'recipie-delete';
  let deleteIcon = document.createElement('i');
  deleteIcon.className = 'material-icons';
  deleteIcon.innerText = 'delete_outline';

  newCard.classList += " card-panel recipie white row";
  img.src = "/img/dish.jpg";
  img.alt = "reciepie thumb";
  img.width = "100px";
  detailDiv.className = "recipie-details";
  titleDiv.className = "reciepie-title";
  titleDiv.innerText = reciepieName;
  ingredientsDiv.innerText = reciepeIngredients;
  ingredientsDiv.className = "recipie-ingredients";


  newCard.appendChild(img)
  detailDiv.appendChild(titleDiv);
  detailDiv.appendChild(ingredientsDiv);
  newCard.appendChild(detailDiv);
  deleteDiv.appendChild(deleteIcon)
  newCard.appendChild(deleteDiv);

  container.appendChild(newCard)

})

































































