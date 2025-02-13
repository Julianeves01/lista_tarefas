function addTask() { //adicionar nova tarefa 
    let taskInput = document.getElementById("taskInput"); //
    let taskText = taskInput.value.trim();
    let prioritySelect = document.getElementById("prioritySelect");
    let priority = prioritySelect.value;

    if (taskText === "") { //Verifica se o texto da tarefa está vazio. Se estiver, exibe um alerta e interrompe a execução da função.
        alert("Digite uma tarefa válida!");
        return;
    }

    let table = document.getElementById("taskTable"); 
    let row = table.insertRow();

    let taskCell = row.insertCell(0);
    taskCell.textContent = taskText;

    let priorityCell = row.insertCell(1); //Insere uma nova célula para a prioridade, define o texto da célula como a prioridade retornada pela função
    priorityCell.textContent = priority;
    priorityCell.classList.add("priority", priority.toLowerCase());

    let actionCell = row.insertCell(2); // Insere uma nova célula para ações, cria um botão de remoção, define seu texto e classe CSS, e adiciona um evento de clique que remove a linha da tabela.
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function() {
        table.deleteRow(row.rowIndex - 1);
    };

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluído';
    completeButton.classList.add("complete-btn");
    completeButton.onclick = function() {
        taskCell.style.textDecoration = taskCell.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        taskCell.style.color = taskCell.style.textDecoration === 'line-through' ? '#6c757d' : '#000';
    };

    actionCell.appendChild(completeButton);
    actionCell.appendChild(removeButton);
    taskInput.value = ""; //limpa p campo de entrada de tarefa
}