fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then( listItems => addElements(listItems));

function addElements(lists){

let currentList = document.getElementById('list');
lists.forEach(list => {
let x = document.createElement('li')
x.innerText= list;
currentList.appendChild(x);


})
}

let userItem = prompt("Enter Item: ");

fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
  method: 'POST',
  body: JSON.stringify({message: userItem})
}).then(function (response) {
  if (response.status == 200) {
    console.log("Ok!")
  } else {console.log("Oh no!")}
});
let currentList = document.getElementById('list');
let newItem = document.createElement('li')
newItem.innerText= userItem;
currentList.appendChild(newItem);
