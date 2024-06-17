function actualizarColor(color) {
    div = document.getElementById('key')
    div.style.backgroundColor = color;
} 
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        actualizarColor('pink')
    } else if (event.key === 's') {
        actualizarColor('orange')
    } else if (event.key === 'd') {
        actualizarColor('lightblue')
    }});

    document.addEventListener('keydown', (event) => {
    if (event.key === 'q') {
        createDiv('purple')
    } else if (event.key === 'w') {
        createDiv('grey')
    } else if (event.key === 'e') {
        createDiv('brown')
    }});

    function createDiv(color) {
        let newDiv = document.createElement('div');
        newDiv.style.border = '2px solid black';
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.margin = 'auto';
        newDiv.style.padding = 'auto';
        newDiv.style.marginTop = '3px' 
        newDiv.style.backgroundColor = color;
        document.body.appendChild(newDiv); 
        }
