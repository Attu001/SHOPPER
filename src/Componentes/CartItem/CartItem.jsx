import React, { useContext } from 'react'

import remove_icon from '../Assests/cart_cross_icon.png'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {

        const {getTotalCartAmount, all_product,cartitem,removeFromCart,addToCart}=useContext(ShopContext);

  return (
    <div className='cartitem'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantyties</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
            {
            all_product.map((e)=>{
                console.log(e);
                if(cartitem[e.id]>0)
                    
                {   
                    return  <div>
                    <div className="cartitem-format cartitem-format-main">
                        <img src={e.image} className='carticon-product-icon' alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartitem[e.id]}</button>
                        <p>${e.new_price * cartitem[e.id] }</p>
                        <img src={remove_icon} className='carticon-remove-icon' onClick={()=>removeFromCart(e.id )} alt="" />
                    </div>
                    <hr />
                </div>
                                                
                }

                    return null;
                

                
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>cart total</h1>
                    <div>
                        <div className="cartitem-total-item">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitem-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed To Check Out</button>
                </div>
                <div className="cartitem-promocode">
                    <p>If you have promocode enter here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Promocode' />
                        <button>Submmit</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CartItem