function handleScroll(event) {
   // Use deltaY to determine the direction of the scroll
   var deltaY = event.deltaY || event.detail || -event.wheelDelta;

   // Check if the scroll is upward or downward
   if (deltaY > 0) {
     console.log('Scrolling Down');
     // Add your scroll down logic here
   } else {
     console.log('Scrolling Up');
     // Add your scroll up logic here
   }
 }

 // Add event listeners for mouse wheel and arrow keys
 document.addEventListener('wheel', handleScroll);
 document.addEventListener('keydown', function(event) {
   if (event.key === 'ArrowUp') {
     console.log('Arrow Up Key Pressed');
     // Add your arrow up key logic here
   } else if (event.key === 'ArrowDown') {
     console.log('Arrow Down Key Pressed');
     // Add your arrow down key logic here
   }
 });