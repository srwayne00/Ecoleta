//pegar o botão "pesquisar pontos de coleta"
const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

//quando clicar no botão, remover a classe hide do modal
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")

})
// adicionar a classe hide quando clicar no close
close.addEventListener("click", () => {
    modal.classList.add("hide")
})
