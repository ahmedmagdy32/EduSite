import ClassicCourseCard from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  const catData = [
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
    {
      title: "welcome world",
      interviewer: "san siro",
      views: 20,
      date: "11-3-2000",
      description: " this is an awsome book written by san siro in 1195 A.D",
      src: "/logo1.jpg",
      href: "/",
    },
  ];
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-y-2'>
      <div className='border-4 border-black w-full h-16 mb-2 flex items-center justify-start px-2 text-2xl font-bold shadow-md shadow-blue-500 font-serif bg-gradient-to-r from-black to-slate-500 text-white rounded-lg mx-auto'>
        recent upload :
      </div>
      <div className='w-full h-[48rem] flex p-1 items-start justify-center gap-x-2 gap-y-2 flex-wrap overflow-y-scroll'>
        {catData.map((value, index) => (
          <ClassicCourseCard
            key={index}
            title={value.title}
            interviewer={value.interviewer}
            views={value.views}
            date={value.date}
            description={value.description}
            src={value.src}
            href={value.href}
          />
        ))}
      </div>
    </div>
  );
}
