export default function LessonsLayout({
  children,
  sidenav,

  notifications,
}: {
  children: React.ReactNode;
  sidenav: React.ReactNode;

  notifications: React.ReactNode;
}) {
  return (
    <div className='w-full '>
      <div className='border-4 border-black w-[99%] h-16 mb-2 flex items-center justify-start px-2 text-3xl font-bold shadow-md shadow-blue-500 font-serif bg-gradient-to-r from-black to-slate-500 text-white rounded-lg mx-auto'>
        {children}
      </div>
      <div className='flex w-full  '>
        <div className=''>{sidenav}</div>
        <div className='bg-gray-700 flex flex-1  min-h-screen'>
          {notifications}
        </div>
      </div>
    </div>
  );
}
