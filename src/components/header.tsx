import truck from '../assets/truck.jpg'
import { Link } from 'react-router-dom'
import IsVisible from './fade_intoview'

export default function Header() {
    return (
        <header>
            <nav className="bg-white opacity-96 z-10 border-gray-200 md:h-16">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Navigation Links */}
                    <div className="mr-28">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
                            <li><a href="#" className="block py-2 px-3 font-montserrat">Home</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat" aria-current="page">Services</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat">Contact Us</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat">About</a></li>
                            <li className="relative">
                                <a href="#" className="block py-2 px-3 font-montserrat">Support</a>
                                <ul className="absolute z-10 hidden bg-white border border-gray-100 mt-2 py-2 px-3 rounded-lg">
                                    <li><a href="#" className="block py-2 px-3 font-montserrat">Request</a></li>
                                    <li><a href="#" className="block py-2 px-3 font-montserrat">Help</a></li>
                                    <li><a href="#" className="block py-2 px-3 font-montserrat">FAQ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Sign Up and Login Links */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <Link to={'login'}><a href="login" className="block py-2 px-3 font-bold mr-2 font-montserrat">Login</a></Link>
                            <Link to={'signup'}><a href="signup" className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded font-montserrat">Sign Up</a></Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header Image and Text */}
            <IsVisible>
            <div className='relative w-full md:min-h-screen md:py-10 md:mb-40 md:mt-0 mt-7'>
                <div className="h-full w-full object-cover p-0 object-center top-0 left-0 right-0 bottom-0 absolute inset-0">
                    {/* Background Image */}
                    <img src={truck} className='object-cover overscroll-none h-96 md:h-full w-[320px] md:w-full bottom-0 md:top-0 block absolute object-center inset-0' />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 md:w-full h-96 w-[320px] md:h-full bg-gradient-to-r from-transparent to-black opacity-50"></div>
                    {/* Text */}
                    <div className='absolute md:w-2/4 md:top-8 right-14 md:bottom-1/4 md:flex md:flex-col md:mt-12'>
                        <h2 className="text-white md:mx-0 mr-12 text-center md:text-center text-2xl md:text-5xl ml-0 md:ml-20 font-montserrat">Connecting Shippers and Carriers Seamlessly</h2>
                        <h2 className='text-white text-center text-3xl md:text-5xl font-montserrat md:ml-20'>with us</h2>
                    </div>
                </div>
            </div>
            </IsVisible>
            <IsVisible>
            <h1 className='text-center font-montserrat text-5xl font-semibold text-slate-800'>WELCOME TO THE ENVOYER UNIVERSE</h1>
            </IsVisible>
        </header>
    )
}
