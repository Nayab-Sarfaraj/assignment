import React, { useState } from 'react'
import darkLogo from "../assets/darkLogo.png"
import lightLogo from "../assets/Logo.png"
import { useDispatch, useSelector } from 'react-redux'
import { RiMenu5Line } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { toggleTheme } from '../Store/Slice/ThemeSlice';
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SideBar from './SideBar';
const Header = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const [sideBar, setSideBar] = useState(false)
    return (
        <div className='w-full flex flex-row items-center justify-between py-7'>
            <Link to={"/"}>
                {
                    theme === "light" ? <img src={lightLogo} /> : <img src={darkLogo} />
                }
            </Link>
            <div className='md:flex md:flex-row md:items-center md;justify-between space-x-5 text-[#3B3C4A] dark:text-[#FFFFFF] text-base hidden '>
                <div><Link to={"/"}>Home</Link></div>
                <div><Link to={"/blogs"}>Blogs</Link></div>
                <div ><Link to={"/myBlogs"}>My Blogs</Link></div>

                <div><Link to={"/search"}>Search</Link></div>
            </div>
            <div className='md:flex items-center justify-between space-x-6 text-[#3B3C4A] dark:text-[#FFFFFF] text-base hidden'>
                <Link to={"/create"}>      <FaRegSquarePlus size={24} className='text-[#3B3C4A] dark:text-white' /></Link>
                <Link to={"/setting"}>   <IoMdSettings size={24} className='text-[#3B3C4A] dark:text-white
                '/></Link>
                {
                    theme === "light" ? <button onClick={() => dispatch(toggleTheme("dark"))}><MdDarkMode size={24} /></button> : <button><MdOutlineLightMode size={24}
                        onClick={() => dispatch(toggleTheme("light"))} /></button>
                }
            </div>
            <RiMenu5Line className='md:hidden block  text-[#3B3C4A] dark:text-[#FFFFFF] text-base' size={24} onClick={() => setSideBar(!sideBar)} />

        </div>
    )
}

export default Header