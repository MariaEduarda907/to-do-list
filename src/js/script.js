const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask() { // função para adicionar tarefa
    if (inputBox.value === '') { // se o input estiver vazio, exibe um alerta
        alert('Você precisa digitar uma tarefa!')
}else{
    let li = document.createElement('li') // cria um elemento li
    li.innerHTML = inputBox.value // adiciona o valor do input ao li
    listContainer.appendChild(li) // adiciona o li ao listContainer
    let span = document.createElement('span') // cria um elemento span
    span.innerHTML = '\u00d7' // adiciona o símbolo de x para remover a tarefa
    li.appendChild(span) // adiciona o span ao li
}
inputBox.value = '' // limpa o input após adicionar a tarefa
saveData() // salva os dados no localStorage

}

listContainer.addEventListener('click', function(e) { // adiciona um evento de clique ao listContainer
    if(e.target.tagName === 'LI') { // se o elemento clicado for um li, adiciona ou remove a classe checked
        e.target.classList.toggle('checked') // adiciona ou remove a classe checked
        saveData()
    }
    else if(e.target.tagName === 'SPAN') { // se o elemento clicado for um span, remove o li pai
        e.target.parentElement.remove()
        saveData()
    }
}, false)//false é para não usar o modo de captura, ou seja, o evento será disparado apenas no elemento alvo

function saveData() { // função para salvar os dados no localStorage
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() { // função para mostrar as tarefas salvas no localStorage
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()