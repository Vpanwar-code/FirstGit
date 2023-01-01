var manipulate=document.getElementById('header-title');
console.log(manipulate.textContent);

var mainheader=document.getElementById('main-header');
mainheader.style.borderBottom='solid 3px #000';

//var title=document.getElementsByClassName('list-group-item');
//console.log(title[1].textContent);
//title[1].style.fontWeight='bold';
//title[1].style.color='green';

// title[2].style.backgroundColor='green';

// for(var i=0; i<title.length; i++){
//    title[i].style.fontWeight='bold';
// }

// var items= document.getElementsByTagName('li');
// items[4].style.color='blue';

// var items1=document.getElementByClassName('new-item');
// items1.style.fontWeight='bold';

var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

//var secondChild=document.querySelector('.list-group-item:nth-child(2) ');
//secondChild.style.backgroundColor='green';

//var thirdChild=document.querySelector('.list-group-item:nth-child(3) ');
//thirdChild.style.visibility='hidden';

// var items=document.querySelectorAll('.list-group-item');
// items[1].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor='#f4f4f4';
// }

var itemList = document.querySelector('#items');
//itemList.parentNode.style.backgroundColor='#f4f4f4';

itemList.parentElement.style.backgroundColor='#f4f4f4';

itemList.children[1].style.backgroundColor='#f4f4f4';

console.log(itemList.firstChild);

itemList.firstElementChild.style.backgroundColor='yellow';

itemList.lastElementChild.textContent='hello 4';

console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);

itemList.previousElementSibling.style.color='blue'


//creating element using javascript

var newDiv =document.createElement('div');

newDiv.className='hello';
newDiv.id='hello 1';

newDiv.setAttribute('title','Hello div');

var textOfDiv=document.createTextNode('welcome to new div');

newDiv.appendChild(textOfDiv);

var container=document.querySelector('header .container');

var h1=document.querySelector('header h1');

container.insertBefore(newDiv,h1);











