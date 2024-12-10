import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-col'>
      <div className='bg-black mb-[40px]'>
        <nav className='flex max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px] justify-end gap-[231px] h-[48px]  text-white items-center'>
          <div className='flex gap-[8px]'>
            <p>Sign up and get 20% off to your first order. </p>
            <button className='font-bold underline'>Sign Up Now</button>
          </div>
          <div><button>X</button></div>
        </nav>
      </div>
      <nav className='h-[38px] flex items-center justify-between max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px]  mb-[24px]'>
        <div className='flex  gap-[40px] w-full justify-between  items-center'>
          <h1 className='text-[32px] font-extrabold tracking-tight'>SHOP.CO</h1>
          <ul className='flex items-center gap-[24px]'>
          <select className='' name="" id="">
            <option value="English">Shop</option>
          </select>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        <div className='flex gap-[24px] items-center '>
          <input className='2xl:w-[577px] w-[350px] h-[48px]  rounded-[48px] bg-[#F0F0F0] ps-[30px] border-none outline-none' type="text" placeholder='What are you looking for ?' name="" id="" />
          <div className='flex gap-[14px]'>
              <img className='w-[16px] h-[16px]' src="/search.png" alt="" />
              <Link href='/cart'><img src="home/cart.png" alt="" /></Link>
              <img src="home/profile.png" alt="" />
          </div>
        </div>
        </div>
      </nav>
      <div className='max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px]'>
      <hr />
      </div>
    </header>
  )
}

export default Header