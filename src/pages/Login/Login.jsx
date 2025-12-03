import React, { use, useRef, useState } from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Login = () => {
    const { signInUser, googleSignIn } = use(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    // Handle Sign In
    const handleSignIn = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInUser(email, password)
            .then((result) => {
                event.target.reset(); // form reste
                const user = result.user;
                toast.success(`Sign In successful. Welcome back, ${user.displayName}!`)
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    // Google Sign Up
    const handleGoogleSignUp = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;

                // Create user in the database
                const userInfo = {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }

                axiosSecure.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success(`Sign In successful. Welcome back, ${user.displayName}!`)
                            navigate(location?.state || '/');
                        }
                        else {
                            toast(res.data.message);
                            navigate(location?.state || '/');
                        }
                    });
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    // Handle Forget Password
    const handleForgetPassword = () => {
        const email = emailRef.current.value
        navigate('/forgot-password', { state: { email } })
    }

    return (
        <section className='login py-10 mt-[84px] md:-[108px]'>
            <title>ToyTopia - log in or sign up</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    <div className='w-full md:w-10/12 lg:w-6/12 px-3'>
                        <div className='p-8 md:p-10 shadow-lg rounded-md bg-white'>
                            <div className='text-center mb-10'>
                                <h3 className='text-4xl font-semibold text-dark-1 mb-4'>Sign In</h3>
                                <p className='font-medium'>Hi! Welcome back, you've been missed</p>
                            </div>
                            <form onSubmit={handleSignIn} className='mb-8 md:mb-10'>
                                <div className='mb-5'>
                                    <input ref={emailRef} type="email" name='email' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Enter your email' required />
                                </div>
                                <div className='mb-1 relative'>
                                    <input type={showPassword ? 'text' : 'password'} name='password' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Password' required />
                                    <span onClick={() => setShowPassword(!showPassword)} className='absolute right-5 top-[50%] -translate-y-[50%] text-xl cursor-pointer text-dark-2 hover:text-dark-1 duration-150'>
                                        {showPassword ? <FaEye /> : <IoEyeOff />}
                                    </span>
                                </div>
                                <div className='mb-5 text-right'>
                                    <button onClick={handleForgetPassword} className='text-sm inline-block mt-1 text-primary-theme underline hover:text-primary-theme/80 underline-offset-2 cursor-pointer'>Forgot Password?</button>
                                </div>
                                <button className='inline-block text-white py-4 font-medium w-full px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-100 cursor-pointer'>Sign In</button>
                            </form>
                            <div className='sign-in-with text-center mb-8 md:mb-10'>Or sign in with</div>
                            <div className='flex justify-center items-center gap-3 mb-8'>
                                <div
                                    onClick={handleGoogleSignUp}
                                    className='w-16 h-16 border border-dark-3 hover:border-primary-theme duration-300 rounded-full flex justify-center items-center text-3xl cursor-pointer'>
                                    <FcGoogle />
                                </div>
                                {/* <div className='w-16 h-16 border border-dark-3 hover:border-primary-theme duration-300 rounded-full flex justify-center items-center text-3xl cursor-pointer'>
                                    <FaGithub />
                                </div> */}
                            </div>
                            <div className='text-center'>
                                <p>Don't have an account? <Link to='/sign-up' state={location.state} className='text-primary-theme underline hover:text-primary-theme/80 duration-100 underline-offset-2'>Sign up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;