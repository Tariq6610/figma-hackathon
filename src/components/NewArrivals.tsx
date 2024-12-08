import React from 'react'
import ProductCard from './Product'
import { newProducts } from './items'

const NewArrivals = () => {
  return (
    <>
    <div className=' max-w-[1440px] 2xl:px-[100px] flex flex-col items-center gap-[55px] xl:px-[50px] px-[30px] mt-[72px]'>
        <h1 className='font-bold text-[48px] tracking-tight'>NEW ARRIVALS</h1>
        <div className='flex gap-[20px]'>
            {newProducts.map((product) => (
                <ProductCard key={product.id} name={product.name} percentOff={product.percentOff} newPrice={product.newPrice} oldPrice={product.oldPrice} stars={product.stars} rating={product.rating} image={product.image} id={product.id}/>
            ))}
        </div>
    <div className='flex justify-center mt-[36px]'>
      <button className='w-[218px] border h-[52px]  flex justify-center items-center rounded-[62px]'> view All</button>
    </div>
    </div>
    </>
  )
}

export default NewArrivals