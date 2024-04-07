import truck from '../assets/truck.jpg'
import { Link } from 'react-router-dom'
import IsVisible from './fade_intoview'
import { useState } from 'react';


export default function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleLanguageChange = (language:any) => {
      setSelectedLanguage(language);
      setShowDropdown(false); // Close the dropdown after selecting a language
    };

    const renderIcon = () => {
        // Logic to determine which icon to display based on selectedLanguage
        if (selectedLanguage === 'EN') {
          return (
            // <svg
            //   className="w-4 h-4"
            //   viewBox="0 0 20 20"
            //   fill="currentColor"
            // >
              <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="10" ry="10" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
            // </svg>
          );
        } else if (selectedLanguage === 'FR') {
          return (
            // <svg
            //   className="w-4 h-4"
            //   viewBox="0 0 20 20"
            //   fill="currentColor"
            // >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
            // </svg>
          );
        }
        // Add additional conditions for other languages
      };


    return (
        <header>
            <nav className="absolute bg-white opacity-96 z-10 border-gray-200 md:h-16 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Navigation Links */}
                    <div className="">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
                            <li><a href="#" className="block py-2 px-3 font-montserrat">Home</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat">About</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat" aria-current="page">Services</a></li>
                            <li><a href="#" className="block py-2 px-3 font-montserrat">Contact Us</a></li>
                            {/* <li><a href="#" className="block py-2 px-3 font-montserrat">Make New Request</a></li> */}
                            <li className="relative">
                                <div className="dropdown">
                                    <button className="dropbtn block py-2 px-3 font-montserrat font-normal my-auto">Support 
                                        <i className="fa fa-caret-down"></i>
                                        </button>
                                        <div className="dropdown-content rounded-md">
                                        <a href="#">FAQ</a>
                                        <a href="#">Help</a>
                                    </div>
                                </div>                                 
                            </li>
                            <li>
                            {/* <select className="border border-opacity-20 rounded text-center border-neutral-700 block py-2 px-3 ml-20 font-montserrat">
                                <option value='select your category' className="text-center py-2 px-3 font-montserrat">
                                <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>
       
                                    English
                                </option>
                                <option value="volvo" className="text-center py-2 px-3 font-montserrat">French</option>
                            </select> */}
                            </li>
                        </ul>
                        
                    </div>

                    {/* Sign Up and Login Links */}
                    <div className="hidden w-screen self-end md:block md:w-auto justify-self-end justify-items-end" id="navbar-default">
                        <div className="font-medium self-end flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">

                        <div className="relative block py-2 px-3 my-auto mr-2 font-montserrat">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex items-center space-x-1 focus:outline-none"
        >
          {/* <svg
            className="w-5 h-5 rounded-full text-center text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          > */}
            {renderIcon()}
          {/* </svg> */}
          <span className="text-sm">{selectedLanguage}</span>
          
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`hidden sm:flex h-6 w-6 ${
              showDropdown ? 'rotate-180' : ''}`}><path d="M11.2929 15.2929L7.70713 11.7071C7.07716 11.0771 7.52333 10 8.41424 10H15.5858C16.4767 10 16.9229 11.0771 16.2929 11.7071L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929Z" fill="currentColor"></path></svg>

        </button>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg z-10">
            <ul className="py-1">
              <li>
                <button
                  type="button"
                  onClick={() => handleLanguageChange('EN')}
                  className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left focus:outline-none flex items-center space-x-2"
                >
                  {/* <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  > */}
                    <svg xmlns="http://www.w3.org/2000/svg"  width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="10" ry="10" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg><span>EN</span>
                 
                  

                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLanguageChange('FR')}
                  className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 w-full text-left focus:outline-none flex items-center space-x-2"
                >
                  {/* <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  > */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#092050"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#be2a2c"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg><span>FR</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

                            

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
                    <div className="absolute inset-0 md:w-full h-96 w-[320px] md:h-full bg-gradient-to-l from-transparent to-black opacity-50"></div>
                    {/* Text */}
                    <div className='absolute md:w-2/4 md:top-20 md:bottom-1/4 md:flex md:flex-col md:mt-12'>
                        <h2 className="text-white md:text-center mt-20 font-medium text-2xl md:text-5xl md:ml-20 font-montserrat">Connect Shippers and Carriers Seamlessly</h2>
                        <h2 className='text-white text-center text-3xl md:text-5xl font-montserrat md:ml-20 font-medium'>with us</h2>
                    </div>
                </div>
            </div>
            </IsVisible>
            <IsVisible>
                <div className='relative'> 
            <h1 className='text-center font-montserrat text-5xl font-extrabold mb-8 text-slate-800'>WELCOME TO THE ENVOYER UNIVERSE</h1>
            {/* <h1 className='text-center font-montserrat text-4xl font-semibold text-slate-800'>ENVOYER IS CHANGING THE WAY THE WORLD THINKS ABOUT FREIGHT</h1> */}
            <div className='md:mx-32 items-center self-center justify-center text-center'>
            <h5 className='text-center self-center justify-center font-montserrat text-2xl mt-10 text-slate-800'>Envoyer Freight is the first freight app of its type in Ghana that brings 21st century technology which is revolutionizing the trucking brokerage industry. Impactful benefits include increasing carrier pay while reducing shipping cost & paying carriers in two days or less. Optimizing load availability via AI and GPS, reducing deadhead and empty miles.</h5>
            </div>
            </div>
            
            </IsVisible>
        </header>
    )
}
