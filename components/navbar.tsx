import Image from "next/image";
import { MiddleNav } from "./middleNav";
import Auth from "./auth";
export default function Navbar() {
  return (
    <nav className='w-full flex flex-col items-center justify-between mb-2'>
      <div className='w-full h-14  flex items-center justify-between px-4 md:hidden'>
        <Image
          src='/logo1.jpg'
          alt=''
          width={999}
          height={999}
          className='w-20 h-12 rounded-md'
        ></Image>
        <Auth />
      </div>
      <div className='w-full h-14  flex items-center md:justify-between  justify-center px-4'>
        <Image
          src='/logo1.jpg'
          alt=''
          width={999}
          height={999}
          className='w-20 h-12 rounded-md hidden md:block'
        ></Image>
        <MiddleNav />
        <div className=' md:block hidden'>
          <Auth />
        </div>
      </div>
    </nav>
  );
}
