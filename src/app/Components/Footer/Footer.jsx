import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImGoogle3 } from "react-icons/im";
import { AiFillTwitterCircle , AiOutlineInstagram} from "react-icons/ai";
import Image from 'next/image';
import FooterImg from "@/assets/Image2.png"
const Footer = () => {
    return (
        <div className='bg-orange-500 mt-20 '>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
                <div className='lg:col-span-2 lg:ms-44 mb-12'>
                <div className=" lg:py-20 py-10 ">
    <div className="max-w-md mx-auto lg:mx-1  rounded-lg overflow-hidden ">      
            <div className="w-full p-3 flex  justify-center ">
                <div className="relative w-full lg:w-[500px]">
                     <input type="text" className="bg-white h-14 w-full px-4 pr-20 rounded-md focus:outline-none hover:cursor-pointer" placeholder='Enter Your Email' name=""/>
                     <button className="h-10  lg:bg-orange-500 absolute top-2 text-lg right-2 px-3 lg:text-white text-orange-500  rounded-xl "><span className="flex items-center gap-1">Subscribe <FaLongArrowAltRight /></span></button> </div>
            </div>
    </div>
</div>


<div className='text-center'>
<div className='flex lg:flex-row flex-col-reverse lg:justify-between  '>
    <div className='lg:text-left text-center'>
        <h1 className='text-3xl text-black font-extrabold '>pti<span className='text-orange-700'>.</span></h1>
        <p className="text-lg">Copyright©Tripp.All Right Reserved</p>
    </div>
<div className="flex lg:gap-2 gap-3 text-4xl text-white lg:mt-8  mx-auto mb-4 ">
    <p><ImGoogle3 /></p>
    <p><AiFillTwitterCircle /></p>
    <p><AiOutlineInstagram /></p>
</div>
</div>
</div>

                </div>

                <div className='lg:col-span-1 hidden sm:block' >
                    
                    <Image
      src={FooterImg}
      width={500}
      height={250}
      style={{height:"380px"}}
      alt="Picture of the author"
      className=' '
    />
                  
          
                </div>
            </div>
        </div>
    );
};

export default Footer;