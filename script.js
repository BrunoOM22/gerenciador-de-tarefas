function adicionarTarefa() {
    const input = document.getElementById("nova-tarefa");
    const lista = document.getElementById("lista-tarefas");
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => li.remove();

        li.appendChild(botaoRemover);
        lista.appendChild(li);
        input.value = "";
    }
}
