"use client";
import { FaBookOpen } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { IoLibraryOutline } from "react-icons/io5";
import { IoMegaphone } from "react-icons/io5";
import { RiLiveFill } from "react-icons/ri";
import { useState } from "react";
import FlippedCard from "./flippedCard";
import { IoArrowRedoOutline } from "react-icons/io5";
import Link from "next/link";
export default function MidpageNav() {
  const divNav = [
    {
      content: "fatawy",
      key: 0,
      icon: <FaBookOpen />,
      section: (
        <div className='w-full h-full flex items-center justify-center gap-x-2 gap-y-2 p-2 flex-wrap bg-gray-950 overflow-y-scroll'>
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam1.jfif'
            head='islam1'
            text='this is an awosme intersting book you should read'
          />
        </div>
      ),
    },
    {
      content: "st4arat",
      key: 1,
      icon: <FaRocketchat />,
      section: (
        <div className='w-full h-full flex items-center justify-center gap-x-2 gap-y-2 p-2 flex-wrap bg-gray-950  overflow-y-scroll'>
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam2.jpg'
            head='islam2'
            text='this is an awosme intersting book you should read'
          />
        </div>
      ),
    },
    {
      content: "awamr",
      key: 2,
      icon: <IoLibraryOutline />,
      section: (
        <div className='w-full h-full flex items-center justify-center gap-x-2 gap-y-2 p-2 flex-wrap bg-gray-950 overflow-y-scroll'>
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam3.jfif'
            head='islam3'
            text='this is an awosme intersting book you should read'
          />
        </div>
      ),
    },
    {
      content: "nawahy",
      key: 3,
      icon: <IoMegaphone />,
      section: (
        <div className='w-full h-full flex items-center justify-center gap-x-2 gap-y-2 p-2 flex-wrap bg-gray-950 overflow-y-scroll'>
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam4.jpg'
            head='islam4'
            text='this is an awosme intersting book you should read'
          />
        </div>
      ),
    },
    {
      content: "live ",
      key: 4,
      icon: <RiLiveFill />,
      section: (
        <div className='w-full h-full flex items-center justify-center gap-x-2 gap-y-2 p-2 flex-wrap bg-gray-950 overflow-y-scroll'>
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
          <FlippedCard
            src='/islam5.jpg'
            head='islam5'
            text='this is an awosme intersting book you should read'
          />
        </div>
      ),
    },
  ];
  const [count, setCount] = useState(0);
  return (
    <div className='w-full h-auto'>
      <div className=' w-full py-2 bg-gradient-to-r from-blue-700 to-transparent px-2 capitalize  flex items-center justify-between'>
        <Link href='' className='text-3xl font-bold'>
          Books
        </Link>
        <Link
          href=''
          className='flex items-center justify-center gap-x-2 text-md text-green-600'
        >
          more <IoArrowRedoOutline className='text-2xl' />
        </Link>
      </div>
      <div className='w-full min-h-20 flex items-center justify-center gap-x-2 bg-blue-950'>
        {divNav.map((value) => (
          <div
            onClick={() => {
              setCount(value.key);
            }}
            key={value.key}
            className={
              count === value.key
                ? "flex items-center justify-center gap-x-2 bg-white text-xl rounded-md cursor-pointer px-2 py-1 shadow-md shadow-slate-600 font-bold text-blue-500 w-[19%]"
                : "flex items-center justify-center gap-x-2 bg-gray-700 text-xl rounded-md cursor-pointer px-2 py-1 shadow-md shadow-slate-600 font-bold text-blue-500 w-[19%]"
            }
          >
            {value.content} {value.icon}
          </div>
        ))}
      </div>

      <ul className='w-[92%] h-[41rem] flex overflow-hidden mx-auto'>
        {divNav.map((value) => (
          <div
            className={
              count !== value.key ? "hidden" : "min-w-full h-full block "
            }
            key={value.key}
          >
            {value.section}
          </div>
        ))}
      </ul>
    </div>
  );
}
