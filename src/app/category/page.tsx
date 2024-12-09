import React from 'react'
import { allProducts } from '@/components/items'
import ProductCard from '@/components/Product'

const Page = () => {
  return (
    <>
<div className='max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px]'>
<div>
    <ul className='flex '>
        <li className='flex gap-[4px] object-cover'>Home <img src="home/bracket.png" alt="" /></li>
        <li className='flex gap-[4px] object-cover'>Casual<img src="home/bracket.png" alt="" /></li>
    </ul>
</div>
<div>
    <div className='flex gap-[20px]'>
      <div className='w-[295px] px-[24px] py-[20px] h-[1220px] bg-gray-400 flex flex-col gap-[24px]'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-[20px]'>Filters</h1>
          <img src="/home/filter.png" alt="" />
        </div>
        <hr />
        <div className='flex flex-col gap-[20px]'>
          <div className='flex items-center justify-between w-full '>
            <p>T-shirts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Shorts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Shirts</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Hoodie</p>
            <img src="/home/bracket.png" alt="" />
          </div>
          <div className='flex items-center justify-between w-full '>
            <p>Jeans</p>
            <img src="/home/bracket.png" alt="" />
          </div>
        </div>
      </div>
    <div className=' flex-1  h-full'>
      <div className='mb-[16px] flex justify-between'>
        <h1 className='font-bold text-[32px]'>Casual</h1>
        <div className='flex gap-1 items-center'>
          <p>
          Showing 1-10 of 100 Products
          </p>
          <div className='flex gap-1'>
            <p>Sort by :</p>
            <select className='font-bold' name="" id="">
              <option value="Most Popular">Most Popular</option>
            </select>
          </div>
        </div>
      </div>
      <div className='flex gap-x-[15px] gap-y-[36px] flex-wrap'>
        {allProducts.slice(0,9).map((product) => (
           <ProductCard key={product.id} name={product.name} percentOff={product.percentOff} newPrice={product.newPrice} oldPrice={product.oldPrice} stars={product.stars} rating={product.rating} image={product.image} id={product.id}/>
        ))}
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Page