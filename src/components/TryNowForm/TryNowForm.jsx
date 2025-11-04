import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TryNowForm = () => {
    const [nameError, setNameError] = useState('');

    const handleForm = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;

        if (name.length < 4) {
            setNameError('Name must be at least 4 characters long.')
            return;
        }
        else {
            setNameError('');
        }

        if (email && name) {
            toast('Submitted successfully! 🎉');
            event.target.reset();
        }
    }

    return (
        <div className='pb-14'>
            <div className='flex flex-wrap -mx-3'>
                <div className='w-full lg:w-5/12 px-3 mb-6'>
                    <h1 className='text-3xl lg:text-4xl font-semibold text-dark-1'>Try Now This Toy</h1>
                </div>
                <div className='w-full lg:w-7/12 px-3'>
                    <div className='p-8 md:p-12 bg-[#F9F9F9] rounded-md'>
                        <form onSubmit={handleForm}>
                            <div className='mb-4'>
                                <input type="text" name='name' className={`w-full border ${nameError ? 'border-red-400 text-red-500' : 'border-dark-3 text-dark-2'} rounded-md py-5 px-6 text-base focus:outline-0 focus:border-primary-theme`} placeholder='Enter your name' required />
                                <span className={`${nameError ? 'inline-block' : 'hidden'} text-red-500 text-sm mt-1`}>{nameError}</span>
                            </div>
                            <div className='mb-4'>
                                <input type="email" name='email' className={`w-full border border-dark-3 text-dark-2 rounded-md py-5 px-6 text-base focus:outline-0 focus:border-primary-theme`} placeholder='Enter your email' required />
                                {/* <span className={`${error ? 'inline-block' : 'hidden'} text-red-500 text-sm mt-1`}>{error}</span> */}
                            </div>
                            <button className='inline-block text-white py-3 px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-300 cursor-pointer'>Try Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryNowForm;