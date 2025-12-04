import React, { useEffect, useState } from 'react';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import { useLoaderData } from 'react-router';
import ToyCard from '../../components/ToyCard/ToyCard';
import { IoCaretDownSharp } from 'react-icons/io5';

const Product = () => {
    const toys = useLoaderData();
    const [allToys, setAllToys] = useState([]);
    const [sort, setSort] = useState('');

    useEffect(() => {
        const sortedToys = [...toys].sort((a, b) => a.price - b.price);
        setAllToys(sortedToys);
    }, [toys]);

    const handleSort = (type) => {
        setSort(type);

        if (type === 'Low-High') {
            const sotredByLowHigh = [...allToys].sort((a, b) => a.price - b.price);
            setAllToys(sotredByLowHigh);
        }

        if (type === 'High-Low') {
            const sotredByLowHigh = [...allToys].sort((a, b) => b.price - a.price);
            setAllToys(sotredByLowHigh);
        }
    }

    return (
        <>
            <title>ToyTopia - Products</title>

            <SectionBanner link='Product' title='Products'></SectionBanner>

            <div className='container py-11 md:py-24 lg:py-20'>
                <div className='flex items-center gap-4 justify-between mb-6'>
                    <h3 className='text-2xl font-semibold text-dark-1'>({allToys.length}) Toys Found</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">{sort ? sort : 'Sort By Price'}  <IoCaretDownSharp /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('Low-High')}>Low-High</a></li>
                            <li><a onClick={() => handleSort('High-Low')}>High-Low</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-wrap -mx-2'>
                    {
                        allToys.map((toy) => {
                            return (
                                <ToyCard
                                    key={toy.toyId}
                                    toy={toy}
                                ></ToyCard>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Product;