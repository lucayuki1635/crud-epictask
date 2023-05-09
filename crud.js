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

    if(categoria!="Categoria"){
        document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)

        document.querySelector("#titulo").value = ''
        document.querySelector("#descricao").value = ''
        document.querySelector("#pontos").value = ''
        document.querySelector("#categoria").value = 'Categoria'

    }else{
        if (document.querySelector("#alertError")==null){
            document.querySelector("#alerts-modal").innerHTML += `
            <span class="alert alert-danger mb-0 mr-14" id="alertError" role="alert">
                Selecione uma categoria!
            </span>
            `
            setTimeout(function() {document.querySelector(".alert").remove()}, 5000)
            
        }
    }   
}

function gerarCard(tarefa){
    return `<div class="col-12 col-md-6 col-lg-3 mb-2">
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

