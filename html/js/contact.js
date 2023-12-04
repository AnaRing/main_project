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
 const homeRedirect = document.getElementsByClassName('header__pic')[0];

    homeRedirect.addEventListener('click', function () {
    window.location.href = 'index.html';
});

// got a button to redirect to a page
  const contactButton = document.getElementsByClassName('b__contact')[0];

    contactButton.addEventListener('click', function () {
    window.location.href = 'contact_me.html' ;
}); 

// got a button to redirect to a page
  const recipesButton = document.getElementsByClassName('b__recipes')[0];

    recipesButton.addEventListener('click', function () {
    window.location.href = 'recipes.html' ;
}); 

// contact me form js

// toast function for the contact me form
document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('contact__form');
   const toast = document.getElementById('submit__toast');
 
   form.addEventListener('submit', function (event) {
       event.preventDefault();
       toast.style.display = 'block';
 
       setTimeout(function() {
         toast.style.display = 'none';
         form.reset();
       }, 2000);
     });
 });