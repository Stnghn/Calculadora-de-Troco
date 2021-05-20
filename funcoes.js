function troco() {
    var valor1 = Number(document.getElementById('valor1').value)
    var valor2 = Number(document.getElementById('valor2').value)
    var result = document.getElementById('result')

    var troco = valor2 - valor1

    if (valor2 < valor1) {
        result.innerHTML = `O troco é de ${Math.abs(troco)} reais.`
    } else if (valor2 == valor1) {
        result.innerHTML = `Valor exato. Não há troco.`
    } else if (valor2 > valor1) {
        result.innerHTML = `O valor dado não foi suficiente. Fica devendo ${troco} reais.`
    }

}