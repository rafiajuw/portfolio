import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='='text-5xl>get in touch</h2>
                <p className='text-grey-600 text-[18px] pt-2'>
                    drop me a line aur give me a call u can whatsup me on 03323025239
                </p>
                
                <div className='flex gap-3 items-center'>
                <MdOutlineAttachEmail size={30} /> hashimrafia7@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
                <FaPhoneAlt  size={30} /> 03323025239
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>NAME</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='contact'>contactno</label>
                    <input type="number"
                    className='h-[40px] bg-transparent border border-accent'
                    id='contact'/>
                </div><div className='flex flex-col gap-1'>
                    <label htmlFor='email'>email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='msg'>message</label>
                    <textarea 
                    className='bg-transparent border border-accent'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6'>send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact