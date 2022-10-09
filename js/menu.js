function mostrarContenido(archivoRuta){
  var archivoHTML = new XMLHttpRequest();
  archivoHTML.open("GET", archivoRuta,false);
  archivoHTML.send(null);
  return archivoHTML.responseText;
}

var componenteMenu = mostrarContenido('../views/menu.html');

class Menu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= componenteMenu;
    }
}
customElements.define('menu-component', Menu);

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
arrowParent.classList.toggle("showMenu");
  });
}
let sidebar = document.querySelector(".sidebar");
let sidebarOpen = document.querySelector(".bxs-chevron-right");
let sidebarClose = document.querySelector(".bxs-chevron-left");
console.log(sidebarOpen);
sidebarOpen.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});
console.log(sidebarClose);
sidebarClose.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});