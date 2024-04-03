import truck from '../assets/truck.jpg'
import { Link } from 'react-router-dom'
import IsVisible from './fade_intoview'
import apple from '../assets/apple-logo.png'

export default function Header() {



    return (
        <header>
            <nav className="absolute bg-white opacity-96 z-10 border-gray-200 md:h-16 md:w-screen">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Navigation Links */}
                    <div className="">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
                            <li><a href="#" className="block py-2 px-3 font-montserrat">Home</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat">About</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat" aria-current="page">Services</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat">Contact Us</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat">Make New Request</a></li>
                            <li className="relative">
                                <div className="dropdown">
                                    <button className="dropbtn block py-2 px-3 font-medium my-auto">Support 
                                        <i className="fa fa-caret-down"></i>
                                        </button>
                                        <div className="dropdown-content rounded-md">
                                        <a href="#">FAQ</a>
                                        <a href="#">Help</a>
                                    </div>
                                </div>                                 
                            </li>
                            <li>
                            <select className="border border-opacity-20 rounded text-center border-neutral-700 block py-2 px-3 ml-20 font-montserrat">
                                <option value='select your category' className="text-center py-2 px-3 font-montserrat">
                                    English
                                </option>
                                <option value="volvo" className="text-center py-2 px-3 font-montserrat">French</option>
                            </select>
                            </li>
                        </ul>
                        
                    </div>

                    {/* Sign Up and Login Links */}
                    <div className="hidden w-screen self-end md:block md:w-auto justify-self-end justify-items-end" id="navbar-default">
                        <div className="font-medium self-end flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <Link to={'login'}><a href="login" className="block py-2 px-3 font-bold mr-2 font-montserrat">Login</a></Link>
                            <Link to={'signup'}><a href="signup" className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded font-montserrat">Sign Up</a></Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Header Image and Text */}
            <IsVisible>
            <div className='w-full md:min-h-screen md:py-10 md:mb-40 md:mt-0 mt-7'>
                <div className="h-full w-full object-cover p-0 object-center top-0 left-0 right-0 bottom-0 absolute inset-0">
                    {/* Background Image */}
                    <img src={truck} className='object-cover overscroll-none h-96 md:h-full w-[320px] md:w-full bottom-0 md:top-0 block absolute object-center inset-0' />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 md:w-full h-96 w-[320px] md:h-full bg-gradient-to-r from-transparent to-black opacity-50"></div>
                    {/* Text */}
                    <div className='absolute md:w-2/4 md:top-8 right-14 md:bottom-1/4 md:flex md:flex-col md:mt-12'>
                        <h2 className="text-white md:mx-0 mr-12 text-center md:text-center text-2xl md:text-5xl ml-0 md:ml-20 font-montserrat">Connect Shippers and Carriers Seamlessly</h2>
                        <h2 className='text-white text-center text-3xl md:text-5xl font-montserrat md:ml-20'>with us</h2>
                    </div>
                </div>
            </div>
            </IsVisible>
            <IsVisible>
                <div className='relative'> 
            <h1 className='text-center font-montserrat text-5xl font-extrabold mb-8 text-slate-800'>WELCOME TO THE ENVOYER UNIVERSE</h1>
            <h1 className='text-center font-montserrat text-4xl font-semibold text-slate-800'>ENVOYER IS CHANGING THE WAY THE WORLD THINKS ABOUT FREIGHT</h1>
            <div className='md:mx-96 items-center self-center justify-center text-center'>
            <h5 className='text-center self-center justify-center font-montserrat text-2xl mt-10 text-slate-800'>Envoyer Freight is the first freight app of its type in the Ghana that brings 21st century technology which is revolutionizing the trucking brokerage industry. Impactful benefits include increasing carrier pay while reducing shipping cost & paying carriers in two days or less. Optimizing load availability via AI and GPS, reducing deadhead and empty miles.</h5>
            </div>
            </div>
            
            </IsVisible>
        </header>
    )
}
