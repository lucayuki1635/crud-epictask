document.querySelector("#salvar").addEventListener("click", cadastar)

let lista_jogos = []

window.addEventListener("load", ()=> {
    lista_jogos = JSON.parse(localStorage.getItem("lista_jogos"))
    if(lista_jogos != null){
        lista_jogos.forEach((tarefa) => {

            document.querySelector("#jogos").innerHTML += gerarCard(tarefa)
        
        })
    }else{
        lista_jogos = []
    }

})

function cadastar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let valor = document.querySelector("#valor").value
    let categoria = document.querySelector("#categoria").value
    let imagem = document.querySelector("#imagem").value

    const tarefa = {
        titulo,
        descricao,
        valor,
        categoria,
        imagem,
    }

    if(tarefa.titulo.length==0){
        document.querySelector("#titulo").classList.add("is-invalid")
        return
    }else{
        document.querySelector("#titulo").classList.remove("is-invalid")
    }

    if(tarefa.categoria=='Categoria'){
        document.querySelector("#categoria").classList.add("is-invalid")
        return
    }else{
        document.querySelector("#categoria").classList.remove("is-invalid")
    }

    lista_jogos.push(tarefa)

    document.querySelector("#jogos").innerHTML += gerarCard(tarefa)
    document.querySelector("#titulo").value = ''
    document.querySelector("#descricao").value = ''
    document.querySelector("#valor").value = '9.99'
    document.querySelector("#imagem").value = ''
    document.querySelector("#categoria").value = 'Categoria'

    localStorage.setItem("lista_jogos", JSON.stringify(lista_jogos))


    modal.hide()
}

function apagar(botao){
    botao.parentNode.parentNode.parentNode.remove()
    
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
                    <img src="${tarefa.imagem}" class="card-img-bottom" alt="...">
                    <p>R$${tarefa.valor}</p>
                    <a href="#" class="btn btn-success"><i class="bi bi-check-lg"></i></a>
                    <a href="#" class="btn btn-danger" onClick='apagar(this)'><i class="bi bi-trash3-fill"></i></i></a>
                </div>
                </div>
            </div>`
}
