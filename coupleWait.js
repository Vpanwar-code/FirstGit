console.log("person1 : shows ticket");
console.log("person2 : shows ticket");

const preMovie=async ()=>{
    
    const promiseWifeTickets=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("wife shows ticket");
        },3000)
    });

   

    const getPopcorn= new Promise((resolve , reject)=> resolve(`popcorn`));

    const addButter= new Promise((resolve , reject)=> resolve(`butter`));

    let ticket=await promiseWifeTickets;

    console.log("wife : I have the tickets");
console.log("husband : shall we go in");
console.log("wife : no I am hungry");

let popcorn=await getPopcorn;

console.log("husband : I have got some popcorns");
console.log("husband : shall we go in");
console.log("wife : I need butter on my popcorn");

let butter=await addButter;

console.log("husband : I have got some butter");
console.log("wife : I need coke with my popcorn");

return ticket;
}

preMovie().then((m) => console.log(m));

console.log("person4 : shows ticket");
console.log("person5 : shows ticket");