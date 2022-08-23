let resultado = 0;
let valor = 0;
function inserir (num) {
 valor = document.calculator.numero.value += num
}
function reseta (reset){
    document.calculator.numero.value = ""
}
function calcula () {
     resultado = eval(valor)
    document.calculator.numero.value = resultado.toLocaleString("pt-br")
}