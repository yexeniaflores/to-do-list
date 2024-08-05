document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString();
});