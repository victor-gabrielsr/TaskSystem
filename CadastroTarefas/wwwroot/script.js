
//JavaScript personalizado para manipulação das tarefas 

function excluirTarefa(button) {
    // Remove o elemento pai da lista (li) quando o botão "Excluir" é clicado
        $(button).parent().remove();
    }
function adicionarTarefa() {
    // Recupera os valores dos campos do modal
    const nome = $("#nomeTarefaModal").val();
    const descricao = $("#descricaoTarefaModal").val();
    const dataString = $("#dataTarefaModal").val();
    const prioridade = parseInt($("#prioridadeTarefaModal").val(), 10); // Converte para número
    const responsavel = $("#responsavelTarefaModal").val();
  
    if (!nome || !dataString || !prioridade) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }
    const idTarefa = Math.floor(Math.random() * 1000); // Número aleatório entre 0 e 999
    // Converte a string da data para o formato 'yyyy-MM-dd'
    const dataParts = dataString.split('-');
    const dataFormatada = `${dataParts[0]}-${dataParts[1].padStart(2, '0')}-${dataParts[2].padStart(2, '0')}`;

    // Constrói o objeto de dados a ser enviado para a API
    const tarefa = {
        IdTarefa: idTarefa,
        NomeTarefa: nome,
        Descricao: descricao,
        DataTarefa: dataFormatada,
        Prioridade: prioridade, // Certifique-se de que o campo Prioridade seja preenchido corretamente
        Responsavel: responsavel
    };
    $.ajax({
        type: "POST",
        url: "http://localhost:23754/api/Tarefas/Salvar",
        contentType: "application/json",
        data: JSON.stringify(tarefa),
        success: function (response) {
            // Se a tarefa foi salva com sucesso, adicione-a à lista
            const listItem = `
                <li class="list-group-item">
                    ${nome}
                    <button class="btn btn-danger float-right" onclick="excluirTarefa(this)">Excluir</button>
                </li>
            `;
            $(".list-group").append(listItem);
            // Limpa os campos do modal
            $("#nomeTarefaModal").val("");
            $("#descricaoTarefaModal").val("");
            $("#dataTarefaModal").val("");
            $("#prioridadeTarefaModal").val("baixa");
            $("#responsavelTarefaModal").val("");
            // Fecha o modal
            $("#modalTarefa").modal("hide");

            alert("Tarefa salva com sucesso!");
        },
            error: function (error) {
            console.error("Erro ao salvar a tarefa: " + error.responseText);
            alert("Erro ao salvar a tarefa.");
        }
    });
}
