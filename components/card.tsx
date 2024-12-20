/// components/YouTubeCard.js

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ClassicCourseCard = (props: any) => {
  return (
    <Link href={props.href}>
      <div className='max-w-[12.5rem] h-96 rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer'>
        <Image
          width={999}
          height={999}
          className='w-full h-48 object-cover'
          src={props.src}
          alt='Video Thumbnail'
        ></Image>

        <div className='p-4'>
          <h3 className='font-semibold text-lg mb-1'>{props.title}</h3>
          <p className='text-gray-600 text-sm mb-2'>{props.interviewer}</p>
          <p className='text-gray-600 text-sm mb-2'>
            {props.views} • {props.date}
          </p>
          <p className='text-gray-700 text-base'>{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ClassicCourseCard;
