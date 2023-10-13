//Crie um novo projeto com uma página que tenha 2 campos de texto e 1 botão com o rótulo "Achar". 
//O usuário deve digitar um conjunto de números separados por um "separador"  na primeira caixa 
//de texto e informar o "separador" na segunda caixa e ao clicar no botão, deve ser mostrado em 
//um elemento na tela o maior e o menor número digitado.


let button = document.querySelector("#button");
let spanMaior = document.getElementById("maiorNumero");
let spanMenor = document.getElementById("menorNumero");

button.addEventListener("click", () => {
    let Numbers = document.getElementById('inpNumber').value;
    let Separador = document.getElementById("inpSeparador").value;

    Numbers = Numbers.split(Separador);
    Numbers = Numbers.map(str => parseInt(str.trim(), 10));
    console.log(Numbers);

    let maior = Numbers[0];
    let menor = Numbers[0];

    for(let i = 1; i < Numbers.length; i++){
        if(maior < Numbers[i]) maior = Numbers[i];
        if(menor > Numbers[i]) menor = Numbers[i];
    }
    
    console.log(maior, menor);

    spanMaior.textContent = `Maior Número: ${maior}`;
    spanMenor.textContent = `Menor Número: ${menor}`;

})