//mais fotos

document.getElementById("mais-fotos").addEventListener("click", function(event) {
  event.preventDefault(); 
  document.querySelector('.imagens-todas').classList.toggle('esconder');
  document.querySelector('.imagens').classList.toggle('esconder');
});