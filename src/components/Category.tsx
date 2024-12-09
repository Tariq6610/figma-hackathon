import React from 'react'

const Page = () => {
  return (
    <>
        <div className='max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px]'>

<div>
    <ul className='flex '>
        <li className='flex gap-[4px] object-cover'>Home <img src="home/bracket.png" alt="" /></li>
        <li className='flex gap-[4px] object-cover'>Shop <img src="home/bracket.png" alt="" /></li>
        <li className='flex gap-[4px] object-cover'>Men <img src="home/bracket.png" alt="" /></li>
        <li className='flex gap-[4px] object-cover'>T-shirta </li>
    </ul>
</div>
<div>
    <div className='h-[530px] flex gap-[14px]'>
        <div className='flex flex-col gap-[10px]'>
            <div className='w-[152px] h-[167px] rounded-[20px]'><img className='h-full w-[full]' src={''}alt="" /></div>
            <div className='w-[152px] h-[167px] rounded-[20px]'><img className='h-full w-[full]' src={''}alt="" /></div>
            <div className='w-[152px] h-[167px] rounded-[20px]'><img className='h-full w-[full]' src={''}alt="" /></div>
        </div>
        <div className='w-[444px] h-[99%] rounded-[20px]'>
        <img className='h-full w-[full]' src={''}alt="" />
        </div>
    <div className=' flex-1 h-full'>
        <h1 className='font-E font-extrabold text-[40px] tracking-tight'>{}</h1>
        <div className='flex flex-col gap-[8px]'>
        <div className='w-[140px] h-[20px] flex gap-[8px]'>
            <img className='object-contain' src={ 5 > 0 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
            <img className='object-contain' src={ 5 > 1 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
            <img className='object-contain' src={ 5 > 2 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
            <img className='object-contain' src={ 5 > 3 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
            <img className='object-contain' src={ 5 > 4 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
            <span className='text-gray-500 text-sm'>{}/5</span>
        </div>
        <div className='flex gap-[12px] items-center'><span className='text-[24px] font-bold'>{}</span>
        {<span><span className='text-gray-400 text-[24px] font-bold line-through mr-[10px]'>{}</span> 
        <span className="text-sm text-red-600">{}</span></span>
       }
        </div>
        <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        <p>Select Colors</p>
        <div className='flex gap-[16px]'>
            <div className='w-[32px] h-[32px] rounded-full bg-black'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-blue-700'></div>
            <div className='w-[32px] h-[32px] rounded-full bg-red-700'></div>
        </div>
        <hr className='my-[14px]'/>
        <p>Choose Size</p>
        <div className='flex gap-[12px]'>
            <div className='py-[16px] border px-[32px] bg-[#F0F0F0] hover:bg-black hover:text-white  rounded-full '>Small</div>
            <div className='py-[16px] border px-[32px] bg-[#F0F0F0] hover:bg-black hover:text-white  rounded-full '>Medium</div>
            <div className='py-[16px] border px-[32px] bg-[#F0F0F0] hover:bg-black hover:text-white  rounded-full '>Large</div>
            <div className='py-[16px] border px-[32px] bg-[#F0F0F0] hover:bg-black hover:text-white  rounded-full '>X-Large</div>
        </div>
        <hr className='my-[14px]'/>
        <div className='flex gap-[16px]'>
            <div className='w-[170px]  font-bold flex justify-between px-4 items-center h-[52px] rounded-[62px] bg-[#F0F0F0]'>
                <p className='text-[30px]'>-</p>
                <p className='text-[20px]'>1</p>
                <p className='text-[30px]'>+</p>
            </div>
            <div className='w-[400px] h-[52px] flex justify-center items-center rounded-full bg-black text-white'>Add to Cart</div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Page