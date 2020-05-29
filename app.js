fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then( listItems => addElements(listItems));
let img1 = "https://media.giphy.com/media/l378p9LkUFafzLsUE/giphy.gif";
let img2 = "https://media.giphy.com/media/p12uW5pXkocko/giphy.gif";
let img3 = "https://media.giphy.com/media/JfIyrLGziPs5O/giphy.gif";
let img4 = "https://media.giphy.com/media/5FJcVeYFVysda/giphy.gif"
let img5 = "https://media.giphy.com/media/Rt23MIHkCJwdy/giphy.gif";
let images = [img1,img2,img3,img4,img5];
function addElements(lists){

let currentList = document.getElementById('list');
lists.forEach(list => {
let x = document.createElement('div');


x.classList.add("w3-card-4");
x.style.width="50%";
let y = document.createElement('div');
y.classList.add('w3-container');
y.classList.add('w3-center');
let img = document.createElement('img');
img.src = images[Math.floor(Math.random() * images.length)]
img.style.width="100%";
x.appendChild(img);




let z= document.createElement('p');
z.innerText= list;
x.appendChild(y);
y.appendChild(z);


currentList.appendChild(x);









})
}


function reduceList()
{
    
    let list= document.getElementById('list');
    list=list.getElementsByTagName('div');
    let midpoint= Math.floor(list.length* 0.95) ;
    for (let i =0; i < midpoint; i++)
    {
        list[i].style.display = "none";
    }
    return false;
    
    
     
}

function increaseList()
{
    
    let list= document.getElementById('list');
    list=list.getElementsByTagName('div');
    let midpoint= Math.floor(list.length * 0.99);
    for (let i =0; i < midpoint; i++)
    {
        list[i].style.display = "";
    }
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
        
       
        
}
