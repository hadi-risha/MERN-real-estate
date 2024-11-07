import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
                <Link to='/' >   {/* navigate without refresh */}
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'> {/*after mobile text size will be xl */}
                    {/* <span className='text-slate-300'>Prime</span> */}
                    <span className='text-slate-700'>Salford & Co.</span>
                    
                </h1>
                </Link>
                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' 
                    className='bg-transparent focus:outline-none h-4 w-24 sm:w-64'/>{/* 1st width for mobile, 2nd for sm and above screen */}
                    <FaSearch className="text-slate-600 p-0" />
                </form>
                <ul className="flex gap-4">
                    <Link to='/'>
                        <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li className="text-slate-700 hover:underline">Sign in</li>
                    </Link>
                </ul>

            </div>
             
        </header>
    </div>
  )
}

