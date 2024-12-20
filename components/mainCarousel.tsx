"use client";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import { FaRegCircleDot } from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
export default function MainCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const CarouselCont = [
    {
      content: (
        <div className='w-full h-full'>
          <Image
            src='/islam1.jfif'
            alt=''
            width={999}
            height={999}
            className='w-full h-full'
          ></Image>
          <div className=' absolute top-20 md:left-[50%] left-[5%] z-10 flex flex-col items-center justify-center gap-y-2'>
            <Link
              className=' px-2 w-[50ch self-end bg-blue-500 rounded-md shadow-xl shadow-black font-bold text-2xl '
              href=''
            >
              this is link
            </Link>
            <p className='w-[50ch] p-2 bg-gray-100 rounded-md shadow-xl shadow-black'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex modi
              repellat eos alias voluptates suscipit beatae veniam reiciendis,
              ut perferendis ratione dignissimos dolores quod rerum, eveniet,
              illum dolorem magnam? Modi?
            </p>
            <Link
              className=' w-[50ch self-start text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
              href=''
            >
              more
            </Link>
          </div>
        </div>
      ),
      keyItem: 0,
    },
    {
      content: (
        <div className='w-full h-full relative'>
          <Image
            src='/islam2.jpg'
            alt=''
            width={999}
            height={999}
            className='w-full h-full'
          ></Image>
          <div className=' absolute top-20 md:left-[50%] left-[5%] z-10 flex flex-col items-center justify-center gap-y-2'>
            <Link
              className=' px-2 w-[50ch self-end bg-blue-500 rounded-md shadow-xl shadow-black font-bold text-2xl '
              href=''
            >
              this is link
            </Link>
            <p className='w-[50ch] p-2 bg-gray-100 rounded-md shadow-xl shadow-black'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex modi
              repellat eos alias voluptates suscipit beatae veniam reiciendis,
              ut perferendis ratione dignissimos dolores quod rerum, eveniet,
              illum dolorem magnam? Modi?
            </p>
            <Link
              className=' w-[50ch self-start text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
              href=''
            >
              more
            </Link>
          </div>
        </div>
      ),
      keyItem: 1,
    },
    {
      content: (
        <div className='w-full h-full relative'>
          <Image
            src='/islam3.jfif'
            alt=''
            width={999}
            height={999}
            className='w-full h-full'
          ></Image>
          <div className=' absolute top-20 md:left-[50%] left-[5%] z-10 flex flex-col items-center justify-center gap-y-2'>
            <Link
              className=' px-2 w-[50ch self-end bg-blue-500 rounded-md shadow-xl shadow-black font-bold text-2xl '
              href=''
            >
              this is link
            </Link>
            <p className='w-[50ch] p-2 bg-gray-100 rounded-md shadow-xl shadow-black'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex modi
              repellat eos alias voluptates suscipit beatae veniam reiciendis,
              ut perferendis ratione dignissimos dolores quod rerum, eveniet,
              illum dolorem magnam? Modi?
            </p>
            <Link
              className=' w-[50ch self-start text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
              href=''
            >
              more
            </Link>
          </div>
        </div>
      ),
      keyItem: 2,
    },
    {
      content: (
        <div className='w-full h-full relative'>
          <Image
            src='/islam4.jpg'
            alt=''
            width={999}
            height={999}
            className='w-full h-full'
          ></Image>
          <div className=' absolute top-20 md:left-[50%] left-[5%] z-10 flex flex-col items-center justify-center gap-y-2'>
            <Link
              className=' px-2 w-[50ch self-end bg-blue-500 rounded-md shadow-xl shadow-black font-bold text-2xl '
              href=''
            >
              this is link
            </Link>
            <p className='w-[50ch] p-2 bg-gray-100 rounded-md shadow-xl shadow-black'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex modi
              repellat eos alias voluptates suscipit beatae veniam reiciendis,
              ut perferendis ratione dignissimos dolores quod rerum, eveniet,
              illum dolorem magnam? Modi?
            </p>
            <Link
              className=' w-[50ch self-start text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
              href=''
            >
              more
            </Link>
          </div>
        </div>
      ),
      keyItem: 3,
    },
    {
      content: (
        <div className='w-full h-full relative'>
          <Image
            src='/islam5.jpg'
            alt=''
            width={999}
            height={999}
            className='w-full h-full'
          ></Image>
          <div className=' absolute top-20 md:left-[50%] left-[5%] z-10 flex flex-col items-center justify-center gap-y-2'>
            <Link
              className=' px-2 w-[50ch self-end bg-blue-500 rounded-md shadow-xl shadow-black font-bold text-2xl '
              href=''
            >
              this is link
            </Link>
            <p className='w-[50ch] p-2 bg-gray-100 rounded-md shadow-xl shadow-black'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex modi
              repellat eos alias voluptates suscipit beatae veniam reiciendis,
              ut perferendis ratione dignissimos dolores quod rerum, eveniet,
              illum dolorem magnam? Modi?
            </p>
            <Link
              className=' w-[50ch self-start text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
              href=''
            >
              more
            </Link>
          </div>
        </div>
      ),
      keyItem: 4,
    },
  ];

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent className='  w-full h-96'>
        {CarouselCont.map((value) => (
          <CarouselItem key={value.keyItem}>
            <div className='w-full h-96'> {value.content}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <div className=' absolute bottom-3 right-[45%] flex items-center justify-center gap-x-1'>
        {CarouselCont.map((value, index) => (
          <button
            key={value.keyItem}
            onClick={() => api?.scrollTo(value.keyItem)}
          >
            <FaRegCircleDot
              className={
                value.keyItem === current - 1
                  ? "text-2xl text-blue-500"
                  : "text-2xl text-white"
              }
            />
          </button>
        ))}
      </div>
    </Carousel>
  );
}
