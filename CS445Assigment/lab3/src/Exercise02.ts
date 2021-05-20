/**
 * this convert to type scripts file
 * let bankAccount = { 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 
let myself = { 
	name: "Asaad", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);
 */
let bankAccount:{
  money:number,
  deposit(value:number):void;
}
 bankAccount = { 
	money: 2000, 
	deposit:function(value:number) { 
		this.money += value; 
	} 
}; 
let myself:{
  name:string,
  bankAccount:typeof bankAccount,
  hobbies:string[];
}
myself = { 
	name: "Asaad", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);

