
Array.prototype.removeDuplicatesAsync=function(){
  let self=this
 new Promise(function(resolve,reject){
     resolve(self)
     reject(new Error("Error"))
 }).then((result)=>{
    let set =new Set()
    let l=result.length
    for(let i=0;i<l;i++){
        set.add(result.pop())
    }  
    for(let n of set){
        result.push(n)
    }  
  return result}).then(console.log)
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);
// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]


