
function generateEquation(texto,inicio, fin){
    resultado = '';
    contador=0; /* 1 = $de apertura; 2 = de cierre$  */
    par =0; /*nos va a alertar si no hemos cerrado alguna ecuación $ecuación$*/
    for(var i = 0; i<texto.length; i++) {
        if(texto[i] == '$'){
            contador+=1;
            par+=1;
            if( contador == 1){
                resultado+= inicio;
                
            }
            if( contador == 2){
                resultado+= fin;
                contador=0;
            }
        }

        
        else if(texto[i] == '_'){
            resultado+=' _';
        }

        /*
        else if(texto[i] == '.'){            
            if( texto[i-1] != '.'){                
                resultado+='&space;.';            
            }            
            else if( texto[i+1] != '.'){                
                resultado+='.&space;';            
            }            
            else{                
                resultado+='.';            
            }        
        }*/

        else{
            
            resultado+=texto[i];
        }
    }
    if (par%2!=0){
        resultado = '<p style="color: red;"><strong>ERROR:</strong> Debe cerrar los indicadores de funciones. Por ejemplo: <strong>$Funcion$</strong></p>'
    }
    return resultado;
}




const markdownView = document.querySelector('#markdown'); /*agarra lo que está en el textarea con etiqueta markdown*/
const htmlView = document.querySelector('#html');
const htmlOculto= document.querySelector('#html-oculto');

const newFileButton = document.querySelector('#new-file');
const openFileButton = document.querySelector('#open-file');
const saveMarkdownButton = document.querySelector('#save-markdown');
const revertButton = document.querySelector('#revert');
const saveHtmlButton = document.querySelector('#save-html');
const showFileButton = document.querySelector('#show-file');
const openInDefaultButton = document.querySelector('#open-in-default');

const renderToMarkdown = (markdown) => { /*Función que conviernte a markdown */

    /*var txtMarkdown = generateEquation(markdown,'<img src="https://latex.codecogs.com/svg.image?', '" />'); /*para usar imagenes desde generador de latex*/
    var txtMarkdownImage = generateEquation(markdown,'<img src="https://latex.codecogs.com/svg.image?', '" />');
    var txtMarkdown = markdown;

    var txtHTMLimage = new showdown.Converter().makeHtml(txtMarkdownImage);
    var txtHTML = new showdown.Converter().makeHtml(txtMarkdown);

    htmlView.innerHTML =  new showdown.Converter().makeHtml(txtHTMLimage);
    htmlOculto.value =  new showdown.Converter().makeHtml(txtHTML);
};

markdownView.addEventListener('keyup', e => {
    const currentContent = e.target.value;
    renderToMarkdown(currentContent);
});



function copiarPortapapeles() {
    let HTMLtext = document.getElementById('html-oculto');
    HTMLtext.select();
    HTMLtext.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
