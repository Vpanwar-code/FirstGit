function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.useremail.value;
    const number=event.target.usernumber.value;
    localStorage.setItem('name',name);
    localStorage.setItem('emailid',email);
    localStorage.setItem('phone_number',number);

    const obj={
        name,
        email,
        number
    }

    axios.post("https://crudcrud.com/api/b666e5a8d45e4db6b26327875696f2c1")
    .then((response)=>{
        showUserOnScreen(response);
    })
    .catch((err)=>{
        console.log(err);
    })
   // localStorage.setItem('userdetails', JSON.stringify(obj));

    //showUserOnScreen(obj);

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