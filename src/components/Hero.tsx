import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='relative flex  max-w-[1440px] bg-[#F2F0F1] -z-20 '>
        <img className='absolute -z-10' src="hero.png" alt="" />
        <div className='w-[600px] 2xl:px-[100px] xl:px-[50px] px-[30px] flex flex-col justify-center gap-[20px] h-[600px]'>
         <h1 className='font-extrabold tracking-tight text-[50px] leading-[45px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
         <p className='leading-[16px] text-sm'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='h-[52px] rounded-[62px] w-[180px] bg-black text-white'>Shop Now</button>
        </div>
        <img className='absolute top-[331px] left-[750px]' src="star.png" alt="" />
        <img className='absolute w-[104px] h-[104px] top-[120px] right-[100px]' src="star.png" alt="" />
    </div>
    <div className='max-w-[1440px] w-full h-[122px] items-center bg-black flex 2xl:px-[100px] xl:px-[50px] px-[30px]  gap-[106px] '>
        <img src="hero/versache.png" alt="" />
        <img src="hero/zara.png" alt="" />
        <img src="hero/gucci.png" alt="" />
        <img src="hero/prada.png" alt="" />
        <img src="hero/calvin.png" alt="" />
    </div>
    </>
  )
}

export default Hero