/**
 * function University(name, dept) { 
	this.name = name; 
	this.dept = dept; 
	this.graduation = function(year) { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
} 
var miu = new Univeristy("MIU", "Computer Science"); 
miu.graduation(2019);
 */
function University(this:any,name:number, dept:string) { 
	this.name = name; 
	this.dept = dept; 
	this.graduation = function(year:number) { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
} 
let miu = new (University as any)(12345, "Computer Science"); 
miu.graduation(2019);