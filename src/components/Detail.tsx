import React from 'react'
import { recomendedProducts } from './items'
import ProductCard from './Product'
import { allProducts } from './items'

interface Props {
    id : number
}

const Detail = ({id} : Props) => {
  const cardId = id;  
  const productClicked = allProducts.find((product) => (product.id === cardId))!;  

  return (
    <div className='max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px]'>

    <div>
        <ul className='flex '>
            <li className='flex gap-[4px] object-cover'>Home <img src="/home/bracket.png" alt="" /></li>
            <li className='flex gap-[4px] object-cover'>Shop <img src="/home/bracket.png" alt="" /></li>
            <li className='flex gap-[4px] object-cover'>Men <img src="/home/bracket.png" alt="" /></li>
            <li className='flex gap-[4px] object-cover'>T-shirta </li>
        </ul>
    </div>
    <div>
        <div className='h-[530px] flex gap-[14px]'>
            <div className='flex flex-col gap-[10px]'>
                <div className='w-[152px] h-[167px] rounded-[20px]'><img className='h-full w-[full]' src={productClicked.image}alt="" /></div>
                <div className='w-[152px] h-[167px] rounded-[20px]'><img className='h-full w-[full]' src={productClicked.image}alt="" /></div>
                <div className='w-[152px] h-[167px] rounded-[20px]'><img className='h-full w-[full]' src={productClicked.image}alt="" /></div>
            </div>
            <div className='w-[444px] h-[99%] rounded-[20px]'>
            <img className='h-full w-[full]' src={productClicked.image}alt="" />
            </div>
        <div className=' flex-1 h-full'>
            <h1 className='font-E font-extrabold text-[40px] tracking-tight'>{productClicked.name}</h1>
            <div className='flex flex-col gap-[8px]'>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <img className='object-contain' src={productClicked.stars> 0 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={productClicked.stars> 1 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={productClicked.stars> 2 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={productClicked.stars> 3 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <img className='object-contain' src={productClicked.stars> 4 ? '/home/fullStar.png' : '/home/noStar.png'} alt="Star" />
                <span className='text-gray-500 text-sm'>{productClicked.rating}/5</span>
            </div>
            <div className='flex gap-[12px] items-center'><span className='text-[24px] font-bold'>{productClicked.newPrice}</span>
            {<span><span className='text-gray-400 text-[24px] font-bold line-through mr-[10px]'>{productClicked.oldPrice}</span> 
            <span className="text-sm text-red-600">{productClicked.percentOff}</span></span>
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
    <div className='flex justify-around mb-[56px] mt-[80px]'>
        <div>Product Details</div>
        <div className=' border-b-2 border-black'>Rating And Reviews</div>
        <div>FAQs</div>
      </div>
    <div className='flex gap-[20px] mb-[20px]'>
    <div className="w-1/2 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Samantha D.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.&quot;
            </p>
          </div>
        </div>        
        <div className="w-1/2 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Alex M.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.&quot;
            </p>
          </div>
        </div>
    </div>
    <div className='flex gap-[20px] mb-[20px]'>
    <div className="w-1/2 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Ethan R.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt.&quot;
            </p>
          </div>
        </div>        
        <div className="w-1/2 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Olivia P.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.&quot;
            </p>
          </div>
        </div>
    </div>
    <div className='flex gap-[20px] mb-[20px]'>
    <div className="w-1/2 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Liam K.</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;I&apos;m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I&apos;ve bought has exceeded my expectations.&quot;
            </p>
          </div>
        </div>        
        <div className="w-1/2 border flex flex-col gap-[15px] h-[240px] px-[32px] py-[28px]">
          <div>
            <img src="/home/frame 10.png" alt="" />
          </div>
          <div className="flex gap-[10px]">
            <h1>Ava H..</h1>
            <img src="/home/tick.png" alt="" />
          </div>
          <div>
            <p className="leading-[22px] text-gray-500">
            &quot;I&apos;m not just wearing a t-shirt; I&apos;m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.&quot;
            </p>
          </div>
        </div>
    </div>
      <div className='flex justify-center'><button className='w-[230px] h-[52px] flex justify-center items-center border'>Load More Reviews</button></div>
      <>
    <div className=' max-w-[1440px] 2xl:px-[100px] flex flex-col items-center gap-[55px] xl:px-[50px] px-[30px] mt-[72px]'>
        <h1 className='font-bold text-[48px] tracking-tight'> YOU MIGHT ALSO LIKE</h1>
        <div className='flex gap-[20px]'>
            {recomendedProducts.map((product) => (
                <ProductCard key={product.id} name={product.name} percentOff={product.percentOff} newPrice={product.newPrice} oldPrice={product.oldPrice} stars={product.stars} rating={product.rating} image={product.image} id={product.id}/>
            ))}
        </div>
    </div>
    </>
</div>
  )
}

export default Detail