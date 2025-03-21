import React, { useState } from 'react'
import CartStore from './CartStore'

const CartState = (props) => {

  const [cart, setcart] = useState([])
  function AddtoCart(ans){
     let find = false;
     for(let i =0; i< cart.length ;i++){
        if(cart[i].id === ans.id){
            find = true
        }
     }
      if (find) {
        alert("Item already  Added");
      }else {
        ans.quantity = 1
        setcart([...cart, ans]);
      }
   }

  return (
    <CartStore.Provider value={{ AddtoCart,cart,setcart}}>
        {props.children}
    </CartStore.Provider>
  )
}

export default CartState