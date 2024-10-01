import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const DescriptionInput = ({ value, setData }) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    };


    return (
        <ReactQuill theme="snow" className='w-full dark:bg-[#181A2A] dark:text-white text-lg  outline-none dark:border-[#242535] border-2 
                    border-[#E8E8EA]' modules={modules} value={value} onChange={setData} />
    )
}

export default DescriptionInput