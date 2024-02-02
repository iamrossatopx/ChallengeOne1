
/*ajuste do conteudo a tela de acordo com o modo (portrait or landscape)*/
if (window.visualViewport.width < window.visualViewport.height){
    document.getElementById('mainforjs').style['flex-direction'] = 'column';    
    document.getElementById('painel2forjs').style['width'] = '95vw';
}



function criptografar() {

}

function descriptografar(){

}

function copiar(){
    
}

let botao1 = document.getElementById('#btn1');
let botao2 = document.getElementById('#btn2');
let botao3 = document.getElementById('#btn3');
document.addEventListener('click', botao1, criptografar());
document.addEventListener('click', botao2, descriptografar());
document.addEventListener('click', botao3, copiar());

