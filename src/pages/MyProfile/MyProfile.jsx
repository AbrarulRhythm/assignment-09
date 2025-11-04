import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaFacebookF, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { toast } from 'react-toastify';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const MyProfile = () => {
    const { user, updateUser, setUser } = use(AuthContext);

    // Handle Update Profile
    const handleUpdateProfile = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photo.value;

        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                event.target.reset(); // form reste
                setUser({ ...user, displayName: name, photoURL: photo });

                MySwal.fire({
                    icon: "success",
                    title: "Profile Updated! 🎉",
                    text: "Your profile information has been successfully updated.",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#F379A7",
                });
            })
            .catch((error) => {
                toast.error(error.message);
                setUser(user);
            })
    }

    return (
        <section className='py-10'>
            <title>{user && user.displayName}</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 items-center'>
                    <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
                        <div className='profile-image'>
                            <img className='mx-auto w-[340px] h-[340px] rounded-full object-cover border-2 border-gray-300' src={`${user && user.photoURL}`} alt="" />
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 lg:w-4/12 mb-8 px-3'>
                        <h2 className='text-3xl md:text-4xl font-bold text-dark-1 mb-3'>{user && user.displayName}</h2>
                        <h5 className='text-lg font-medium mb-2'>{user && user.email}</h5>
                        <p className='text-[12px] font-normal mb-6 break-words'><span className='font-medium text-sm'>URL:</span> {user && user.photoURL}</p>
                        <ul className='flex items-center gap-6 text-lg'>
                            <li><FaFacebookF /></li>
                            <li><FaXTwitter /></li>
                            <li><FaPinterest /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                    <div className='w-full md:w-6/12 lg:w-4/12 px-3'>
                        <div>
                            <form onSubmit={handleUpdateProfile}>
                                <div className='mb-4'>
                                    <input type="text" name='name' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Enter your name' required />
                                </div>
                                <div className='mb-4'>
                                    <input type="text" name='photo' className='w-full border border-dark-3 rounded-md py-5 px-6 focus:outline-0 focus:border-primary-theme' placeholder='Enter your photoURL' required />
                                </div>
                                <button className='inline-block text-white py-4 font-medium px-10 rounded-md bg-primary-theme hover:bg-primary-theme-dark duration-100 cursor-pointer'>Update Profile</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;