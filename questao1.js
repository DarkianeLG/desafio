function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === numero || numero === 0;
}

const numero = 21;  // Pode mudar este número ou usar entrada do usuário
if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
