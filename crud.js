document.querySelector("#salvar").addEventListener("click", cadastar)

let lista_jogos = []

window.addEventListener("load", ()=> {
    lista_jogos = JSON.parse(localStorage.getItem("lista_jogos")) || []
    atualizar()

})

document.querySelector('#pendentes').addEventListener("click", ()=>{
    lista_jogos = JSON.parse(localStorage.getItem("lista_jogos")) || []
    lista_jogos = lista_jogos.filter(jogo => !jogo.concluida)
    atualizar()

})

document.querySelector('#concluidas').addEventListener("click", ()=>{
    lista_jogos = JSON.parse(localStorage.getItem("lista_jogos")) || []
    lista_jogos = lista_jogos.filter(jogo => jogo.concluida)
    atualizar()

})

document.querySelector('#busca').addEventListener("keyup", ()=>{
    lista_jogos = JSON.parse(localStorage.getItem("lista_jogos")) || []
    const titulo = document.querySelector("#busca").value
    lista_jogos = lista_jogos.filter(jogo => jogo.titulo.includes(titulo))
    atualizar()
})

function cadastar(){
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let valor = document.querySelector("#valor").value
    let categoria = document.querySelector("#categoria").value
    let imagem = document.querySelector("#imagem").value

    const jogo = {
        id: Date.now(),
        titulo,
        descricao,
        valor,
        categoria,
        imagem,
        concluida: false,
    }

    if(jogo.titulo.length==0){
        document.querySelector("#titulo").classList.add("is-invalid")
        return
    }else{
        document.querySelector("#titulo").classList.remove("is-invalid")
    }

    if(jogo.categoria=='Categoria'){
        document.querySelector("#categoria").classList.add("is-invalid")
        return
    }else{
        document.querySelector("#categoria").classList.remove("is-invalid")
    }

    lista_jogos.push(jogo)

    document.querySelector("#jogos").innerHTML += gerarCard(jogo)
    document.querySelector("#titulo").value = ''
    document.querySelector("#descricao").value = ''
    document.querySelector("#valor").value = '9.99'
    document.querySelector("#imagem").value = ''
    document.querySelector("#categoria").value = 'Categoria'

    salvar()

    modal.hide()
}

function atualizar(){
    document.querySelector("#jogos").innerHTML = ""
    lista_jogos.forEach((jogo) => {
        document.querySelector("#jogos").innerHTML += gerarCard(jogo)
    
    })    
}

function salvar(){
    localStorage.setItem("lista_jogos", JSON.stringify(lista_jogos))
}

function concluir(id){
    let jogo_encontrado = lista_jogos.find(jogo => jogo.id == id)
    jogo_encontrado.concluida = true
    salvar()
    atualizar()
    

}

function apagar(id){
    lista_jogos = lista_jogos.filter(jogo=> jogo.id != id)

    salvar()
    atualizar()

}



function gerarCard(jogo){
    const disabled = (jogo.concluida) ? "disabled" : "" 
    return `<div class="col-12 col-md-6 col-lg-3 mb-2">
                <div class="card">
                <div class="card-header">
                   ${jogo.titulo}
                </div>
                <div class="card-body">
                    <p class="card-text">${jogo.descricao}</p>
                    <p>
                        <span class="badge text-bg-warning">${jogo.categoria}</span>
                    </p>
                    <img src="${jogo.imagem}" class="card-img-bottom" alt="...">
                    <p>R$${jogo.valor}</p>
                    <a href="#" onClick='concluir(${jogo.id})' class="btn btn-success ${disabled}")><i class="bi bi-check-lg"></i></a>
                    <a href="#" class="btn btn-danger" onClick='apagar(${jogo.id})'><i class="bi bi-trash3-fill"></i></i></a>
                </div>
                </div>
            </div>`
}
