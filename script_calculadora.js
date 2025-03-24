function calcular() {
    var valor1 = ipt_valor1.value;
    var valor2 = ipt_valor2.value;
    var base = ipt_base.value;
    var operacao = ipt_operacao.value;
    var resultado;

    if (base == 'decimal') {
        valor1 = Number(valor1);
        valor2 = Number(valor2);
    } 
    else if (base == 'binario') {
        valor1 = parseInt(valor1, 2);
        valor2 = parseInt(valor2, 2);
    }
    else if (base == 'octal') {
        valor1 = parseInt(valor1, 8);
        valor2 = parseInt(valor2, 8);
    }
    else if (base == 'hexa') {
        valor1 = parseInt(valor1, 16);
        valor2 = parseInt(valor2, 16);
    }

    if (operacao == 'adicao') {
        resultado = valor1 + valor2;
    } else if (operacao == 'subtracao') {
        resultado = valor1 - valor2;
    } else if (operacao == 'multiplicacao') {
        resultado = valor1 * valor2;
    } else if (operacao == 'divisao') {
        resultado = valor1 / valor2;
        if (valor2 == 0) {
            var erro = true;
        }
    }

    if (base == 'binario') {
        resultado = resultado.toString(2);
    } else if (base == 'octal') {
        resultado = resultado.toString(8);
    } else if (base == 'hexa') {
        resultado = resultado.toString(16);
    }

    div_mensagem_calculadora.innerHTML = `Resultado: ${resultado}`;
    if (erro == true) {
        div_mensagem_calculadora.innerHTML = `Não é possível dividir um número por 0!`;
    }
}