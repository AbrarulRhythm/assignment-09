import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const SingleWishList = ({ singleWishList, handleRemoveWishList }) => {
    const { toyId, toyName, availableQuantity, price, pictureURL } = singleWishList;

    const removeWishList = () => {
        handleRemoveWishList(toyId, toyName);
    }

    return (
        <tr>
            <td>
                <button onClick={removeWishList} className='text-2xl hover:text-primary-theme duration-200 cursor-pointer'>
                    <IoClose />
                </button>
            </td>
            <td>
                <div>
                    <img className='w-[120px]' src={pictureURL} alt='Toy Picture' />
                </div>
            </td>
            <td>${price}</td>
            <td>
                <div className='font-medium'>
                    {availableQuantity > 0 ? <div className='text-green-600 flex items-center gap-2'><FaCheck /> In Stock</div> : <div className='text-red-500 flex items-center gap-2'><IoMdClose className='text-xl' /> Not Available</div>}
                </div>
            </td>
            <td className='text-center'>
                <button className='text-white bg-primary-theme hover:bg-primary-theme-dark duration-300 py-3 px-6 rounded-sm cursor-pointer w-max'>Add to Cart</button>
            </td>
        </tr>
    );
};

export default SingleWishList;