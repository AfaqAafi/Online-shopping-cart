let shoppingCart = document.getElementById('shopping-cart');
let label = document.getElementById('label');
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = ()=>{
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x + y, 0); 
    
  }
  calculation();

let generateCartItems = ()=>{
    if(basket.length !== 0){
      return (shoppingCart.innerHTML = basket.map((x) =>{
       let{id, item} = x
      let search = shopItemsData.find((x) => {
        return x.id == id 
      })  
        return `
        <div class = "cart-item">
        <img width = "100" src = "${search.img}" alt = "" /> 
        <div class = "details">    

          <div class = "title-price-x">
              <h4 class = "title-price">  
               <p> ${search.name} </p>    
               <p class = "cart-item-price"> $ ${search.price} </p>    
              </h4>
           <i onclick = "removeItem(${id})" class = "bi bi-x-lg"> </i>
          </div>

          <div class="buttons">
          <i class="bi bi-dash-lg" onclick = "decrement(${id})"></i>
          <div class="quantity" id ="${id}"> ${item}</div>
          <i class="bi bi-plus-lg" onclick = "increment(${id})"></i>
          </div>
           <h3>$ Bill ${item * search.price} </h3>
        </div>
        </div>

        `
      }).join(""))
    }
    else{
      shoppingCart.innerHTML = ``;
      label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href = "index.html"> 
        <button class = "homeBtn">Back to home</button>
        </a>
      `  
    }
}
generateCartItems();





let increment = (id)=>{
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
if(search === undefined){
        basket.push({
        id: selectedItem,
        item: 1
      })
}else{
   search.item += 1
}  
update(selectedItem)
generateCartItems();
localStorage.setItem("data", JSON.stringify(basket))

}

let decrement = (id)=>{

  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if(search === undefined) return 
  else if(search.item === 0) {
  return;

}
   else{
   search.item -= 1
}
 
update(selectedItem)
basket = basket.filter((x) => x.item !== 0)
generateCartItems();
localStorage.setItem("data", JSON.stringify(basket))


}
let update = (id)=>{
  let search = basket.find((x)=>{
   return x.id === id;
  })
 //  console.log(search.item)
  document.getElementById(id).innerHTML = search.item;
  calculation();
  totalAmount();
}



let removeItem = (id)=>{
let selectedItem = id;
console.log(selectedItem);
    // console.log(selectedItem);
  // console.log (basket.filter((x) => x.id));
     basket = basket.filter((x) => x.id !== selectedItem)
     generateCartItems(); 
     totalAmount()
     calculation(); 
     localStorage.setItem("data", JSON.stringify(basket))
}

let clearCart = ()=>{
   basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket))
}


let totalAmount = ()=>{
 if(basket.length !== 0){
 let amount = basket.map((x) => {      
  let{id, item} = x;
  let search = shopItemsData.find((y) => y.id == id)

  return item * search.price

 }).reduce((x, y) => x+y, 0)

 label.innerHTML = `
 <h2>Total Bill $ ${amount} </h2>
 <button class="checkout" onclick = "checkOut()" >Checkout</button>
 <button onclick="clearCart()" class="removeAll">Clear Cart</button>
 `

 }else return;
}

totalAmount();

let checkOut = ()=>{
  if(basket.length > 0){
    basket = [];
    generateCartItems();
    calculation();
   alert("Thanks for your purchase! Your deliery on the way...")
    localStorage.setItem("data", JSON.stringify(basket))
  }else return
}