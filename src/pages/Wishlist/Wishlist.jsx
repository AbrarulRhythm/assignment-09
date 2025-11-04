import React, { useEffect, useState } from 'react';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import { IoClose } from 'react-icons/io5';
import { FaCheck, FaRegHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { getWishList, removeWishList } from '../../utility/addToDB';
import SingleWishList from '../../components/SingleWishList/SingleWishList';
import { toast } from 'react-toastify';

const Wishlist = () => {
    const toys = useLoaderData();
    const [wishlist, setWishList] = useState([]);

    useEffect(() => {
        const getStoredWishList = getWishList();
        const convertedStoredWishList = getStoredWishList.map(id => parseInt(id));
        const myWishList = toys.filter(toy => convertedStoredWishList.includes(toy.toyId));
        setWishList(myWishList);
    }, [toys]);

    // Handle Remove WishLiat
    const handleRemoveWishList = (id, toyName) => {
        removeWishList(id);
        const updatedStoredWishList = wishlist.filter(yourWishList => parseInt(yourWishList.toyId) !== parseInt(id));
        setWishList(updatedStoredWishList);
        toast.success(`⚡ Removed! {${toyName}} is no longer in your wishlist.`);
    }

    return (
        <>
            <title>ToyTopia - WishList</title>

            <SectionBanner link='wishlist' title='Wishlist'></SectionBanner>

            <section className='py-20'>
                <div className='container'>
                    <h1 className='text-5xl text-dark-1 font-semibold text-center mb-12'>Wishlist</h1>

                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full px-3'>
                            <div className="overflow-x-auto">
                                <table className="table text-base">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product</th>
                                            <th>Unit price</th>
                                            <th>Stock status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-base font-medium'>
                                        {
                                            wishlist.length === 0 && (
                                                <tr>
                                                    <td colSpan="5">
                                                        <div className='text-center flex flex-col items-center justify-center py-6'>
                                                            <FaRegHeart className='text-2xl mb-4' />
                                                            <p className='text-sm leading-1'>There are no favorites yet. <br /> Add your favorites to wishlist and they will show here.</p>
                                                            <Link to='/' className='border border-primary-theme text-sm py-2.5 px-6 text-primary-theme inline-block mt-4 rounded-sm hover:bg-primary-theme hover:text-white duration-300'>Continue Shop</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        {
                                            wishlist.map(singleWishList => {
                                                return (
                                                    <SingleWishList
                                                        handleRemoveWishList={handleRemoveWishList}
                                                        key={singleWishList.toyId}
                                                        singleWishList={singleWishList}
                                                    ></SingleWishList>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wishlist;