import React from 'react'

const CustomerCard = () => {
  return (
    <div className='w-[400px] border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]'>
    <div>
        <img src="/Frame 10.png" alt="" />
    </div>
    <div className='flex gap-[10px]'>
        <h1>Sarah M.</h1>
        <img src="/tick.png" alt="" />
    </div>
    <div>
        <p className='leading-[22px] text-gray-500'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
    </div>

</div>
  )
}

export default CustomerCard