/**
 * var baseObject = { 
	width: 0, 
	length: 0 
}; 
var rectangle = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10
 */
let baseObject:{
    width:number,
    length:number;
} 
 baseObject = { 
	width: 0, 
	length: 0 
}; 
let  rectangle = Object.create(baseObject); 
rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function():number { 
	return this.width * this.length; 
}; 
console.log(rectangle.calcSize()); // 10