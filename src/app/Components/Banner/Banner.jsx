import Image from 'next/image';
import React from 'react';
import BannerImg from "@/assets/Image1.png";
const Banner = () => {
    return (
        <div>
            <div className='lg:grid  lg:grid-cols-2 gap-3 lg:bg-orange-500 lg:rounded-2xl'>
                <div className='text-center lg:my-auto lg:text-white sm:text-black '>
                <h1 className='lg:text-6xl text-3xl font-semibold '>Deliver Food To Your  Door Step| </h1>
                <p className='lg:text-xl text-md pt-4 mb-7 '>Authentic Food|,Quick Service , Fast Delivery </p>
                </div>
                <div >
                <Image
      src={BannerImg}
    //   width={500}
    //   height={500}
      alt="Picture of the author"
      className='bg-orange-500 rounded-2xl mx-auto'
    />
                </div>
            </div>
        </div>
    );
};

export default Banner;