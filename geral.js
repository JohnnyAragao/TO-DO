let input = document.getElementById("entrada")
let btnAdicionar = document.getElementById("botaoAdicionar")
let listaHtml = document.getElementById("lista")

console.log(listaHtml)
btnAdicionar.addEventListener("click", adicionar)

function adicionar() {
    listaHtml.innerHTML += `
    <li>
        ${input.value}
        <button class="btnEditar">✏️</button> <button class="btnApagar">🗑️</button>
    </li>
    `


}
