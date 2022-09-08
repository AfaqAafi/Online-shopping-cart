let shop = document.getElementById('shop');

 let basket = JSON.parse(localStorage.getItem("data")) || []; 

let generateShop = ()=>{
  return (shop.innerHTML = shopItemsData.map((x) => {
    let{id, name, price, desc, img} = x
    let search = basket.find((x) => x.id === id) || []
    // console.log(search);
  return `<div id = "product-id-${id}" class="item">
  <img  src="${img}" alt="">
  <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
          <h2>${price}</h2>
          <div class="buttons">
              <i class="bi bi-dash-lg" onclick = "decrement(${id})"></i>
              <div class="quantity" id = "${id}">
                  ${search.item === undefined? 0 : search.item } 
              </div>
              <i class="bi bi-plus-lg" onclick = "increment(${id})"></i>
          </div>
      </div>
  </div>
</div>` ;   
  }).join(" "));
}
generateShop();


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

// console.log(basket); 
update(selectedItem)
basket = basket.filter((x) => x.item !== 0)
localStorage.setItem("data", JSON.stringify(basket))
}



// update +++++++++++++++++++++++++++++++++++++++++++++++
let update = (id)=>{
   let search = basket.find((x)=>{
    return x.id === id;
   })
  //  console.log(search.item)
   document.getElementById(id).innerHTML = search.item;
   calculation();
}

let calculation = ()=>{
  let cartIcon = document.getElementById('cartAmount');
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x + y, 0); 
  
}

calculation();

