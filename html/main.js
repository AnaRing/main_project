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

//tried getting a button to work here, but id didnt
  const contactButton = document.getElementsByClassName('b__contact')[0];

  contactButton.addEventListener('click', function () {
  window.location.href = 'contact_me.html' ;
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

