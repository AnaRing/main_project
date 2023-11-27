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

 const homeRedirect = document.getElementsByClassName('header__pic')[0];

    homeRedirect.addEventListener('click', function () {
    window.location.href = 'index.html';
});

//got a button to redirect to a page
  const contactButton = document.getElementsByClassName('b__contact')[0];

    contactButton.addEventListener('click', function () {
    window.location.href = 'contact_me.html' ;
}); 

  const recipesButton = document.getElementsByClassName('b__recipes')[0];

    recipesButton.addEventListener('click', function () {
    window.location.href = 'recipes.html' ;
}); 

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact__form');
  const toast = document.getElementById('submit__toast');

  form.addEventListener('submit', function (event) {
      event.preventDefault();
      toast.style.display = 'block';
      form.reset();
  });
});

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

