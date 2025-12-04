import React, { use } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ToyCard from '../ToyCard/ToyCard';
import { Link } from 'react-router';

const fetchPopularToys = async () => {
    const res = await fetch('/toys.json');
    return res.json();
}
const popularToysPromise = fetchPopularToys();

const PopularToys = () => {
    const toys = use(popularToysPromise);

    return (
        <section className='bg-[#F9F9F9] pt-16 pb-10 lg:pt-20 lg:pb-14'>
            <div className='container'>
                <SectionTitle classes='text-center' subTitle='Popular Toys' title='Our Most Loved Toys'></SectionTitle>

                <div>
                    <div className='flex flex-wrap -mx-2'>
                        {
                            toys.map((toy) => {
                                return (
                                    <ToyCard
                                        key={toy.toyId}
                                        toy={toy}
                                    ></ToyCard>
                                )
                            })
                        }
                    </div>
                    <div className='text-center mt-6'>
                        <Link to='/product' className='inline-block text-white py-3 px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300'>View All Toys</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularToys;