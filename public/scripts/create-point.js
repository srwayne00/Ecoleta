// console.log("Hello")  // utilizado para escrever na tela
// https://servicodados.ibge.gov.br/api/v1/localidades/estados

// "fetch (https://servicodados.ibge.gov.br/api/v1/localidades/estados)" 
// é uma função de promessa que vai ate o site e retorna, recebe um argumento(paramentro)
// site para buscar os municipios // https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
// "then" (então) é uma função // "res" (response) é uma resposta // "req" (requeste) é uma requisição

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )  // função anonima que retorna um valor
    .then( states => {

        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }     
    })
}

populateUFs()

function getCities(evento) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"   //usado para limpar o campo da cidade
    citySelect.disabled = true  //Mantem o campo cidade bloqueado ate a seleção do estado

    fetch(url)
    .then( res => res.json() )  // função anonima que retorna um valor
    .then( cities => {


        for( const city of cities ) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }  
        citySelect.disabled = false   
    } )
}

document
    .querySelector("select[name=uf]")//procura um select com name de uf
    .addEventListener("change", getCities) //ouvir um evento e executar uma função quando houver mudança
    
// Itens de coleta
//Pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem) //callback function para quando for clicado
}

const collectedItems = document.querySelector("input[name=items]") //Add itens no campos escondido

let selectedItems = []

function handleSelectedItem(event) {  
    const itemLi = event.target

    //Adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    
    //Verificar se existem itens selecionados
    //Se sim, pegar os itens
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId //verdadeiro ou falso
        return itemFound
    })

    
    //se tiver selecionado, 
    if( alreadySelected >= 0 ) {
            //tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })
        selectedItems = filteredItems

    } else {
        //Se não, add a seleção
        selectedItems.push(itemId)
    }
    //atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}