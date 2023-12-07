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

// contact me form js

// toast function for the contact me form

// finally made it work, apparently html 'required' was overriding on the webpage
// here is an array that checks if the inputs are filled, and it pushes a negative toast if
// any of the areas are empty, and pushes positive when all are filled
document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('contact__form');
   const toast = document.getElementById('submit__toast');
   const negativeToast = document.getElementById('submit__negative__toast');

   form.addEventListener('submit', function (event) {
       event.preventDefault();

       if (isFormFilledOut(form)) {
           toast.style.display = 'block';
           negativeToast.style.display = 'none';
           setTimeout(function () {
               toast.style.display = 'none';
               form.reset();
           }, 2000);
       } else {
           negativeToast.style.display = 'block';
           setTimeout(function () {
               negativeToast.style.display = 'none';
           }, 2000);
       }
   });

   function isFormFilledOut(form) {
       const inputs = form.querySelectorAll('.inputs, textarea');
       return Array.from(inputs).every(input => input.value.trim() !== '');
   }
});


 // toast function for newsletter signup

 document.addEventListener('DOMContentLoaded', function() {
   const featureNewsletterForm = document.querySelector('#form__newsletter');
   const toastNewsletter = document.getElementById('newsletter__toast__push');
   const emailInput = featureNewsletterForm.querySelector('#newsletter__input');
 
   featureNewsletterForm.addEventListener('submit', function (event) {
     event.preventDefault();
     toastNewsletter.style.display = 'block';
 
     setTimeout(function() {
       toastNewsletter.style.display = 'none';
       emailInput.value = ''; 
     }, 2000);
   });
 });

 // popup function for the cookies/terms&conditions

document.addEventListener('DOMContentLoaded', function() {
  function openPopup(id) {
    document.getElementById(id).style.display = 'block';
  }
  function closePopup(id) {
    document.getElementById(id).style.display = 'none';
  }

  document.querySelector('.footer__links p:nth-child(1)' ).addEventListener('click', function() {
  openPopup('popCookies');
  })
  document.querySelector('.footer__links p:nth-child(3)').addEventListener('click', function() {
  openPopup('popTerms');
  })
  document.getElementById('popCookies').querySelector('button').addEventListener('click', function() {
  closePopup('popCookies');
  })
  document.getElementById('popTerms').querySelector('button').addEventListener('click', function() {
  closePopup('popTerms');
  });
});
