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
        const parent=document.getElementById('users');
        parent.innerHTML=parent`<li>${obj.name}-${obj.email}</li>`;

        const deletebtn=document.createElement('input');
        deletebtn.type="button";
        deletebtn.value='Delete';
        deletebtn.onclick = () =>{
            localStorage.removeItem(obj.email);
        }
    }
}