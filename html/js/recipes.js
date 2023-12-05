// scrolling function 

function handleScroll(event) {
   // used deltaY to determine the direction of the scroll
   var deltaY = event.deltaY || event.detail || -event.wheelDelta;

   // here it checks if the scroll is upward or downward
   if (deltaY > 0) {
     console.log('Scrolling Down');
     
   } else {
     console.log('Scrolling Up');
     
   }
 }

 // event listeners for mouse wheel and arrow keys
 document.addEventListener('wheel', handleScroll);
 document.addEventListener('keydown', function(event) {
   if (event.key === 'ArrowUp') {
     console.log('Arrow Up Key Pressed');
     
   } else if (event.key === 'ArrowDown') {
     console.log('Arrow Down Key Pressed');
     
   }
 });

 // got a button to redirect to a page
 const homeRedirect = document.getElementsByClassName('header__picture')[0];

    homeRedirect.addEventListener('click', function () {
    window.location.href = 'index.html';
});

// got a button to redirect to a page
  const contactButton = document.getElementsByClassName('button__contact')[0];

    contactButton.addEventListener('click', function () {
    window.location.href = 'contact_me.html' ;
}); 

// got a button to redirect to a page
  const recipesButton = document.getElementsByClassName('button__recipes')[0];

    recipesButton.addEventListener('click', function () {
    window.location.href = 'recipes.html' ;
}); 


// javascript for the sorting function

document.addEventListener('DOMContentLoaded', function() {
   const sortingButtons = document.querySelectorAll('.sort__button')
   const recipeItems = document.querySelectorAll('.recipe__item')
   const recipeContainer = document.getElementById('recipe__list')
 
   const fliteringList = (event) => {
     const currentButton = event.currentTarget;
     const filterBy = currentButton.dataset.filterBy;
 
     const filteredItems = [...recipeItems].filter(item => {
       if (filterBy === '*') {
         return true;
       } else {
         const splitDataTypes = item.dataset.type.split(',');
 
         return splitDataTypes.includes(filterBy);
       }
     });
 
     recipeContainer.innerHTML = '';
 
     filteredItems.forEach(item => {
       recipeContainer.appendChild(item);
     });
   }
 
   sortingButtons.forEach(sortingButton => {
     sortingButton.addEventListener('click', fliteringList);
   }); 
 });