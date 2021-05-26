  async function removeDuplicate(arr){
     return [...new Set(arr)]
}
Array.prototype.removeDuplicates=async function(){
    try{
        let res=  await removeDuplicate(this); 
        console.log(res)
    }catch(e){
     console.log(e)
    }
}
    
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates()
console.log(`end`);

// Output:
// start
// [4, 1, 5, 7, 2, 3, 6]
// end