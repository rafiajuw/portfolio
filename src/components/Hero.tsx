import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/mypic.jpg)] bg-cover'
style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}>
    <Navbar />
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
            <div className='text-[60px] sm:text-[80px] font-bold leading-tight flex justify-betweenitems-center'>
                <div>
                    <p data-aos="zoom-in-up">My </p>
                    <p data-aos="zoom-in-up">name is</p>
                    <p data-aos="zoom-in-up">Rafia Imran</p>
                </div>
        
        </div>
    </div>

    </div>
  )
}

export default Hero