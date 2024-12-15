import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenu } from "react-icons/io5";


const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <div className="bg-black mb-[40px]">
        <nav className="flex max-w-[1440px] mx-auto 2xl:px-[100px] xl:px-[100px] px-[30px] justify-end xl:gap-[231px] gap-[100px] h-[48px]  text-white items-center">
          <div className="flex  gap-[8px]">
            <p>Sign up and get 20% off to your first order. </p>
            <button className="font-bold underline">Sign Up Now</button>
          </div>
          <div className='hidden md:block'>
            <button>X</button>
          </div>
        </nav>
      </div>
      <div className="w-full">
        <nav className="h-[38px] flex items-center mx-auto justify-between max-w-[1440px] 2xl:px-[100px] xl:px-[50px] px-[30px]  mb-[24px]">
          <div className="flex  gap-[40px] w-full justify-between  items-center">
            <div className='flex gap-[16px] items-center'>
            <div className='block xl:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                <IoMenu className='text-3xl'/>
                </SheetTrigger>
                <SheetContent side='left'>
                  <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
              <div className='flex mt-4 items-center justify-between'>
              <h1 className="text-[24px] mb-4 font-extrabold tracking-tight">
              SHOP.CO
              </h1>
              <div className="flex items-center gap-[14px] w-[62px]">
                <Link href="/cart">
                  <img className ='object-contain w-7' src="home/cart.png" alt="" />
                </Link>
                <img className='object-contain w-7' src="home/profile.png" alt="" />
              </div>
              </div>
              <div className="flex items-center">
                <img
                  className="object-contain"
                  src="/home/search.png"
                  alt="search"
                />
                <input
                  className="2xl:w-[577px] xl:w-[430px] lg:w-[300px] h-[48px] xl:flex rounded-[48px] ps-[30px] outline-none"
                  type="text"
                  placeholder="What are you looking for ?"
                  name=""
                  id=""
                />
              </div>
            <ul className="flex flex-col gap-[24px]">
              <select className="" name="" id="">
                <option value="English">Shop</option>
              </select>
              <li className="w-[64px] ">On Sale</li>
              <li className="w-[90px] ">New Arrivals</li>
              <li className="w-[60px] ">Brands</li>
            </ul>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <h1 className="md:text-[32px] text-[24px] font-extrabold tracking-tight">
              SHOP.CO
            </h1>
            </div>
            <ul className="xl:flex hidden items-center gap-[24px]">
              <select className="" name="" id="">
                <option value="English">Shop</option>
              </select>
              <li className="w-[64px]">On Sale</li>
              <li className="w-[90px]">New Arrivals</li>
              <li>Brands</li>
            </ul>
            <div className="flex gap-[14px] xl:gap-[24px] items-center ">
              <div className="flex items-center">
                <img
                  className="object-contain min-w-[24px]"
                  src="/home/search.png"
                  alt="search"
                />
                <input
                  className="2xl:w-[577px] xl:w-[430px] lg:w-[300px] h-[48px] hidden xl:flex rounded-[48px] ps-[30px] outline-none"
                  type="text"
                  placeholder="What are you looking for ?"
                  name=""
                  id=""
                />
              </div>
              <div className="flex md:gap-[14px] gap-2 w-[62px]">
                <Link href="/cart">
                  <img className='object-contain min-w-[24px]' src="home/cart.png" alt="" />
                </Link>
                <img className='object-contain w-[24px] min-w-[24px]' src="home/profile.png" alt="" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header