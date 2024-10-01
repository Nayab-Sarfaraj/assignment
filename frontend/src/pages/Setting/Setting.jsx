import React from 'react'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Slice/UserAuthentication';
import { STATUSES } from '../../Store/Slice/AllBlogsSlice';
import Loader from '../../Component/Loader';

const Setting = () => {
    const status = useSelector(state => state.user.status)
    const dispatch = useDispatch()
    return (
        <>
            <div className='bg-[#FFFFFF] dark:bg-[#181A2A] min-h-screen w-full md:px-16 px-5 pb-10'
            >

                <Header />
                {
                    status === STATUSES.LOADING ? <Loader /> : <div className='flex  flex-col items-center space-y-3 '>
                        <Link to={"/uploadProfilePic"}>
                            <div className='flex items-center border-2 md:w-96 w-72 dark:border-[#242535] border-[#E8E8EA] justify-between px-2 py-2 ' >
                                <div className='text-[#3B3C4A] dark:text-white text-xl' >Update profile picture</div>
                                <MdArrowForwardIos size={24} className='text-[#3B3C4A] dark:text-white' />
                            </div>
                        </Link>
                        <Link to={"/completeProfile"}>
                            <div className='flex items-center border-2 md:w-96 w-72 dark:border-[#242535] border-[#E8E8EA] justify-between px-2 py-2 '>
                                <div className='text-[#3B3C4A] dark:text-white text-xl' >Complete Profile</div>
                                <MdArrowForwardIos size={24} className='text-[#3B3C4A] dark:text-white' />
                            </div>
                        </Link>

                        <Link to={"/update/password"}>
                            <div className='flex items-center border-2 md:w-96 w-72 dark:border-[#242535] border-[#E8E8EA] justify-between px-2 py-2 '>
                                <div className='text-[#3B3C4A] dark:text-white text-xl' >Update Password</div>
                                <MdArrowForwardIos size={24} className='text-[#3B3C4A] dark:text-white' />
                            </div>
                        </Link>

                        <button className='text-white text-xl bg-rose-500 px-5 py-1 rounded-lg ' onClick={() => dispatch(logout())}>Logout</button>

                    </div>
                }

            </div>
            <Footer />
        </>
    )
}

export default Setting