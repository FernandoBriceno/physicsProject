
function mostrarContenido(archivoRuta){
    var archivoHTML = new XMLHttpRequest();
    archivoHTML.open("GET", archivoRuta,false);
    archivoHTML.send(null);
    return archivoHTML.responseText;
}

ruta = location.search.slice(1);

if (ruta.length!=0){
    var contenidoHTML = mostrarContenido('views/contenido/'+ruta+'.html');

    class Contenido extends HTMLElement{
        constructor(){
            super();
            this.innerHTML= contenidoHTML;
        }
    }
    customElements.define('contenido-component', Contenido);
    
}



/*
addEventListener('load', (event) => {});

onload = (event) => { };*/