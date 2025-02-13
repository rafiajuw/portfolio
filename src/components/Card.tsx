import React from 'react'
import Image from 'next/image';

interface propsType{
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propsType> = ({ title, desc, img, tags}) => {
  return (
    <div className='border border-accent  w-[250px] sm:w-[300px] h-300'>
      <div> <Image className='w-[250px] sm:w-[300px] h-300'
        src={img}
        width={300}
        height={300}
        alt={title}
        />
    </div>
    <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>{desc}</div>
        <div>{tags.map((el) =>(
            <div className='tags' key={el}>
            {el}

        </div>))}
    </div>
    </div>
    </div>
  )
}

export default Card