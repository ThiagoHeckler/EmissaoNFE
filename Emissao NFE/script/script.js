function loadContent(page) {
    fetch('pages/' + page + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

const menu = document.getElementById('menu-burguer');
function loadOptions() {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}