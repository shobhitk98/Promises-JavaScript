// Promiese 
const prmoiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asycn Task Completed");
    //async task
        resolve()
        // reject()
       
        
    },1000)

})

prmoiseOne.then(function(){
    //then is connected to resolve
    console.log("Promise is Completed ");
    
})

// prmoiseOne.catch(function(){
//     console.log("Prmoises has error");
    
// })

new Promise(function(resolve,reject){
  
    setTimeout(function() {
        
        console.log("async 2 promise task");
        resolve()
        
        
    }, 1000);
}).then(function(){
    console.log("Asnyc 2 promise completed")
})

const promiseThree=new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("async promise 3");
    resolve({username:"Shobhit",email:"kshobhit1606@gmail.com"})
    
   },1000)
    
})

promiseThree.then(function(user){
    console.log(user);
    

})

const promiseFour=new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=true
        
        
        if (!error) {
        resolve({username:"Shobhit",password:"1234"})
           
            
        }
        else{
            reject("ERROR")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    

})
//chaining kehet hum jb sath then or us krkste h
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
//finally ki state default h mtlb vo execute hoga hi hoga chae error ae ya ni ae
.finally(()=>console.log("Promise is Resolve or either its Rejected")
)


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        
        
        if (!error) {
        resolve({username:"JavaScript",password:"1234"})
           
            
        }
        else{
            reject("ERROR:js went Wrong")
        }
    },1000)


});
// async await  using
async function consumedPromiseFive() {
     
      try {
        const response= await promiseFive
        console.log(response);
           
        
      } catch (error) {
        console.log(error);
        
        
      }
    
}
consumedPromiseFive()

// we can handle our promises using  then catch  and we are using async await then we have to use try and catch 
// but then and catch is easy

async function usingFetch() {
    try {
        const response=  await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data);
        
        
    } catch (error) {
        console.log("E",error);
        
        
    }
    
}
usingFetch()

