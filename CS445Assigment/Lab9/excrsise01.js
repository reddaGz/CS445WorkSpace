let shoppingCart = (function () {
  const basket = [];
  return {
    upsertItem(product){
        let check=basket.findIndex(p=>p.id===product.id)
        if(check===-1)
           basket.push(product)
        else{
           basket.splice(check,1) 
           basket.push(product)
        }
        console.log(basket)
    },
    getItemCount(){
      return basket.length;  
    },
    getTotalPrice(){
    return basket.reduce((p,s)=>p.price+s,0)   
    },
    removeItemById(id){
      let index=basket.findIndex(p=>p.id===id) 
     if(index!==-1)
        basket.splice(index,1)
    }
  };
})();

function main() {
  let product =[{
    id: 0,
    name: "Coffee",
    description: "Coffee Grounds from Ethiopia",
    price: 9.5,
    count: 1,
  },{
    id: 1,
    name: "Coffee",
    description: "Coffee Grounds from Ethiopia",
    price: 9.5,
    count: 1,
  }]
  shoppingCart.upsertItem(product[0]);
  shoppingCart.upsertItem(product[1]);
  console.log(shoppingCart.getItemCount()) 
  console.log(shoppingCart.removeItemById(1)) 
  console.log(shoppingCart.getItemCount()) 
}
main()
