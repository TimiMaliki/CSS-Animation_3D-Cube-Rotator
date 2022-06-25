const cube = document.querySelector('.cube');
const div  = document.querySelector('span');
const one  = document.querySelector('.one');
const two  = document.querySelector('.two');
const three  = document.querySelector('.three');
const four  = document.querySelector('.four');
const cTop  = document.querySelector('.ctop');

div.addEventListener('click', () =>{
  let color ='#'
  color+= Math.random().toString(16).slice(2,8);
div.style.backgroundColor = color;
one.style.backgroundColor = color;
two.style.backgroundColor = color;
three.style.backgroundColor = color;
four.style.backgroundColor = color;
cTop.style.backgroundColor = color;
 span.innerText = color;
});


