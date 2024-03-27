import truck from '../assets/truck.jpg'
import { Link } from 'react-router-dom'


export default function Header(){
    return(
            
<>
<nav className="bg-white opacity-96 z-10 border-gray-200  h-16">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button> */}
    
    <div className="mr-28">
  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
    <li>
      <a href="#" className="block py-2 px-3 font-montserrat">Home</a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 font-montserrat" aria-current="page">Services</a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 font-montserrat">Contact Us</a>
    </li>
    <li>
      <a href="#" className="block py-2 px-3 font-montserrat">About</a>
    </li>
    <li className="relative">
      <a href="#" className="block py-2 px-3 font-montserrat">Support</a>
      <ul className="absolute z-10 hidden bg-white border border-gray-100 mt-2 py-2 px-3 rounded-lg">
        <li>
          <a href="#" className="block py-2 px-3 font-montserrat">Request</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 font-montserrat">Help</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 font-montserrat">FAQ</a>
        </li>
      </ul>
    </li>
  </ul>
</div>



    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
      <Link to={'login'}><a href="login" className="block py-2 px-3 font-bold mr-2 font-montserrat">Login</a></Link>
      <a href="signup" className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded font-montserrat">Sign Up</a>

      </div>
    </div>
  </div>
</nav>
<div className='relative w-full min-h-screen py-[120px] md:py-10 bg-neutral-primary mb-32 md:mb-40'>
        <div className="h-full w-full object-cover p-0 object-center top-0 left-0 right-0 bottom-0 absolute bg-stone-950 overlay gradient-to-45 inset-0">    
            <img src={truck} className='object-cover overscroll-none h-full w-full bottom-0 block absolute object-center inset-0 '/>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-50"></div>
            <div className='absolute w-2/4 top-8 right-14 bottom-1/4 flex-col mt-12'>
                <h2 className="text-white text-center text-5xl ml-20 font-montserrat">Connecting Shippers and Carriers Seamlessly</h2>
                <h2 className='text-white text-center text-5xl font-montserrat ml-20'>with us</h2>
            </div>
            </div>
        </div>
</>

    )
}