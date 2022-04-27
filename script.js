// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.

const incompleteItems = document.querySelector('#incomplete-items')
const completeItems = document.querySelector('#complete-items')

for (let item of todoItems) {
    const listItem = document.createElement('li')
    listItem.innerText = item.title
    listItem.classList.add('list-item')
    if (item.completed === true) {
        completeItems.appendChild(listItem)
    }
    else {
        incompleteItems.appendChild(listItem)
    }
}


var triggerTabList = [].slice.call(document.querySelectorAll('list-item'))
triggerTabList.forEach(function (triggerEl) {
var tabTrigger = new bootstrap.Tab(triggerEl)

triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
})
})

