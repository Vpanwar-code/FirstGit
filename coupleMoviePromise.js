console.log("person1 : shows ticket");
console.log("person2 : shows ticket");

const promiseWifeTickets=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("wife shows ticket");
    },3000)
})

const getPopcorn= promiseWifeTickets.then((t)=>{
console.log("wife : I have the tickets");
console.log("husband : shall we go in");
console.log("wife : no I am hungry");
return new Promise((resolve , reject)=>resolve(`${t} husband gets popcorn`));
});

const getButter=getPopcorn.then((t)=>{
    console.log("husband : I have got some popcorns");
    console.log("husband : shall we go in");
    console.log("wife : I need butter on my popcorn");
    return new Promise((resolve , reject)=>resolve(`${t} husband gets butter`));

});

const getCoke=getButter.then((t)=>{
    console.log("husband : I have got some butter");
    console.log("wife : I need coke with my popcorn");
    return new Promise((resolve , reject)=>resolve(`${t} husband gets coke`));
});

getCoke.then((t)=>console.log(t));

console.log("person4 : shows ticket");
console.log("person5 : shows ticket");