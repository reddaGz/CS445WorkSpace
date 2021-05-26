  async function isPrime(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) 
            reject({prime:false}) 
         resolve({prime:true}) 
          },500)      
    })           
}
let result= async ()=>{
    try{
        let res=await isPrime(7)
        console.log(res)
    }catch(e){
        console.error(e)
    }
    
}

console.log('start');
result()
console.log('end');
