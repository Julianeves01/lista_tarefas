function addTask() { //adicionar nova tarefa 
    let taskInput = document.getElementById("taskInput"); //
    let taskText = taskInput.value.trim();

    if (taskText === "") { //Verifica se o texto da tarefa está vazio. Se estiver, exibe um alerta e interrompe a execução da função.
        alert("Digite uma tarefa válida!");
        return;
    }

    let table = document.getElementById("taskTable"); 
    let row = table.insertRow();

    let taskCell = row.insertCell(0);
    taskCell.textContent = taskText;

    let priorityCell = row.insertCell(1); // Insere uma nova célula para a prioridade, define o texto da célula como a prioridade retornada pela função
    let priority = getPriority(taskText);
    priorityCell.textContent = priority;
    priorityCell.classList.add("priority", priority.toLowerCase());

    let actionCell = row.insertCell(2); // Insere uma nova célula para ações, cria um botão de remoção, define seu texto e classe CSS, e adiciona um evento de clique que remove a linha da tabela.
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function() {
        table.deleteRow(row.rowIndex - 1);
    };
    
    actionCell.appendChild(removeButton);
    taskInput.value = ""; //limpa p campo de entrrada de tarefa
}

function getPriority(task) { // Se o texto da tarefa contém "importante", retorna "High", Se contém "médio", retorna "Medium", Caso contrário, retorna "Low".
    if (task.toLowerCase().includes("importante")) {
        return "High";
    } else if (task.toLowerCase().includes("mais ou menos")) {
        return "Medium";
    } else {
        return "Low" (task.toLowerCase().includes("não muito"));    
    }
}
