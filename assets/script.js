document.addEventListener('DOMContentLoaded', function() {

    document.getElementById ('currentDate').innerText = new Date().toLocaleDateString();

    var addButton = document.getElementsByClassName('add-button');
    addButton.addEventListener('click', addItem)
});