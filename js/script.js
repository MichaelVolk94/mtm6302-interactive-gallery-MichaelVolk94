const items = ['Boats', 'Kamnik', 'Candles', 'Portrait', 'Leaves', 'Background', 'Mountains', 'Swans', 'Bridge', 'Maribor', 'Berries', 'Fish'];
const $pictures = document.getElementById('pictures');
const html = items.map(item => `
    <p>
        <img src="images/${item}.png" class = "image-button" data-image = ${item}>
        <code>${item}</code>
    </p>
`).join('');
$pictures.innerHTML = html;
$pictures.addEventListener('click', function(event){
if (event.target.classList.contains('image-button')){
    document.getElementById("HD-image").innerHTML = `<p>
    <img src="images/${event.target.dataset.image}.png">
    <code>${event.target.dataset.image}</code>
</p>`
}
})