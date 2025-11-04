import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import blogImageOne from '../../assets/blog-01.png';
import blogImageTwo from '../../assets/blog-02.png';
import blogImageThree from '../../assets/blog-03.png';
import BlogCard from '../BlogCard/BlogCard';

const blogData = [
    {
        id: 1,
        title: "Baby Planet's toys makes learning so easy",
        pictureURL: blogImageOne,
        createDate: '25 May, 2121',
        author: 'June Cha'
    },
    {
        id: 2,
        title: "Mother revolves around her children",
        pictureURL: blogImageTwo,
        createDate: 'July 24, 2022',
        author: 'Liam James'
    },
    {
        id: 3,
        title: "Learn while you grow toys Baby Planet",
        pictureURL: blogImageThree,
        createDate: 'January 28, 2022',
        author: 'Aiden Blake'
    }
]

const LatestBlog = () => {
    return (
        <section className='pt-[60px] lg:pt-20 pb-9 lg:pb-14'>
            <div className='container'>
                <SectionTitle classes='text-center' subTitle='Latest Blog' title='The Latest Scoop'></SectionTitle>
                <div className='flex flex-wrap -mx-3'>
                    {
                        blogData.map(blog => {
                            return (
                                <BlogCard
                                    key={blog.id}
                                    blog={blog}
                                ></BlogCard>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;