import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
        <Wrapper>
            {/* left coolumn start */}
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">left</div>
            {/* left coolumn end */}

            {/* right column start */}
            <div className='flex-[1] py-3'>right</div>
            {/* right column end */}
        </Wrapper>
    </div>
  )
}

export default ProductDetails