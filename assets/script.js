document.addEventListener('DOMContentLoaded', function() {

    document.getElementById ('currentDate').innerText = new Date().toLocaleDateString();

    var addButton = document.getElementsByClassName('add-button');
    addButton.addEventListener('click', addItem)
});

function addItem() {

    var newItemText = document.getElementById('newItem').value;

    if (newItemText === '') return;

    var li = document.createElement('li');

    li.innerText = newItemText;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    });

    li.insertBefore(checkbox, li.firstChild);
    



}