document.getElementById('theButton').onclick = buttonClick;

async function buttonClick() {
    let resultsParagraph = document.getElementById('resultsParagraph');

    let response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    let data = await response.json();

    resultsParagraph.innerText = data['title'];
}