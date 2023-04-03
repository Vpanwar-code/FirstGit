function saveToLocalStorage(event){
    event.preventDefault();
    const price=event.target.sellerprice.value;
    const name=event.target.sellername.value;
    const category=event.target.category.value;
    localStorage.setItem('name',name);
    localStorage.setItem('price',price);
    localStorage.setItem('category',category);

    const obj={
        name,
        price,
        category
    }

    axios.post("https://crudcrud.com/api/a54e7c472aec4245aee00a84d769ab7a/sellingdata")
    .then((response)=>{
        showUserOnScreen(response.data);
        
    })
    .catch((err)=>{
        console.log(err);
    })
   // localStorage.setItem('userdetails', JSON.stringify(obj));

    //showUserOnScreen(obj);

    window.addEventListener("DOMContentLoaded" , () =>{
        axios.get("https://crudcrud.com/api/a54e7c472aec4245aee00a84d769ab7a/sellingdata")
    .then((response)=>{
      
        for(var i=0; i<response.data.length; i++){
            showUserOnScreen(response.data[i]);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
    })

    function showUserOnScreen(user){
                
        user={
            _id:'',
            name:'',
            price:'',
            category:''
        }
        

      document.getElementById('sellprice').value='';
      document.getElementById('sellname').value='';
      document.getElementById('sellcategory').value='';

      if(localStorage.getItem(user.name)!==null){
        removeUserFromScreen(user.name)
      }


     const parentNode=document.getElementById('users');
     const childHTML=`<li id=${user._id}> ${user.name}-${user.price} 
                     <button onclick= deleteUser('${user._id}')>Delete User</button>
                     <button onclick=editUserDetails('${user.name}','${user.price}','${user.category}','${user._id}')>Edit User </button>
     </li>`

     parentNode.innerHTML=parentNode.innerHTML+childHTML;

    }

    function editUserDetails(name,price,category,userId){
        document.getElementById('name').value=name;
        document.getElementById('price').value=price;
        document.getElementById('category').value=category;

        deleteUser(userId);

    }

    function deleteUser(userId){
       axios.delete(`https://crudcrud.com/api/b666e5a8d45e4db6b26327875696f2c1/appointmentdata/${userId}`)
        .then((response)=>{
            removeUserFromScreen(userId)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    function removeUserFromScreen(userId){
        const parentNode=document.getElementById('users');
        const childNodeToBeDeleted=document.getElementById(userId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted);
        }
    }
}
