import Image from "next/image";
export default function FlippedCard(prop: any) {
  return (
    <div className='flex md:h-80 md:w-64 h-64 w-44 items-center justify-center'>
      <div className='group md:h-80 md:w-64 h-64 w-44 [perspective:1000px]'>
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0'>
            <Image
              alt=''
              width={999}
              height={999}
              className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40'
              src={prop.src}
            ></Image>
          </div>
          <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]'>
            <div className='flex min-h-full flex-col items-center justify-center'>
              <h1 className='text-3xl font-bold'> {prop.head}</h1>

              <p className='text-base'>{prop.text}</p>
              <button className='mt-2 rounded-md bg-neutral-800 px-2 py-1 text-sm hover:bg-neutral-900'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
