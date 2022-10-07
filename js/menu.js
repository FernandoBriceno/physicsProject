class Menu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML= ` <!--<title> Drop Down Sidebar Menu | CodingLab </title>-->
        <link rel="stylesheet" href="../css/menu.css">
        <link rel="stylesheet" href="../css/latex.css">
        <!-- Boxiocns CDN Link -->
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <div class="sidebar close">

        <div class="logo-details">
            <div class="gato_estirado">
                <img class='bx bxl-c-plus-plus'  src="../img/physicsLogoGatoBlanco.png" style="margin: 14px;">
    
            </div>
            <div class="gato_sentado">
                <img class='bx bxl-c-plus-plus'  src="../img/gatoSentadoBlanco.png" style="margin: 14px;">
            </div>
          <img class='logo_name'  src="../img/physicsLogoTextoBlanco.png" style="margin: -7px;">
        </div>
    
    
        <ul class="nav-links">
            <!-- HOME -->
          <li>
            <a href="#">
                <i class='bx bxs-home'></i>
                <span class="link_name">Home</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Home</a></li>
            </ul>
          </li>
          <!-- ESCOLAR -->
          <li>
            <div class="iocn-link">
              <a href="#">
                <i class='bx bxs-book'></i>
                <span class="link_name">Recurso Escolar</span>
              </a>
              <i class='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul class="sub-menu">
              <li><a class="link_name" href="#">Recurso Escolar</a></li>
              
              <li><a href="#">Matemática elemental</a></li>
              <li><a href="#">Vectores</a></li>
              <li><a href="#">Movimiento Rectilineo</a></li>
              <li><a href="#">Movimiento Circular</a></li>
              <li><a href="#">Movimiento Periodico</a></li>
              <li><a href="#">Caida Libre</a></li>
              <li><a href="#">Newton</a></li>
              <li><a href="#">Fuerza Elástica</a></li>
              <li><a href="#">Ondas</a></li>
              <li><a href="#">Óptica</a></li>
              <li><a href="#">Gravitación</a></li>
              <li><a href="#">Electromagnetismo</a></li>
              <li><a href="#">Relatividad</a></li>
            </ul>
          </li>
          <!-- UNIVERSITARIA -->
          <li>
            <div class="iocn-link">
              <a href="#">
                <i class='bx bxs-graduation' ></i>
                <span class="link_name">Recurso Universitario</span>
              </a>
              <i class='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul class="sub-menu">
              <li><a class="link_name" href="#">Recurso Universitario</a></li>
              
              <li><a href="#">Precalculo</a></li>
              <li><a href="#">Cálculo</a></li>
              <li><a href="#">Cálculo Integral</a></li>
              <li><a href="#">Cálculo Diferencial</a></li>
              <li><a href="#">Algebra Lineal</a></li>
              <li><a href="#">Métodos Matemáticos</a></li>
              <li><a href="#">Métodos Numéricos</a></li>
              <li><a href="#">Mecánica</a></li>
              <li><a href="#">Ondas y pepitas</a></li>
              <li><a href="#">Termodinámica</a></li>
              <li><a href="#">Electromagnetismo</a></li>
              <li><a href="#">Mecánica Clásica</a></li>
              <li><a href="#">Física Moderna</a></li>
              <li><a href="#">Mecánica Cuántica</a></li>
              <li><a href="#">Estado Sólido</a></li>
            </ul>
          </li>
          <!-- UNIVERSITARIA -->
          <li>
            <a href="#">
                <i class='bx bx-book-content'></i>
              <span class="link_name">Bibliografía</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Bibliografía</a></li>
            </ul>
          </li>
          
      </li>
    </ul>
      </div>
    
      <section class="home-section">
        <div class="home-content">
            <i class='bx bxs-chevron-right'></i>
            <i class='bx bxs-chevron-left' ></i>
            
        </div>
      </section>
    
      `;
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
