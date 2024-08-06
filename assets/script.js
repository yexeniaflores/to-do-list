// Wait for the document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Display the current date in the element with id 'currentDate'
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString();

    // Add button and attach an event listener to it
    let addButton = document.getElementById('addButton');
    addButton.addEventListener('click', addItem);
});

function addItem() {
    // Get the text from the input field with id 'newItem'
    let newItemText = document.getElementById('newItem').value;
    
    // If the input field is empty, do nothing and return
    if (newItemText === '') return;

    // Create a new list item (li) element
    let li = document.createElement('li');
    
    // Set the text of the list item to the input field's value
    li.innerText = newItemText;

    // Create a checkbox to cross out the item
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    
    // Add an event listener to the checkbox to toggle the 'completed' class
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    });
    
    // Insert the checkbox at the beginning of the list item
    li.insertBefore(checkbox, li.firstChild);

    // Create a button to delete the item
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    
    // Add an event listener to the button to remove the list item
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    
    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the unordered list with id 'todoList'
    document.getElementById('todoList').appendChild(li);
    
    // Clear the input field
    document.getElementById('newItem').value = '';
}