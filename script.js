// Pegando os inputs
var minhaDiv = document.getElementById('minhaDiv')
var minhaCor = document.getElementById('minhaCor')
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var b4 = document.getElementById('b4')
var larg = document.getElementById('Largura')
var alt = document.getElementById('Altura')

//Botando inputs numericos em uma lista e checando se está vazio, se estiver, troca o valor pra 0
var valoresNum = [b1, b2, b3, b4]
function checarNulo() {
  for (valor in valoresNum) {
    if (valoresNum[valor].value.length < 1) {
      valoresNum[valor].value = 0
    }
  }
}

//Modifica a div com as propriedades dos inputs
function modificarDiv() {
  checarNulo()

  minhaDiv.style.backgroundColor = minhaCor.value
  minhaDiv.style.borderRadius = `${b1.value}px ${b2.value}px ${b3.value}px ${b4.value}px`
  minhaDiv.style.width = larg.value + 'px'
  minhaDiv.style.height = alt.value + 'px'
}

//Copia o código CSS do quadrado criado
function Copiar() {
  texto = `
  div {
    background-color: ${minhaCor.value};
    border-radius: ${b1.value}px ${b2.value}px ${b3.value}px ${b4.value}px;
    width: ${larg.value}px;
    height: ${alt.value}px;
  }
  `
  navigator.clipboard.writeText(texto)
}
