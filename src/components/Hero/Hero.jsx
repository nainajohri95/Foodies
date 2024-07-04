import React, { useState } from "react";
import bgImg from "../../assets/vector3.png";
import Food1 from "../../assets/biryani2.png";
import Food4 from "../../assets/food4.png";
import Food5 from "../../assets/food5.png";

const ImageList = [
  {
    id: 1,
    img: Food4,
  },
  {
    id: 2,
    img: Food5,
  },
  {
    id: 3,
    img: Food1,
  },
];
const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(Food1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[500px] 
        sm:min-h-[600px]
         bg-gray-100
          dark:bg-gray-950
           dark:text-white
           durtaion-200
           flex justify-center
           items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div
            className="grid grid-cols-1
            sm:grid-cols-2"
          >
            {/* text content section */}
            <div
              className="flex flex-col 
              justify-center gap-4 
              pt-12 sm:pt-0
              text-center 
              sm:text-left 
              order-2 
              sm:order-1"
            >
              <h1
                className="text-5xl
              sm:text-6xl lg:text-7xl 
              font-bold"
              >
                Welcome to the Foodies
              </h1>
              <p className="text-sm">
                Discover flavors that tell a story. <br /> <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores fuga aliquid cumque sint dolore consequuntur nam
                dolorum autem!
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-2 py-2 rounded-full hover:scale-150 duration-150">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex *:justify-center items-center
            relative"
            >
              {/* main image section */}
              <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
                <img
                  src={imageId}
                  alt="biriyani image"
                  className="w-[300px] sm:w-[450px] mx-auto spin"
                  //   spin speed is definated inside Index.css
                />
              </div>
              {/* image list section */}
              <div
                className="flex lg:flex-col lg:top-1/2
                lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:bottom-auto lg:-right-10 bg-white/30 rounded-full"
              >
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-150 duration-200"
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Food4 : item.id === 2 ? Food5 : Food1
                      );
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
