import React from "react";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";


const Card = () => {
  return (
    <>

      <div className="max-w-[1100px] mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1st card */}
          <div className=" shadow-xl rounded-xl text-center flex flex-col justify-center  py-6">
            <img src={card1} alt="" className="rounded-xl mb-6" />
            <div className=" text-left">
              <h1 className="font-bold text-2xl mb-6">Long Established</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                commodo gravida neq ue, Fe id euismod tellus pellentesque eu
              </p>
              <p className="mt-4">8 Feb 2022 </p>
              <p className="text-right">Read More</p>
            </div>
          </div>
          {/* 2nd card */}
          <div className=" shadow-xl rounded-xl text-center flex flex-col justify-center  py-6">
            <img src={card1} alt="" className="rounded-xl mb-6" />
            <div className=" text-left">
              <h1 className="font-bold text-2xl mb-6">Long Established</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                commodo gravida neq ue, Fe id euismod tellus pellentesque eu
              </p>
              <p className="mt-4">8 Feb 2022 </p>
              <p className="text-right">Read More</p>
            </div>
          </div>
          {/* 3rd card */}
          <div className=" shadow-xl rounded-xl text-center flex flex-col justify-center  py-6">
            <img src={card1} alt="" className="rounded-xl mb-6" />
            <div className=" text-left">
              <h1 className="font-bold text-2xl mb-6">Long Established</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                commodo gravida neq ue, Fe id euismod tellus pellentesque eu
              </p>
              <p className="mt-4">8 Feb 2022 </p>
              <p className="text-right">Read More</p>
            </div>
          </div>
        </div>
      </div>









    </>
  );
};

export default Card;
