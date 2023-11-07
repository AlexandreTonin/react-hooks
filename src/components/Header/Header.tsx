import { Link } from 'react-router-dom'
import reactLogo from '/react.svg'
import { AiFillGithub } from 'react-icons/ai'
import { GiFishingHook } from 'react-icons/gi'

export default function Header() {
    return (
        <header className="h-20 max-w-screen shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] px-4 flex items-center justify-between">
            <div className='flex gap-4 items-center text-lg font-medium h-full'>
                <Link to={"/"}><img src={reactLogo} alt="" className='w-10 hover:rotate-180 transition-all duration-700' /></Link>
                <h1>React Hooks </h1>
            </div>

            <a href="https://github.com/alexandretonin" target='_blank' className='hover:text-[#969696] transition'>
                <div className='gap-4 flex items-center'>
                    <p>/AlexandreTonin</p>
                    <AiFillGithub className="text-4xl" />
                </div>
            </a>
        </header>


    )
}