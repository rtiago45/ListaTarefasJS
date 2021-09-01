import BotaoConclui from "./componentes/concluiTarefa.js"  
import BotaoDeleta from "./componentes/deletaTarefa.js"

const criarTarefa = (evento) => {
    evento.preventDefault()


    const list = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task') // adiciona o estilo do css
    const conteudo = `<p class="content">${valor}</p>`


    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    list.appendChild(tarefa)
    input.value = ""
}

const novaTarefa = document.querySelector('[data-form-button]')


// adicionar um evento no botão

novaTarefa.addEventListener('click', criarTarefa)

// criando o botão de concluir
