function contarLetraA(string) {
    let contagem = 0;
    for (let char of string) {
        if (char === 'A' || char === 'Á' || char === 'À' || char === 'Ã' || char === 'Â' ||
            char === 'a' || char === 'á' || char === 'à' || char === 'ã' || char === 'â') {
            contagem++;
        }
    }
    return contagem;
}

// Exemplo de string, você pode mudar este valor ou receber entrada do usuário
let texto = "Aprendizado e prática são essenciais.";

let quantidade = contarLetraA(texto);

console.log(`A letra 'A' (maiúscula e minúscula, com acentos) aparece ${quantidade} vezes na string.`);

