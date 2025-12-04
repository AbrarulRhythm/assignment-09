import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';

const AddProduct = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // Handle Add Product
    const handleAddProduct = (data) => {

        const productImage = data.pictureURL[0]

        // Store the image and get the photo url
        const formData = new FormData();
        formData.append('image', productImage);
        const imageAPI_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(imageAPI_URL, formData)
            .then(res => {
                const photoURL = res.data.data.url;
                data.pictureURL = photoURL;

                // Create Product in database
                axiosSecure.post('/toys', data)
                    .then(res => {
                        if (res.data.insertedId) {
                            reset(); // form reset

                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your product was added successfully!",
                                showConfirmButton: false,
                                timer: 2500
                            });
                        }
                    })
            })
    }

    return (
        <section className='py-10 mt-[84px] md:mt-[108px]'>
            <title>Add Product - Toy Topia</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    <div className='w-full md:w-11/12 lg:6/12 px-3'>
                        <div className='bg-white border border-gray-200 p-8 rounded-md'>
                            <h1 className='text-center text-3xl md:text-4xl text-dark-1 font-semibold mb-6 md:mb-8'>Add Product</h1>

                            <form onSubmit={handleSubmit(handleAddProduct)}>
                                <div className='flex flex-wrap -mx-3'>
                                    {/* Product Name */}
                                    <div className='w-full md:w-6/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Product Name</label>
                                        <input {...register('toyName', {
                                            required: 'Product name is required'
                                        })} type="text" className={`${errors.toyName ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Product Name' />
                                        <span className={`${errors.toyName ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.toyName && errors.toyName.message}</span>
                                    </div>
                                    {/* Product Image */}
                                    <div className='w-full md:w-6/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Product Image</label>
                                        <input {...register('pictureURL', {
                                            required: 'Product image is required'
                                        })} type="file" className={`${errors.pictureURL ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Product Image' />
                                        <span className={`${errors.pictureURL ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.pictureURL && errors.pictureURL.message}</span>
                                    </div>
                                    {/* Product price */}
                                    <div className='w-full md:w-6/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Product price</label>
                                        <input {...register('price', {
                                            required: 'Product price is required'
                                        })} type="text" className={`${errors.price ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Product price' />
                                        <span className={`${errors.price ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.price && errors.price.message}</span>
                                    </div>
                                    {/* Product Quantity */}
                                    <div className='w-full md:w-6/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Available Quantity</label>
                                        <input {...register('availableQuantity', {
                                            required: 'Product available quantity is required'
                                        })} type="number" className={`${errors.availableQuantity ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Product price' />
                                        <span className={`${errors.availableQuantity ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.availableQuantity && errors.availableQuantity.message}</span>
                                    </div>
                                    {/* Seller Name */}
                                    <div className='w-full md:w-6/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Seller Name</label>
                                        <input {...register('sellerName', {
                                            required: 'Seller Name is required'
                                        })} defaultValue={user?.displayName} type="text" className={`${errors.sellerName ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Seller Name' readOnly />
                                        <span className={`${errors.sellerName ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.sellerName && errors.sellerName.message}</span>
                                    </div>
                                    {/* Seller Email */}
                                    <div className='w-full md:w-6/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Seller Email</label>
                                        <input {...register('sellerEmail', {
                                            required: 'Seller Email is required'
                                        })} defaultValue={user?.email} type="email" className={`${errors.sellerEmail ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Seller Email' readOnly />
                                        <span className={`${errors.sellerEmail ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.sellerEmail && errors.sellerEmail.message}</span>
                                    </div>
                                    {/* Product Category */}
                                    <div className='w-full md:w-12/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Product Category</label>
                                        <input {...register('subCategory', {
                                            required: 'Seller Name is required'
                                        })} type="text" className={`${errors.subCategory ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Product Category' />
                                        <span className={`${errors.subCategory ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.subCategory && errors.subCategory.message}</span>
                                    </div>
                                    {/* Product Category */}
                                    <div className='w-full md:w-12/12 px-3 mb-4'>
                                        <label className='text-sm mb-2 inline-block'>Description</label>
                                        <textarea {...register('description', {
                                            required: 'Product description is required'
                                        })} rows="4" className={`${errors.description ? 'form-field-error' : 'form-field-border'} form-field`} placeholder='Product Description'></textarea>
                                        <span className={`${errors.subCategory ? 'block mt-1' : 'hidden'} text-sm text-red-500`}>{errors.subCategory && errors.subCategory.message}</span>
                                    </div>
                                </div>
                                <button className='bg-primary-theme text-white px-8 py-3 rounded-md cursor-pointer hover:shadow-btn-inner duration-300 w-full md:w-auto'>Add Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;