fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then( listItems => addElements(listItems));

function addElements(lists){

let currentList = document.getElementById('list');
lists.forEach(list => {
let x = document.createElement('li');
x.innerText= list;
currentList.appendChild(x);





})
}


function ReduceList()
{
    let list= document.getElementById('list');
    list=list.getElementsByTagName('li');
    while (list.length > 70) list[0].remove();
    
    return false;
     
}
function addItem()
{
    

        let itemToAdd = document.getElementById('adding')[0].value;
        fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
        method: 'POST',
        body: JSON.stringify({message: itemToAdd})
        }).then(function (response) {
        if (response.status == 200) {
            console.log("Ok!")
        } else {console.log("Oh no!")}
        });
        
        /*let currentList = document.getElementById('list');
        let newItem = document.createElement('li');
        newItem.innerText= itemToAdd;
        currentList.appendChild(newItem);
        return false;*/
        return false
        
}
