import React, { use, useState } from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
    const { setUser, createUser, updateUser, googleSignIn } = use(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Handle Register
    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const userphotoURL = form.photoURL.files[0];;
        const password = form.password.value;
        const terms = form.terms.checked;

        const minLength = password.length >= 6;
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecial = /[@$!%*?&]/.test(password);
        const validChars = /^[A-Za-z\d@$!%*?&]*$/.test(password);

        // Password Validation
        if (!minLength) {
            toast.error('Password must be at least 6 characters long.');
            setPasswordError('Password must be at least 6 characters long.');
            return;
        }
        else if (!hasLowercase) {
            toast.error('Password must contain at least one lowercase letter.');
            setPasswordError('Password must contain at least one lowercase letter.');
            return;
        }
        else if (!hasUppercase) {
            toast.error('Password must contain at least one uppercase letter.');
            setPasswordError('Password must contain at least one uppercase letter.');
            return;
        }
        else if (!hasDigit) {
            toast.error('Password must contain at least one number.');
            setPasswordError('Password must contain at least one number.');
            return;
        }
        else if (!hasSpecial) {
            toast.error('Password must contain at least one special character (@$!%*?&).');
            setPasswordError('Password must contain at least one special character (@$!%*?&).');
            return;
        }
        else if (!validChars) {
            toast.error('Password contains invalid characters. Use only letters, numbers, or @$!%*?&.');
            setPasswordError('Password contains invalid characters. Use only letters, numbers, or @$!%*?&.');
            return;
        }
        else {
            setPasswordError('');
        }

        // Terms & Condition validation
        if (!terms) {
            toast.error('Please accept our terms & condition.');
            return;
        }

        // Create a New User
        createUser(email, password)
            .then((result) => {
                const user = result.user;

                // Store the image and get the photo url
                const formData = new FormData();
                formData.append('image', userphotoURL);
                const imageAPI_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                axios.post(imageAPI_URL, formData)
                    .then(res => {
                        const photoURL = res.data.data.url;

                        // Create user in the database
                        const userInfo = {
                            email: email,
                            displayName: name,
                            photoURL: photoURL
                        }

                        axiosSecure.post('/users', userInfo)
                            .then(() => {
                                // User created — no UI message needed
                                // silently succeed  
                            })

                        // Update user profile to firebase
                        updateUser({ displayName: name, photoURL: photoURL })
                            .then(() => {
                                event.target.reset(); // form reste
                                setUser({ ...user, displayName: name, photoURL: photoURL });
                                toast.success('Your account has been successfully created. 🎉');
                                navigate('/');
                            })
                            .catch((error) => {
                                const errorMessage = error.message;
                                toast.error(errorMessage);
                                setUser(user);
                            })

                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
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
                            toast.success(`Welcome aboard, ${user.displayName}! 🎉 You've successfully signed up`);
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
            });
    }

    return (
        <section className='login py-10 mt-[84px] md:-[108px]'>
            <title>Sign up for ToyTopia</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    <div className='w-full md:w-10/12 lg:w-6/12 px-3'>
                        <div className='p-8 md:p-10 shadow-lg rounded-md bg-white'>
                            <div className='text-center mb-10'>
                                <h3 className='text-4xl font-semibold text-dark-1 mb-4'>Create Account</h3>
                                <p className='font-medium'>Fill your information below or register with your social account.</p>
                            </div>
                            <form onSubmit={handleRegister} className='mb-8 md:mb-10'>
                                {/* Name */}
                                <div className='mb-5'>
                                    <input type="text" name='name' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Enter your name' required />
                                </div>
                                {/* Email */}
                                <div className='mb-5'>
                                    <input type="email" name='email' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Enter your email' required />
                                </div>
                                {/* Photo */}
                                <div className='mb-5'>
                                    <input type="file" name='photoURL' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Enter your photo URL' required />
                                </div>
                                <div className='mb-5'>
                                    <div className='relative'>
                                        <input type={showPassword ? 'text' : 'password'} name='password' className={`w-full border ${passwordError ? 'border-red-500 text-red-500' : 'border-dark-3 text-dark-2'} rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme`} placeholder='Password' required />
                                        <span onClick={() => setShowPassword(!showPassword)} className='absolute right-5 top-[50%] -translate-y-[50%] text-xl cursor-pointer text-dark-2 hover:text-dark-1 duration-150'>
                                            {showPassword ? <FaEye /> : <IoEyeOff />}
                                        </span>
                                    </div>
                                    <span className={`${passwordError ? 'block' : 'hidden'} text-sm mt-1 text-red-500`}>{passwordError}</span>
                                </div>
                                <div className='mb-6'>
                                    <input type="checkbox" name='terms' className="checkbox mr-2" /> Agree with <Link to='/' className='text-primary-theme underline hover:text-primary-theme/80 duration-100 underline-offset-2'>Terms & Condition</Link>
                                </div>
                                <button className='inline-block text-white py-4 font-medium w-full px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-100 cursor-pointer'>Sign Up</button>
                            </form>
                            <div className='sign-in-with text-center mb-8 md:mb-10'>Or sign up with</div>
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
                                <p>Already have an account? <Link to='/sign-in' state={location.state} className='text-primary-theme underline hover:text-primary-theme/80 duration-100 underline-offset-2'>Sign in</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;