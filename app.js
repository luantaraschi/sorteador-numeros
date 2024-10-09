function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //puxando o valor da caixa "quantidade de numeros"
    let de = parseInt(document.getElementById('de').value); //puxando as informacoes de valor da caixa "do numero"
    let ate = parseInt(document.getElementById('ate').value);//puxando as informacoes de valor da caixa "ate o numero"

    let intervalo = ate - de + 1; // Calcula o intervalo total de números possíveis

    // Verifica se a quantidade é maior que o intervalo
    if (quantidade > intervalo) {
        alert('Quantidade de números a ser sorteada é maior que o intervalo disponível.');
        return; // Sai da função para evitar o loop infinito
    }

    let sorteados = []; //criando array sorteados 
    let numero;

/*  Esse loop "for" executa a função "obterNumeroAleatorio(de, ate)" repetidamente, gerando um número
    aleatório e atribuindo-o à variável "numero" em cada iteração. O número de vezes que o loop será
    executado é determinado pelo valor de "quantidade". */
    for (let i = 0; i < quantidade; i++) { 
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) { //enquanto a variavel sorteados  incluir o numero, ele vai continuar sorteando
            numero = obterNumeroAleatorio(de, ate);//ficara em loop ate que todos os numeros sorteados sejam exclusivos
        }

        sorteados.push(numero); 
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>` //mudando  o conteudo da div "resultado"
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; //criando  um numero aleatorio entre o minimo e o maximo


}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar'); //pegando o botao reiniciar
    if (botao.classList.contains('container__botao-desabilitado')) { //se o botao  tiver a classe "container__botao-desabilidato"
        botao.classList.remove('container__botao-desabilitado');  //remove a classe
        botao.classList.add('container__botao'); //adiciona  a classe "container__botao"
    }  else {  //se o botao nao tiver a classe "container__botao-desabilidato"
        botao.classList.remove('container__botao'); //retira  a classe "container__botao"
        botao.classList.add('container__botao-desabilitado')//adiciona  a classe "container__botao-desabilidato"
    }
}

function reiniciar() { //voltando todos  os valores para o inicial
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum ate agora </label>';
    alterarStatusBotao();
}