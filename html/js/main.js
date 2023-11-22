//tried getting a button to work here, but id didnt
let contactButton = document.getElementsByClassName('b_contact')[0];
contactButton.addEventListener('click', function(){
 window.location.href = './html/contact_me.html' ;
});

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
