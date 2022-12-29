var manipulate=document.getElementById('header-title');
console.log(manipulate.textContent);

var mainheader=document.getElementById('main-header');
mainheader.style.borderBottom='solid 3px #000';

var title=document.getElementsByClassName('list-group-item');
console.log(title[1].textContent);
title[1].style.fontWeight='bold';
title[1].style.color='green';