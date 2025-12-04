import React, { use, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const { resetPassword } = use(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location]);

    // Handle Password Reset
    const handlePasswordReset = (event) => {
        event.preventDefault();

        const email = event.target.email.value;

        resetPassword(email)
            .then(() => {
                toast.success('Reset link sent. Follow the instructions in your email.');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <section className='login py-10 mt-[84px] md:mt-[108px]'>
            <title>Reset Password - ToyTopia</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    <div className='w-full md:w-10/12 lg:w-6/12 px-3'>
                        <div className='p-8 md:p-10 shadow-lg rounded-md bg-white'>
                            <div className='text-center mb-10'>
                                <h3 className='text-4xl font-semibold text-dark-1 mb-4'>Forget password?</h3>
                                <p className='font-medium'>Enter your email to reset your password.</p>
                            </div>
                            <form onSubmit={handlePasswordReset} className='mb-8 md:mb-10'>
                                <div className='mb-5'>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Enter your email' required />
                                </div>
                                <button className='inline-block text-white py-4 font-medium w-full px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-100 cursor-pointer'>Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;