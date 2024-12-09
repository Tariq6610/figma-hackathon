import React from 'react'

const Brawse = () => {
  return (
    <div className='max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px] '>
    <div className='bg-[#F0F0F0] px-[64px] flex flex-col items-center justify-center pb-[76px]'>
      <h1 className='font-bold text-[48px] tracking-tight mt-[70px] mb-[64px]'>BROWSE BY DRESS STYLE</h1>
      <div className='grid grid-cols-3 gap-[20px] w-full grid-rows-[289px_289px]'>
        <div className='bg-green-400  relative '>
          <img className='w-full h-full object-cover' src="/browse/image 11.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[36px]'>Casual</h1>
        </div>
        <div className='bg-orange-400 relative col-span-2'>
        <img className='w-full h-full object-cover' src="/browse/image 13.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[36px]'>Formal</h1>
        </div>
        <div className='bg-blue-400 col-span-2 relative'>
        <img className='w-full h-full object-cover' src="/browse/image 12.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[36px]'>Party</h1>
        </div>
        <div className='bg-pink-400 relative'>
        <img className='w-full h-full object-cover' src="/browse/image 14.png" alt="" />
        <h1 className='absolute top-[25px] left-[36px] font-bold text-[36px]'>Gym</h1>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Brawse