Array.prototype.removeDuplicates= function(){
    let set =new Set()
    let l=this.length
    for(let i=0;i<l;i++){
        set.add(this.pop())
    }  
    for(let n of set){
        this.push(n)
    }
console.log(this)
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicates(); 
console.log(`end`);

// Output:
// start
// [4, 1, 5, 7, 2, 3, 6]
// end