fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then( listItems => addElements(listItems));

function addElements(lists){

let currentList = document.getElementById('list');
lists.forEach(list => {
let x = document.createElement('li')
x.innerText= list;
currentList.appendChild(x);


})
}
