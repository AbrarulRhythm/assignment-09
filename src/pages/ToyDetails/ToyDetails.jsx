import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ToyDetailsCard from '../../components/ToyDetailsCard/ToyDetailsCard';
import TryNowForm from '../../components/TryNowForm/TryNowForm';

const ToyDetails = () => {
    const toyData = useLoaderData()
    const { id } = useParams(); // Sting Value
    const [toy, setToy] = useState({});

    useEffect(() => {
        const toyDetails = toyData.find(singleToy => singleToy.toyId === parseInt(id));
        setToy(toyDetails);
    }, [toyData, id]);

    return (
        <section className='toy-details pt-[84px] md:pt-[108px]'>
            <div className='container'>
                <div className='py-14'>
                    <ToyDetailsCard toy={toy}></ToyDetailsCard>
                </div>
                <TryNowForm></TryNowForm>
            </div>
        </section>
    );
};

export default ToyDetails;