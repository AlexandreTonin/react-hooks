import { Link } from 'react-router-dom'
import reactLogo from '/react.svg'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className='w-screen shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] bg-white sticky top-0'>
            <div className="h-16 lg:h-20 max-w-screen container mx-auto px-4 flex items-center justify-between">
                <div className='flex gap-4 items-center text-lg font-medium h-full'>
                    <Link to={"/"}><img src={reactLogo} alt="" className='w-10 hover:rotate-180 transition-all duration-700' /></Link>
                    <h1>React Hooks </h1>
                </div>
                <div className='flex lg:text-3xl text-2xl text-[#404040] rounded-full'>
                    <span className='hover:text-yellow-400 transition cursor-pointer'><IoSunnyOutline /></span>
                    <span className='hover:text-yellow-500 transition cursor-pointer'><IoMoonOutline /></span>
                </div>
            </div>
        </header>


    )
}