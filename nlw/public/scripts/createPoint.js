function recoveryNames(url, name){
    const nameSelect = document.querySelector(`select[name = ${name}]`)

    // nameSelect.innerHTML = "<option value>Selecione a cidade</option>"
    nameSelect.disabled = true
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        
        for(const element of data){
            nameSelect.innerHTML += `<option value = ${element.id}>${element.nome}</option>`
        }
        if(nameSelect.disabled){
            nameSelect.disabled = false
        }
    })
}

function populateUFs(){
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
    recoveryNames(url, 'uf')
}

function updateInputName(name, event){
    fieldInput = document.querySelector(`input[name = ${name}]`)
    const idxItemSelected = event.target.selectedIndex
    fieldInput.value = event.target.options[idxItemSelected].text
    console.log(fieldInput.value)
}

function getCities(event){
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    recoveryNames(url, 'city')
}

populateUFs()
stateField = document.querySelector('select[name = uf]')
stateField.addEventListener('change', getCities)
stateField.addEventListener('change', () => {updateInputName('state', event)})

cityField = document.querySelector('select[name = city]')
cityField.addEventListener('change', () => {updateInputName('cityName', event)})

// Items de coleta
// Recuperar todos os li's
const itemsField = document.querySelectorAll(".itemsGrid li")

for (let item of itemsField){
    item.addEventListener('click', handleSelectedItem)
}

const collectedItems = document.querySelector("input[name = items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    // add or remove class with js
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    const alreadySelected = selectedItems.findIndex(item => item == itemId)

    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item => item != itemId)
        selectedItems = filteredItems
    }else{
        selectedItems.push(itemId)
    }
    
    collectedItems.value = selectedItems
}   




