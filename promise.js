const posts = [{title: 'POST1'},{title: 'POST2'}];

function createPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});

            const error=false;

            if(!error){
                resolve();
            }
            else{
                reject("Error : Something went wrong")
            }
            
        }, 2000)
    }) 
}

const user ={
    username : "vivek",
    lastactivitytime : "25 feb"
}

function updatelastactivitytime() {
    return new Promise((resolve , reject) => {
        setTimeout( () =>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)
        },1000)
    })
}

function userupdateapost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])
    .then(([createPostresolves , updatelastactivitytimeresolves])=>{
        console.log(updatelastactivitytimeresolves);
    })
}