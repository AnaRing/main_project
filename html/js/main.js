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

// slideshow for hero feature

let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('oneSlide');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  showSlides();
});

// toast for newsletter submit button
// finally works with using querySelector instead of getElementById

document.addEventListener('DOMContentLoaded', function() {
  const featNewslForm = document.querySelector('#form__newsletter');
  const toastNewsl = document.getElementById('newsl__submit__toast');
  const emailInput = featNewslForm.querySelector('#newsl__input');

  featNewslForm.addEventListener('submit', function (event) {
    event.preventDefault();
    toastNewsl.style.display = 'block';

    setTimeout(function() {
      toastNewsl.style.display = 'none';
      emailInput.value = ''; 
    }, 2000);
  });
});

// reusing my button code here for redirections
// for the social media buttons
/* const  = document.getElementsByClassName('')[0];

recipesButton.addEventListener('click', function () {
window.location.href = '' ;
});

const  = document.getElementsByClassName('')[0];

recipesButton.addEventListener('click', function () {
window.location.href = '' ;
});

const  = document.getElementsByClassName('')[0];

recipesButton.addEventListener('click', function () {
window.location.href = '' ;
});


const  = document.getElementsByClassName('')[0];

recipesButton.addEventListener('click', function () {
window.location.href = '' ;
});  */

// some pop-ups for the code prev written in html 
// for cookies and terms&service

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
