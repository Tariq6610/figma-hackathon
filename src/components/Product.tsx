import { log } from "console"
import Link from "next/link"

interface Props {
    id: number,
    name : string,
    percentOff? : string | boolean,
    newPrice : string,
    oldPrice? : string | boolean,
    stars : number,
    rating : number,
    image : string,
}

const ProductCard = ({name, percentOff = false, newPrice, oldPrice = false, stars, rating, image, id} : Props) => {  
    return (
   <>
    <div className='w-[270px] min-h-[350px] group shadow-lg '>
        <div className='w-[270px] bg-stone-200 mb-[16px] relative h-[250px] flex justify-center items-center'>
            <img src={image} alt="product image" />
            {percentOff ? 
            <div className='w-[55px] h-[26px] rounded flex justify-center items-center bg-primary absolute top-[12px] left-[12px] text-white'>{percentOff}</div>
            : ""
        }
            <div className='absolute top-[12px] right-[12px] w-[34px] h-[76px] flex flex-col justify-center items-center'>
                <img src="/Frame 575.png" alt=""  className=''/>
            </div>
          <div className="absolute hidden group-hover:block bottom-0 w-full">
          <Link href={`/products/${id}`}><button className="w-full h-[41px] bg-black text-white flex justify-center items-center">Add To Cart</button></Link>
            </div>
        </div>
        <div className='flex flex-col gap-[8px]'>
            <p className="font-bold text-[18px]">{name}</p>
            <div className='w-[140px] h-[20px] flex gap-[8px]'>
                <img className='object-contain' src={stars > 0 ? 'fullStar.png' : 'noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 1 ? 'fullStar.png' : 'noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 2 ? 'fullStar.png' : 'noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 3 ? 'fullStar.png' : 'noStar.png'} alt="Star" />
                <img className='object-contain' src={stars > 4 ? 'fullStar.png' : 'noStar.png'} alt="Star" />
                <span className='text-gray-500 text-sm'>{rating}/5</span>
            </div>
            <div className='flex gap-[12px] items-center'><span className='text-[24px] font-bold'>{newPrice}</span>
            {oldPrice && percentOff && <span><span className='text-gray-400 text-[24px] font-bold line-through mr-[10px]'>{oldPrice}</span> 
            <span className="text-sm text-red-600">{percentOff}</span></span>
           }
            </div>
        </div>
    </div>
   </>
  )
}

export default ProductCard