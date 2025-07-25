import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";
import img4 from "../../assets/images/image4.jpg";
import img5 from "../../assets/images/image5.jpg";
import img6 from "../../assets/images/image6.jpg";
import img7 from "../../assets/images/image7.jpg";
import img8 from "../../assets/images/image8.jpg";
import img9 from "../../assets/images/image9.jpg";
import img10 from "../../assets/images/image10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div>
      <div className=" mx-auto max-w-7xl mb-10 ">
        <div className="w-[93.5%] h-40 sm:h-[70vh] m-auto rounded-lg relative  ">
          <img
            className="rounded-2xl w-full h-full object-cover "
            src={images[currentIndex]}
          />

          <div className="hidden sm:flex items-center justify-between px-6 absolute bottom-2 w-full">
            <h1 className="text-white text-xl font-bold italic leading-relaxed tracking-wide px-4 py-6">
              “Playing football is very simple, but playing simple football is
              the hardest thing there is.”
              <br />
              <span className="block mt-4 text-right text-sm font-medium text-white">
                – Johan Cruyff
              </span>
            </h1>

            {/* <div className="hidden sm:flex gap-2 text-white ">
              <button className="cursor-pointer " onClick={handlePrev}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
              <button className="cursor-pointer " onClick={handleNext}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
