const form = document.querySelector('#todoForm')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = document.querySelector('#todo-text')

    let nextId = todoItems[0].id
    for(let item of todoItems) {
        if (item.id >= nextId) {
            nextId = item.id +1
        }
    }

    const newTodo = {
        id: nextId,
        title: text.value,
        completed: false,
    }
    todoItems.push(newTodo)
    render()
})



function render() {

    const incompleteItems = document.querySelector('#incomplete-items')
    const completeItems = document.querySelector('#complete-items')

    incompleteItems.innerHTML = ''
    completeItems.innerHTML = ''

    for (let i in todoItems) {
        const item = todoItems[i]
        const listItem = document.createElement('li')
        listItem.classList.add('list-group-item', 'd-flex')
        // create a checkbox and add it to the list item
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList.add('form-check-input')
        checkbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked
            item.completed = isChecked
            render()
        })
        listItem.appendChild(checkbox)

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('btn', 'btn-sm', 'btn-danger')
        deleteButton.innerText = 'X'
        deleteButton.addEventListener('click', () => {
            delete todoItems[i]
            render()
        })
        listItem.appendChild(deleteButton)

        // create a label for the checkbox, add classes, set text and add to list item
        const label = document.createElement('label')
        label.innerText = item.title
        label.classList.add('form-check-label', 'ps-3')
        listItem.appendChild(label)
        if (item.completed === true) {
            completeItems.appendChild(listItem)
            checkbox.checked = true
        }
        else {
            incompleteItems.appendChild(listItem)
        }
    }
}

render()
