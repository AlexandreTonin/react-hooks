import { Link } from 'react-router-dom'
import reactLogo from '/react.svg'
import { AiFillGithub } from 'react-icons/ai'

export default function Header() {
    return (
        <header className="h-20 w-screen shadow-md px-4 flex items-center justify-between">
            <div className='flex gap-4 items-center text-lg font-medium h-full'>
                <Link to={"/"}><img src={reactLogo} alt="" className='w-10' /></Link>
                <h1>React Hooks</h1>
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