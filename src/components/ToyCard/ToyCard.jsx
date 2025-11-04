import React, { use, useEffect, useState } from 'react';

import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { addToWishList, getWishList, removeWishList } from '../../utility/addToDB';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const ToyCard = ({ toy }) => {
    const { user } = use(AuthContext);
    const [wishlist, setWishList] = useState(false);
    const { toyId, toyName, price, rating, availableQuantity, totalSold, pictureURL } = toy;
    const navigate = useNavigate()

    useEffect(() => {
        const storedWishList = getWishList();
        const convertedStoredWishList = storedWishList.map(id => parseInt(id));

        if (convertedStoredWishList.includes(toyId)) {
            if (!user) {
                setWishList(false);
                return;
            }
            setWishList(true);
        }
    }, [user, toyId]);

    // Handle Add WishList
    const handleAddWishList = () => {
        if (!user) {
            navigate('/sign-in');
            return;
        }

        addToWishList(toyId);
        setWishList(true);
        toast.success(`💖 You’ve added {${toyName}} to your wishlist!`);
    }

    // Handle Remove WishList
    const handleRemoveWishList = () => {
        if (!user) {
            navigate('/sign-in');
            return;
        }

        removeWishList(toyId);
        setWishList(false);
        toast.success(`⚡ Removed! {${toyName}} is no longer in your wishlist.`);
    }

    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='group hover:-translate-y-2 duration-300'>
                <div className='overflow-hidden rounded-t-md relative'>
                    <img className='rounded-t-md w-full group-hover:scale-110 duration-300' src={pictureURL} alt='toy image' />
                    <div className="tooltip tooltip-left absolute top-5 right-5" data-tip={wishlist ? 'Remove to Wishlist' : 'Add to Wishlist'}>
                        <button onClick={() => (wishlist ? handleRemoveWishList() : handleAddWishList())} className='text-xl cursor-pointer text-dark-2 hover:text-primary-theme duration-150'>
                            {wishlist ? <FaHeart className='text-primary-theme' /> : <FaRegHeart />}
                        </button>
                    </div>
                </div>
                <div className='p-6 bg-white rounded-b-md'>
                    <h3 className='text-xl font-semibold text-dark-1 mb-2'>{toyName}</h3>
                    <div className='flex items-center gap-2 mb-2 font-medium'>
                        <div className='flex gap-1 text-[#FFC300]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        {rating}
                    </div>
                    <div className='availableQuantity text-base font-medium flex items-center relative mb-3'>
                        <div>
                            In Stock: {availableQuantity}
                        </div>
                        <div>
                            {totalSold} sold
                        </div>
                    </div>
                    <h4 className='text-xl font-semibold text-primary-theme mb-4'>${price}</h4>
                    <Link to={`/product/${toyId}`} className='inline-block text-white py-3 px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300'>View More</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;