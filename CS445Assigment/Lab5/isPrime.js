function isPrime(num){
    return new Promise(function(resolve,reject){
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
             if(num % i === 0) 
             setTimeout(_=>reject("Error"),500) ; 
  setTimeout(()=>resolve({prime:true}) ,500)  
    })
}
console.log('start');
isPrime(7)
    .then(_ => console.log(_))
    .catch(_ => console.error(_));
console.log('end');
