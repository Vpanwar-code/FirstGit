function saveToLocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.useremail.value;
    const number=event.target.usernumber.value;
    localStorage.setItem('name',name);
    localStorage.setItem('emailid',email);
    localStorage.setItem('phonenumber',number);

    const obj={
        name,
        email,
        number
    }

    axios.post("https://crudcrud.com/api/b666e5a8d45e4db6b26327875696f2c1/appointmentdata")
    .then((response)=>{
        showUserOnScreen(response);
        
    })
    .catch((err)=>{
        console.log(err);
    })
   // localStorage.setItem('userdetails', JSON.stringify(obj));

    //showUserOnScreen(obj);

    window.addEventListener("DOMContentLoaded" , () =>{
        axios.get("https://crudcrud.com/api/b666e5a8d45e4db6b26327875696f2c1/appointmentdata")
    .then((response)=>{
      
        for(var i=0; i<response.data.length; i++){
            showUserOnScreen(response.data);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    })

    function showUserOnScreen(obj){
      document.getElementById('email').value='';
      document.getElementById('username').value='';
      document.getElementById('phonenumber').value='';

      if(localStorage.getItem(user.email)!==null){
        removeUserFromScreen(user.email)
      }


     const parentNode=document.getElementById('listOfUsers');
     const childHTML=`<li id=${user._id}> ${user.name}-${user.email} 
                     <button onclick=deleteUser('${user._id}')>Delete User</button>
                     <button onclick=editUserDetails('${user._id}')>Edit User </button>
     </li>`

     parentNode.innerHTML=parentNode.innerHTML+childHTML;

    }

    function editUserDetails(email,name,phonenumber){
        document.getElementById('email').value=emailid;
        document.getElementById('username').value=name;
        document.getElementById('phonenumber').value=phonenumber;

        deleteUser(emailid);

    }

    function deleteUser(userId){
       axios.delete('"https://crudcrud.com/api/b666e5a8d45e4db6b26327875696f2c1/appointmentdata"')
        .then((response)=>{
            removeUserFromScreen(userId)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function removeUserFromScreen(emailid){
        const parentNode=document.getElementById('listOfUsers');
        const childNodeToBeDeleted=document.getElementById(emailid);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted);
        }
    }
}
