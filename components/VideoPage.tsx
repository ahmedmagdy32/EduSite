"use client";

import Image from "next/image";
import Link from "next/link";
import { Share2, Download, MoreHorizontal } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface VideoData {
  id: string;
  slug: string;
  title: string;
  views: string;
  date: string;
  channelName: string;
  subscribers: string;
  description: string;
  videoUrl: string;
}

export default function VideoPage({ video }: { video: VideoData }) {
  return (
    <div className='w-full mx-auto p-4 flex justify-center items-start gap-x-6 lg:flex-row lg:gap-y-0 gap-y-6 flex-col '>
      <main className='w-full space-y-6  flex flex-col flex-1'>
        <div className='aspect-video bg-gray-100 rounded-xl overflow-hidden'>
          <video
            className='w-full h-full object-cover'
            src={video.videoUrl}
            poster='/placeholder.svg?height=720&width=1280'
            controls
          />
        </div>
        <div className='px-4'>
          <h1 className='text-2xl font-bold mb-2'>{video.title}</h1>
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <div className='flex items-center space-x-4'>
              <Avatar className='h-10 w-10'>
                <AvatarImage
                  alt={video.channelName}
                  src='/placeholder.svg?height=40&width=40'
                />
                <AvatarFallback>{video.channelName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className='font-semibold'>{video.channelName}</h2>
                <p className='text-sm text-gray-500'>
                  {video.subscribers} subscribers
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <Button variant='outline' className='rounded-full'>
                <Share2 className='h-5 w-5 mr-2' />
                Share
              </Button>
              <Button variant='outline' className='rounded-full'>
                <Download className='h-5 w-5 mr-2' />
                Download
              </Button>
              <Button variant='outline' size='icon' className='rounded-full'>
                <MoreHorizontal className='h-5 w-5' />
                <span className='sr-only'>More options</span>
              </Button>
            </div>
          </div>
        </div>
        <div className='bg-gray-100 rounded-xl p-4'>
          <p className='font-semibold mb-2'>
            {video.views} views • {video.date}
          </p>
          <p>{video.description}</p>
        </div>
      </main>
      <aside className='space-y-6'>
        <div className='flex items-center space-x-2'>
          <Button variant='outline'>All</Button>
          <Button variant='outline'>Related</Button>
          <Button variant='outline'>Recently uploaded</Button>
        </div>
        <div className='space-y-4'>
          {[1, 2, 3, 4, 5].map((i) => (
            <Link
              key={i}
              href='#'
              className='flex space-x-3 hover:bg-slate-300'
            >
              <Image
                src={`/placeholder.svg?height=94&width=168&text=Video${i}`}
                alt={`Video ${i}`}
                width={168}
                height={94}
                className='rounded-xl object-cover'
              />
              <div>
                <h4 className='font-semibold line-clamp-2'>Video Title {i}</h4>
                <p className='text-sm text-gray-500'>Channel Name</p>
                <p className='text-sm text-gray-500'>123K views • 1 day ago</p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}
