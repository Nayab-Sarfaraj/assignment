import React from 'react'
import { BiLoader } from "react-icons/bi";

const Loader = () => {
    return (
        <div className='flex w-full items-center justify-center'>

            <BiLoader size={100} className='animate-spin' />
        </div>
    )
}

export default Loader