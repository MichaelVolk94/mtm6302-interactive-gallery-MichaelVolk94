const items = ['Boats', 'Kamnik', 'Candles', 'Portrait', 'Leaves', 'Background', 'Mountains', 'Swans', 'Bridge', 'Maribor', 'Berries', 'Fish'];
const $pictures = document.getElementById('pictures');
const html = items.map(item => `
    <p>
        <img src="images/${item}.png">
        <code>${item}</code>
    </p>
`).join('');

$pictures.innerHTML = html;