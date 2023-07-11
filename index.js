document.getElementById('theButton').onclick = buttonClick;

function buttonClick() {
    var resultsParagraph = document.getElementById('resultsParagraph');
    resultsParagraph.innerText = 'Didnt really do anything';
}