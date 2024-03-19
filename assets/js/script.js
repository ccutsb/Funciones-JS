/*pintar.html*/

const pintar = (element,color) => element.style.backgroundColor = color;
element = document.getElementById("ele1");
element.style.backgroundColor = 'green';
element.addEventListener("click", function(){pintar(element,'yellow')});



