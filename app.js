/*ajuste do conteudo a tela de acordo com o modo (portrait or landscape)*/
if (window.visualViewport.width < window.visualViewport.height) {
  document.getElementById("mainforjs").style["flex-direction"] = "column";
  document.getElementById("painel2forjs").style["width"] = "95vw";
}

function criptografar() {
  var texto_a_manusear = document.getElementById("textocode").value;
  var texto_manuseado = "";
  if (texto_a_manusear) {
    for (var i = 0; i < texto_a_manusear.length; i++) {
      switch (texto_a_manusear[i]) {
        case "a":
          texto_manuseado += "ai";
          break;
        case "e":
          texto_manuseado += "enter";
          break;
        case "i":
          texto_manuseado += "imes";
          break;
        case "o":
          texto_manuseado += "ober";
          break;
        case "u":
          texto_manuseado += "ufat";
          break;
        default:
          texto_manuseado += texto_a_manusear[i];
          break;
      }
    }
    document.getElementById("btn3").style["visibility"] = "visible";
    document.getElementById(
      "painel"
    ).innerHTML = `<p id='textocriptografado'>${texto_manuseado}</p>`;
    document.getElementById("textocode").value = `${texto_manuseado}`;
    console.log(texto_manuseado);
  }
}

function descriptografar() {
    var texto_a_manusear = document.getElementById("textocode").value;
    var texto_manuseado = "";
    if (texto_a_manusear) {
      texto_manuseado = decryptar(texto_a_manusear);
      document.getElementById("btn3").style["visibility"] = "visible";
      document.getElementById("painel").innerHTML = `<p id='textocriptografado'>${texto_manuseado}</p>`;
      document.getElementById("textocode").value = `${texto_manuseado}`;
      console.log(texto_manuseado);
    }
}

function decryptar(textoparadecrypt) {
  textoparadecrypt = textoparadecrypt.replaceAll("ai", "a");
  textoparadecrypt = textoparadecrypt.replaceAll("enter", "e");
  textoparadecrypt = textoparadecrypt.replaceAll("imes", "i");
  textoparadecrypt = textoparadecrypt.replaceAll("ober", "o");
  textoparadecrypt = textoparadecrypt.replaceAll("ufat", "u");
  return textoparadecrypt;
}

function copiar() {}

/*
let botao1 = document.getElementById('#btn1');
let botao2 = document.getElementById('#btn2');
let botao3 = document.getElementById('#btn3');
document.addEventListener('click', botao1, criptografar());
document.addEventListener('click', botao2, descriptografar());
document.addEventListener('click', botao3, copiar());
*/
