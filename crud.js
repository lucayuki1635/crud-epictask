document.querySelector("#salvar").addEventListener("click", cadastar)

function cadastar(){
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo,
        descricao,
        pontos,
        categoria
    }

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
    
}



function gerarCard(tarefa){
    return `<div class="col-12 col-md-6">
                <div class="card">
                <div class="card-header">
                   ${tarefa.titulo}
                </div>
                <div class="card-body">
                    <p class="card-text">${tarefa.descricao}</p>
                    <p>
                        <span class="badge text-bg-warning">${tarefa.categoria}</span>
                    </p>
                    <p>${tarefa.pontos} pontos</p>
                    <a href="#" class="btn btn-success"><i class="bi bi-check-lg"></i></a>
                    <a href="#" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></i></a>
                </div>
                </div>
            </div>`
}