if (window.visualViewport.width < window.visualViewport.height){
    document.getElementById('mainforjs').style['flex-direction'] = 'column';    
    document.getElementById('painel2forjs').style['width'] = '95vw';
    console.log('portrait');
}



function criptografar() {
}


var botao = document.getElementById('#btn1');
document.addEventListener('click', botao, criptografar());

