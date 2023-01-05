function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.useremail.value;
    localStorage.setItem('name',name);
    localStorage.setItem('emailid',email);
    const obj={
        name,
        email
    }
    localStorage.setItem('userdetails', JSON.stringify(obj));
    showUserOnScreen(obj);

    function showUserOnScreen(obj){
        const parentele=document.getElementById('users');
        const childele=document.createElement('li');
        childele.textContent=obj.name+' _ '+obj.email;
        

        const editbtn=document.createElement('input');
        editbtn.type='button';
        editbtn.value='Edit';
        editbtn.onclick = () =>{
            localStorage.removeItem(obj.email);
            parentele.removeChild(childele);
            document.getElementById('name').value=obj.name;
            document.getElementById('email').value=obj.email;
        }
       
        childele.appendChild(editbtn);
        parentele.appendChild(childele);
    }
}