"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

const PostApi = ({ onSubmit }) => {

    const {
        register,
        handleSubmit,
        
        formState: { errors } 
      } = useForm();
    
     

    return (
        <div>
           
           <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
            <div className="form-control">
        <label className='text-lg font-semibold ps-2'>Popular Food Name</label>
        <input type="text" name="name" placeholder='Food Name' className='p-3 rounded' {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>

      <div className="form-control">
        <label className='text-lg font-semibold ps-2'>Price</label>
        <input type="number" name="price" placeholder='price' className='p-3 rounded' {...register("price", { required: true })} />
        {errors.price && <span>This field is required</span>}
      </div>

      <div className="form-control">
        <label className='text-lg font-semibold ps-2'>Image URL</label>
        <input type="url" name="imageUrl" placeholder='Image Url' className='p-3 rounded' {...register("imageUrl", { required: true })} />
        {errors.image && <span>This field is required</span>}
      </div>

      <div className="form-control">
        <label className='text-lg font-semibold ps-2'>IsPopular</label>
        <input type="text" name="isPopular" className='p-3 rounded'  placeholder='true' {...register("isPopular", { defaultValue: true })} />
        {errors.isPopular && <span>This field is required</span>}
      </div>

      <div className="form-control flex">

        <label className='text-lg font-semibold ps-2'>IsRecommended</label>
        <input
          type="checkbox"
          name="isRecommended"
          className='w-9 h-5'
          {...register("isRecommended", { required: true })}
        />
        {errors.isRecommended && <span className='text-red-500'>This field is required</span>}
      </div>

                 </div>
    
      <div className="form-control">
        <label></label>
        <button type="submit" className='btn btn-outline w-1/2 mx-auto mt-4'>Add Item</button>
      </div>
      
    </form>
        
        </div>
    );
};

export default PostApi;