import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
import Carousel from "../../components/carousel/Carousel";
import { BASE_URL } from "../baseurl";

// import { useDispatchCart, useCart } from '../../components/ContextReducer';
// import Search from "../../components/search/Search";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch(`${BASE_URL}/api/foodData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);

    // console.log(response[0],response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <div className='search__container'>
        <div action="" className="search__form">
            <input type="search" placeholder='biryani...' className='search__input' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button className='search__button' type='Search' onClick={()=>setSearch("")}>Clear</button>
        </div>
        
      </div>
      <div className="home__container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="card-name__container">
                  <div key={data._id} className="card__name"><h2>{data.CategoryName}</h2></div>
                  <hr/>
                  <div className="home-card__container">
                  {
                    foodItem!==[]
                    ? foodItem.filter((item)=>(item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search)||item.description.toLowerCase().includes(search)))
                    .map((filterItems)=>{
                        return(
                          <div key={filterItems._id}>
                            <Card foodItems={filterItems}
                            options={filterItems.options[0]}
                            />
                          </div>
                        )
                    }):""
                  }
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
