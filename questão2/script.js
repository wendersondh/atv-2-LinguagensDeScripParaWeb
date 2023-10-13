//Crie um novo projeto com uma página que tenha apenas um campo de texto, 
//onde o usuário deverá digitar uma Tarefa a ser adicionada quando ele pressionar
//a tecla "Enter". Mostre a lista de tarefas logo abaixo do campo de texto, apresentando 
//uma opção de "Remover" a tarefa, com um botão ou um ícone como um X. Ao clicar, a tarefa 
//em questão deve ser retirada da lista de tarefas.

let Tarefa = document.getElementById("inpTarefa");
let lista = document.getElementById("lista");
//let buttonAdd = document.getElementById("buttonAdd");


Tarefa.addEventListener("keydown", (event) => {
    if(event.key === "Enter") addTarefa(); 
})

function addTarefa() {
    content = Tarefa.value;
    let newElement = document.createElement("li");
    newElement.textContent = content;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "x";

    newElement.appendChild(deleteButton);
    lista.appendChild(newElement);
    
    deleteButton.addEventListener("click", () => {
        lista.removeChild(newElement);
    })
}


