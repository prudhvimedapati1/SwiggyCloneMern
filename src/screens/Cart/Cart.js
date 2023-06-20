import React from 'react'
import './cart.css'
import { useCart,useDispatchCart } from '../../components/ContextReducer'
import { BASE_URL } from '../baseurl';

const Cart = (props) => {
    let data = useCart();
    let dispatch = useDispatchCart();
    if(data.length===0){
        return (
            <div className='empty__cart'><h1>The Cart is Empty</h1></div>
        )
    }

    const handleCheckout = async()=>{
        let userEmail = localStorage.getItem("userEmail")
        let response = await fetch(`${BASE_URL}/api/orderData`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                order_data:data,
                email: userEmail,
                order_date:new Date().toDateString()
            })
        });
        if(response.status===200){
            dispatch({type:"DROP"})
            props.closeCart();
        }

    }

    let totalPrice = data.reduce((total,food)=>total+food.price,0);

  return (
    <div className='cart__container'>
        <table className="cart__table">
            <thead>
            <tr>
                <th className="table__header" scope='col'>#</th>
                <th className="table__header" scope='col'>Name</th>
                <th className="table__header" scope='col'>Quantity</th>
                <th className="table__header" scope='col'>Size</th>
                <th className="table__header" scope='col'>Price</th>
                <th className="table__header" scope='col'></th>
            </tr>
            </thead>
            <tbody>
                {data.map((food,index)=>(
                    <tr>
                    <th scope='row'>{index+1}</th>
                    <td>{food.name}</td>
                    <td>{food.number}</td>
                    <td>{food.size}</td>
                    <td>{food.price}</td>
                    <td><button className='cart__delete' onClick={()=>{dispatch({type:"REMOVE", index:index,price:food.price,number:food.number})}}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='cart__total-price'><h1>Total Price: {totalPrice}/-</h1></div>
        <div className='cart__checkout-div'><button className='cart__checkout' onClick={handleCheckout}><h2>Check Out</h2></button></div>
        
    </div>
  )
}

export default Cart