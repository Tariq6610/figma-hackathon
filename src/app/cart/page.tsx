import React from 'react'

const page = () => {
  return (
    <div className='max-w-[1440px] 2xl:px-[100px] flex flex-col gap-[24px] xl:px-[50px] px-[16px]'>
        <ul className='flex'>
            <li className='flex gap-[4px]'>Home <img className='object-contain' src="/home/bracket.png" alt="" /></li>
            <li className='flex gap-[4px]'>Cart <img className='object-contain' src="/home/bracket.png" alt="" /></li>
        </ul>
        <div>
            <h1 className='font-bold md:text-[40px] text-[30px]'>Your Cart</h1>
        </div>
        <div className='flex xl:flex-row flex-col'>
            <div className='xl:w-3/5 w-full flex flex-col  gap-[24px] py-[20px] px-[24px]'>
                <div className='flex sm:flex-row flex-col'>
                    <div className='sm:w-[124px] sm:h-[24px] w-auto h-auto '>
                        <img className='object-contain' src="/recomended/Frame 33.png" alt="" />
                    </div>
                    <div className='flex-1 flex flex-col justify-between h-[124px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-[20px]'>Gradient Graphic T-shirt</h1>
                            <img src="/home/delete.png" alt="" />
                        </div>
                        <div>
                            <p>Size: Large</p>
                            <p>Color: Red</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-[24px]'>$145</h1>
                            <div className='flex py-[12px] px-[20px] gap-[20px]'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex sm:flex-row flex-col'>
                    <div className='sm:w-[124px] sm:h-[24px] w-auto h-auto '>
                        <img src="/products/Frame 34.png" alt="" />
                    </div>
                    <div className='flex-1 flex flex-col justify-between h-[124px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-[20px]'>CHECKERED SHIRT</h1>
                            <img src="/home/delete.png" alt="" />
                        </div>
                        <div>
                            <p>Size: Medium</p>
                            <p>Color: Red</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-[24px]'>$180</h1>
                            <div className='flex py-[12px] px-[20px] gap-[20px]'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex sm:flex-row flex-col'>
                    <div className='sm:w-[124px] sm:h-[24px] w-auto h-auto '>
                        <img src="/products/Frame 33.png" alt="" />
                    </div>
                    <div className='sm:flex-1 flex flex-col justify-between h-[124px]'>
                        <div className='flex items-center justify-between'>
                            <h1 className='font-bold text-[20px]'>SKINNY FIT JEANS</h1>
                            <img src="/home/delete.png" alt="" />
                        </div>
                        <div>
                            <p>Size: Large</p>
                            <p>Color: Blue</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-[24px]'>$240</h1>
                            <div className='flex py-[12px] px-[20px] gap-[20px]'>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-[24px] py-[20px] px-[24px]'>
                <h1 className='font-bold text-[24px]'>Order Summary</h1>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p className='font-bold text-[20px]'>$565</p>
                </div>
                <div className='flex justify-between'>
                    <p>Discount (-20%)</p>
                    <p className='font-bold text-[20px]'>-$113</p>
                </div>
                <div className='flex justify-between'>
                    <p>Delivery Fee</p>
                    <p className='font-bold text-[20px]'>$15</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Total</p>
                    <p className='font-bold text-[20px]'>$467</p>
                </div>
                <div className='flex flex-wrap gap-y-2 justify-between'>
                    <input type="text" placeholder='Add Promo Code' name="" id="" />
                    <button className='w-[119px] h-[48px] rounded-[62px] flex justify-center items-center text-white bg-black'>Apply</button>
                </div>
                <button className='md:w-[457px] w-full h-[60px] bg-black flex justify-center items-center text-white rounded-[30px] sm:rounded-[62px]'>Go to Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default page