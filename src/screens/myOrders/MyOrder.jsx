import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './myorders.css'
import { BASE_URL } from "../baseurl";

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch(`${BASE_URL}/api/myOrders`, {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div className='myorder__container'>
            <div>
              <Navbar/>
            </div>

            <div className=''>
                <div className='all__orders'>

                    {orderData !== {} ? Array(orderData).reverse().map(data => {
                        return (
                          <div >
                            {data.orderData ?
                                data.orderData.order_data.slice(0).map((item) => {
                                    return (
                                      <div className='food__items'>
                                        {item.map((arrayData) => {
                                            return (
                                                <div >
                                                    {arrayData.Order_date ? <div className='order__date'>{data = arrayData.Order_date}</div>:
                                                          <div >
                                                            <div className="food__item" >
                                                                <img src={arrayData.img} alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <h5 className="food__title">{arrayData.name}</h5>
                                                                    <div className='food__details' >
                                                                        <span className=''>Quantity: {arrayData.number}</span>
                                                                        <span className=''>Size: {arrayData.size}</span>
                                                                        {/* <span className=''>{data}</span> */}
                                                                        <div className='' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                
                                                            </div>
                                                          </div>
                                                    }

                                                </div>
                                            )
                                        })}
                                      </div>
                                        
                                    )

                                }) : ""
                              }
                                </div>
                        
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}