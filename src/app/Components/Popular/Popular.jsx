"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PostApi from "../PostApi/PostApi";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useForm } from "react-hook-form";

const Popular = () => {
  const [items, setItems] = useState([]);
  const { reset } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.Items))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleAddItem = (data) => {
    const newItem = {
      Id: Date.now(),
      Name: data.name,
      Price: parseFloat(data.price),
      ImageUrl: data.imageUrl,
      IsPopular: data.isPopular || false,
      IsRecommended: data.isRecommended || false,
    };

    setItems((prevItems) => [...prevItems, newItem]);

    reset();
  };

  return (
    <div className="lg:mt-28 mt-12">
      <div className="flex  justify-between mb-5 mx-3">
        <h1 className="text-3xl font-semibold">Popular</h1>
        <div className="sr-only sm:not-sr-only">
          <button
            className="btn text-orange-500"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            AddMore
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <PostApi onSubmit={handleAddItem} />
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-error font-semibold">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

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
            // when window width is >= 640px (mobile devices)
            640: {
              slidesPerView: 4,
            },
            350: {
              slidesPerView: 3,
            },
          }}
        >
          {items?.some((item) => item.IsPopular) &&
            items.map(
              (item) =>
                item.IsPopular && (
                  <SwiperSlide key={item.Id}>
                    <div className="relative h-[100px] md:h-[350px]  w-full">
                      <Image
                        src={item.ImageUrl}
                        alt={`Image for ${item.Name}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-xl "
                      />
                    </div>

                    <h2 className="text-center lg:text-2xl text-xl">
                      {item.Name}
                    </h2>
                  </SwiperSlide>
                )
            )}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
