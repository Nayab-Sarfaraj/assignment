import React, { useEffect, useState } from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa6'
import { TiSocialTwitter, TiSocialYoutube, TiSocialFacebook, TiSocialInstagram } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../Component/Footer'
import Header from '../../Component/Header'
import Loader from '../../Component/Loader'
import PostCard from '../../Component/PostCard'
import { fetchMyBlogs } from '../../Store/Slice/MyBlogs'

const MyBlogs = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const blogs = useSelector(state => state.myBlogs.data.myBlogs)
    const author = useSelector(state => state.user.data.user)
    useEffect(() => {
        setIsLoading(true)
        dispatch(fetchMyBlogs())
        setIsLoading(false)
    }, [])
    const Icons = [{ icon: TiSocialFacebook }, { icon: TiSocialInstagram }, { icon: TiSocialTwitter }, { icon: TiSocialYoutube }]
    return (
        <>
            <div className='min-h-screen bg-[#FFFFFF] dark:bg-[#181A2A] md:px-16 px-5'>

                <Header />
                {

                    isLoading ? <Loader /> : <div className='mt-5 '>
                        <div className='dark:bg-[#242535] bg-[#F6F6F7] w-full flex flex-col items-center justify-center md:p-16 p-7 rounded-xl space-y-5'>
                            <div className='flex  items-center space-x-3'>
                                <img src={author?.avatar} className='h-14 rounded-full' />
                                <div><div className='dark:text-white text-xl capitalize'>{author?.name}</div>
                                    <div className='text-[#BABABF] text-sm capitalize'>{author?.profession}</div>
                                </div>
                            </div>
                            <div className='text-[#BABABF] md:w-[70%] w-full'>{author?.bio}</div>
                            <div className='text-white flex space-x-3'>
                                {

                                    author?.contactInfo.map((contact, idx) => {
                                        const IconComponent = Icons[idx].icon;

                                        return (
                                            <Link to={contact.link}>
                                                <div className='bg-[#696A75] h-7 w-7 flex items-center justify-center rounded-lg'><IconComponent /></div>
                                            </Link>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 py-4'>
                            {
                                blogs?.map((blog) => (<PostCard blog={blog} key={blog._id} />))
                            }
                        </div>
                    </div>
                }



            </div>
            <Footer />
        </>
    )
}

export default MyBlogs