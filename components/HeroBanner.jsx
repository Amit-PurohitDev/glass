import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack, BiRightArrow } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <div className="w-full relative text-white mx-auto text-[20px] select-none">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        swipeable={true}
        transitionTime={1500}
        renderArrowNext={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg rotate-180" />
          </div>
        )}
      >
        <div className="h-[600px]  w-full">
          <img src="/slide-1.png" className="w-full h-full object-cover"/>
          <div className="px-[15px] md:px-[40px] py-[10] md:py-[25px] rounded-sm font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left--0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            shop now
          </div>
        </div>
        <div className="h-[600px]  w-full">
          <img src="/slide-2.png" className="w-full h-full object-cover"/>
          <div className="px-[15px] md:px-[40px] py-[10] md:py-[25px] rounded-sm font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left--0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            shop now
          </div>
        </div>
        <div className="h-[600px]  w-full">
          <img src="/slide-3.png" className="w-full h-full object-cover"/>
          <div className="px-[15px] md:px-[40px] py-[10] md:py-[25px] rounded-sm font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left--0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            shop now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
