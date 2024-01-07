"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


const Recommended = () => {
    const [recmnds  ,setRecmnds] =useState([])

    useEffect(()=>{
        fetch("http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10")
        .then(res => res.json())
        .then(data => setRecmnds(data.Items))
        .catch((error) => console.error('Error fetching data:', error));
    } ,[])

  

    return (
        <div className='lg:mt-28 mt-12 '>
           
                <h1 className='text-3xl font-semibold mb-5 mx-3'>Recommended</h1>  
          <div className="swiper-container ">
          <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 1024px (large devices)
          1024: {
            slidesPerView: 5,
          },
          // when window width is >= 640px (tab devices)
          640: {
            slidesPerView: 4,
          },
          350: {
            slidesPerView: 3,
          },
        }}
      
    >
       {recmnds?.some((item) => item.IsRecommended) && (
  recmnds.map((item) => (
    item.IsRecommended && (
      <SwiperSlide key={item.Id}>
        <div className="relative h-[100px] md:h-[350px]  w-full ">
        <Image 
        src={item.ImageUrl}
         alt={`Image for ${item.Name}`}
         layout="fill"
           objectFit="cover"
           objectPosition="center"
    className='rounded-xl '
          />
        </div>
         
        <h2 className='text-center lg:text-2xl text-xl'>{item.Name}</h2>
      </SwiperSlide>
    )
  ))
)}
      
       </Swiper>
          </div>
      </div>
    );
};

export default Recommended;