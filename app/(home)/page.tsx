import MainCarousel from "@/components/mainCarousel";
import MidpageNav from "@/components/midpageNav";
import SecondMidNav from "@/components/secondMidnav";

import Image from "next/image";
export default function Home() {
  return (
    <main className=' w-full h-auto flex flex-col items-center justify-center'>
      <MainCarousel />
      <MidpageNav />
      <SecondMidNav />
    </main>
  );
}
