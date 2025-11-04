import React from 'react';
import { Link } from 'react-router';

const BlogCard = ({ blog }) => {
    const { title, pictureURL, createDate, author } = blog;

    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='group'>
                <div className='overflow-hidden rounded-md mb-5'>
                    <img className='group-hover:scale-110 duration-500 w-full' src={pictureURL} alt='Blog Image' />
                </div>
                <ul className='blog-meta mb-3'>
                    <li className='inline-block'>By: <span className='text-primary-theme'>{author}</span></li>
                    <li className='inline-block'>{createDate}</li>
                </ul>
                <h2 className='text-2xl font-semibold text-dark-1 mb-6'>{title}</h2>
                <Link to='/' className='inline-block text-white py-3 px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300'>Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;