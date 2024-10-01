import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 bg-[#F6F6F7] dark:bg-[#141624] md:p-16 p-5 '>
            <div className='flex flex-col text-center md:text-start space-y-2'>
                <div className='text-[#181A2A] dark:text-[#FFFFFF] text-lg font-medium '>About</div>
                <div className='text-[#696A75] dark:text-[#97989F] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                <div className='space-x-1'>
                    <span className='text-[#181A2A] dark:text-[#FFFFFF] text-base font-medium' >Email  : </span>
                    <span className='text-[#3B3C4A] dark:text-[#97989F]'>nayabsarfaraj@gmail.com</span>
                </div>
                <div className='space-x-1'>
                    <span className='text-[#181A2A] dark:text-[#FFFFFF] text-base font-medium' >Phone  : </span>
                    <span className='text-[#3B3C4A] dark:text-[#97989F]'>9580081529</span>
                </div>
            </div>
            <div className='text-center'>
                <div className='text-[#181A2A] dark:text-[#FFFFFF] text-lg font-medium mb-2'>Quick   Link</div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'><Link to={"/"}>Home</Link></div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'><Link to={"/blogs"}>Blogs</Link></div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'><Link to={"/myBlogs"}>My Blogs</Link></div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'><Link to={"/create"}>Create Blog</Link></div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'><Link to={"/account"}>Account</Link></div>
            </div>
            <div className='text-center' >
                <div className='text-[#181A2A] dark:text-[#FFFFFF] text-lg font-medium mb-2'>Category</div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'>Lifestyle</div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'>Technology</div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'>Travel</div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'>Business</div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'>Economy</div>
                <div className='text-[#3B3C4A] dark:text-[#BABABF] text-base'>Sports</div>

            </div>
        </div>
    )
}

export default Footer