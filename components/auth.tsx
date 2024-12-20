import Link from "next/link";
import { UserMenu } from "./user";

export default function Auth() {
  const isLogging = false;
  return (
    <div className='flex items-center justify-center gap-x-2'>
      <div
        className={
          isLogging ? "hidden" : "flex items-center justify-center gap-x-2"
        }
      >
        <Link
          href='/'
          className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          Login
        </Link>

        <Link
          href='/'
          className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
        >
          Sign up
        </Link>
      </div>
      <div className={isLogging ? "block" : "hidden"}>
        <UserMenu />
      </div>
    </div>
  );
}
