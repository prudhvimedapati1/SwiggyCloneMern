import React, { useEffect, useRef, useState } from 'react'
import './card.css'
import { useDispatchCart, useCart } from '../ContextReducer';

const Card = (props) => {

    const priceRef = useRef()
    let dispatch = useDispatchCart();
    let data = useCart()
    let options = props.options;
    let priceOptions = Object.keys(options)

    
    const [number,setNumber] = useState(1);
    const [size, setSize]= useState("");
    
    const handleAddToCart = async()=>{
        await dispatch({type:"ADD",id:props.foodItems._id,name:props.foodItems.name,price:finalPrice, number:number,size:size, img:props.foodItems.img})
        console.log(data);
    }
    
    let finalPrice = number*parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value);
    },[])
  return (
    <>
        <div className="card__container">
            <img src={props.foodItems.img} alt="" className="card__img" />
            <h3>{props.foodItems.name}</h3>
            <p>{props.foodItems.description}</p>
            <div className="card__select-container">
                <select className='card__select-num' onChange={(e)=>{setNumber(e.target.value)}}>
                    <option id='1' value="1">1</option>
                    <option id='2' value="2">2</option>
                    <option id='3' value="3">3</option>
                    <option id='4' value="4">4</option>
                    <option id='5' value="5">5</option>
                </select>
                <select className='card__select-size' ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
                    {priceOptions.map((data)=>{
                        return <option key={data} value={data} >{data}</option>
                    })}
                </select>
                <h3>₹{finalPrice}/-</h3>
            </div>
            <button className='card__submit' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    </>
  )
}

export default Card