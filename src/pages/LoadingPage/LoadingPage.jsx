import React from 'react';

const LoadingPage = () => {
    return (
        <div className='fixed w-full h-full z-50 bg-white top-0 left-0 right-0 bottom-0'>
            <div className='loader absolute top-[50%] left-[50%] -translate-[50%]'></div>
        </div>
    );
};

export default LoadingPage;