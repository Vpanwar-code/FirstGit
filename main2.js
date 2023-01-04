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
}