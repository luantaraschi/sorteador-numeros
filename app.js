function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //puxando o valor da caixa "quantidade de numeros"
    let de = parseInt(document.getElementById('de').value); //puxando as informacoes de valor da caixa "do numero"
    let ate = parseInt(document.getElementById('ate').value);//puxando as informacoes de valor da caixa "ate o numero"

    let sorteados = []; //criando array sorteados 
    let numero;

/*  Esse loop "for" executa a função "obterNumeroAleatorio(de, ate)" repetidamente, gerando um número
    aleatório e atribuindo-o à variável "numero" em cada iteração. O número de vezes que o loop será
    executado é determinado pelo valor de "quantidade". */
    for (let i = 0; i < quantidade; i++) { 
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) { //enquanto a variavel sorteados  incluir o numero, ele vai continuar sorteando
            numero = obterNumeroAleatorio(de, ate); //ficara em loop ate que todos os numeros sorteados sejam exclusivos
        }

        sorteados.push(numero); 
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>` //mudando  o conteudo da div "resultado"

}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //criando  um numero aleatorio entre o minimo e o maximo


}