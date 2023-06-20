import React from "react";
import "./carousel.css";
import { useState } from "react";
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.jpg";
import IMG4 from "../../assets/img4.jpg";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'

// const Carousel = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIMG,setCurrentIMG] = useState("../../assets/pexels-ella-olsson-1640772.jpg");

  

  // const length = 4;

  // const next = () => {
  //   if (currentIndex < length - 1) {
  //     setCurrentIndex((prevState) => prevState + 1);
  //     if(currentIndex===0){
  //       setCurrentIMG("../../assets/pexels-ella-olsson-1640772.jpg");
  //     }
  //     else if(currentIndex===1){
  //       setCurrentIMG("../../assets/pexels-lumn-604969.jpg");
  //     }
  //     else if(currentIndex===2){
  //       setCurrentIMG("../../assets/pexels-nerfee-mirandilla-3186654.jpg");
  //     }
  //     else if(currentIndex===3){
  //       setCurrentIMG("../../assets/pexels-robin-stickel-70497.jpg");
  //     }
  //   }
  // };

  // const back = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex((prevState) => prevState - 1);
  //     if(currentIndex===0){
  //       setCurrentIMG("../../assets/pexels-ella-olsson-1640772.jpg");
  //     }
  //     else if(currentIndex===1){
  //       setCurrentIMG("../../assets/pexels-lumn-604969.jpg");
  //     }
  //     else if(currentIndex===2){
  //       setCurrentIMG("../../assets/pexels-nerfee-mirandilla-3186654.jpg");
  //     }
  //     else if(currentIndex===3){
  //       setCurrentIMG("../../assets/pexels-robin-stickel-70497.jpg");
  //     }
  //   }
  // };

//   return (
//     <div className="carousel-container">
      
//         {currentIndex > 0 && (
//           <button onClick={back} className="left-arrow">
//             &lt;
//           </button>
//         )}
        
//           <div
//             className="carousel-content"
//             // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//             <h1>Order Now</h1>
//           </div>
        
//         {currentIndex < length - 1 && (
//           <button onClick={next} className="right-arrow">
//             &gt;
//           </button>
//         )}
      
//     </div>
//   );
// };

const Carousel=()=>{
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIMG,setCurrentIMG] = useState(IMG1);

  let imgArr = [IMG1,IMG2,IMG3,IMG4];

  

  const length = 4;

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
      // setCurrentIMG(imgArr[currentIndex]);
      // if(currentIndex===0){
      //   setCurrentIMG(IMG1);
      // }
      // else if(currentIndex===1){
      //   setCurrentIMG(IMG2);
      // }
      // else if(currentIndex===2){
      //   setCurrentIMG(IMG3);
      // }
      // else if(currentIndex===3){
      //   setCurrentIMG(IMG4);
      // }
    }
  };

  const back = () => {
    if (currentIndex > 0) {
       setCurrentIndex((prevState) => prevState - 1);
      //  setCurrentIMG(imgArr[currentIndex]);
      // if(currentIndex===0){
      //   setCurrentIMG(IMG1);
      // }
      // else if(currentIndex===1){
      //   setCurrentIMG(IMG2);
      // }
      // else if(currentIndex===2){
      //   setCurrentIMG(IMG3);
      // }
      // else if(currentIndex===3){
      //   setCurrentIMG(IMG4);
      // }
    }
  };

    return(
      <div className="carousel__container">
        {(currentIndex!==0)?<BsFillArrowLeftCircleFill className="arrow arrow__left" onClick={back}/>:""}
          <img src={imgArr[currentIndex]} alt="" className="carousel__slide"/>
          {/* <img src={IMG2} alt="" className="carousel__slide"/>
          <img src={IMG3} alt="" className="carousel__slide"/>
          <img src={IMG4} alt="" className="carousel__slide"/> */}
        {(currentIndex!==3)?<BsFillArrowRightCircleFill className="arrow arrow__right" onClick={next}/>:""}  
      </div>
    )
}

export default Carousel;
