import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";


import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState();
  const [showCatMenu, setShowCatMenu] = useState();
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("-translate-y-[80px]")
      }else{
        setShow("shadow-sm")
      }
    }
    else{
      setShow("translate-y-0")
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  },[lastScrollY])
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 ${show}`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <Link href="/">
          <p className="logo">Glass</p>
        </Link>
        
        <Menu 
          showCatMenu={showCatMenu} 
          setShowCatMenu={setShowCatMenu} 
        />
{         mobileMenu && <MenuMobile 
          showCatMenu={showCatMenu} 
          setShowCatMenu={setShowCatMenu} 
          setMobileMenu={setMobileMenu}
        />}

        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full justify-center flex items-center hover:bg-blue-300 cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white  text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>

          {/* icon-start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full justify-center flex items-center hover:bg-blue-300 cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white  text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              5
            </div>
          </div>
          {/* icon-end */}

          {/* moobile-icon start */}

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full justify-center flex items-center hover:bg-blue-300 cursor-pointer relative">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* moobile-icon start */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
