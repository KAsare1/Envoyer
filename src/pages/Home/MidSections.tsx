import phone from '../../assets/phone_14_01-removebg.png'
import tow from '../../assets/tow-truck-icon.png'
import bus from '../../assets/bus-icon.png'
import truck from '../../assets/truck-icon.png'
import bustwo from '../../assets/Bus.jpg'
import freight from '../../assets/freight-forward.jpg'
import towing from '../../assets/towing.jpg'
import IsVisible from '../../components/fade_intoview'



export default function MidSection(){



    return(
        <>
        <IsVisible>
        <section className='justify-center items-center'> 
        <div className='my-32 items-center justify-center'>
        <div className='grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3 md:mx-12 mx-24 items-center justify-center self-center'>
            <div role='button' className='bg-[#D9D9D9] bg-opacity-50 self-center overflow-hidden relative p-4 md:p-20 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-5 font-montserrat text-center'>Let Our Experts Lead The Way</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Our more than 70 years of transportation management experience combined with deep vertical knowledge means you can tap into industry-leading experts and processes to keep your business running smoothly with Envoyer freight.</span>

                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] bg-opacity-50 self-center overflow-hidden relative p-4 md:p-20 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-5 font-montserrat text-center'>Boost Results With Real-Time Intel</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Envoyer app's AI-optimized network is working for you 24/7, computing data across the shipper and carrier network to give you unparalleled visibility which means you can take actions to optimize your operations.</span>
                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] bg-opacity-50 self-center overflow-hidden relative p-4 md:p-20 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-5 font-montserrat'>Improve Operational Efficiency</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Easily handle capacity issues and uncover budget and time savings with our dynamic capacity solutions. From spot to contract needs, LTL to FTL and everything in between, we’ve got you covered.</span>
                        
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        
        </section>
        </IsVisible>


        <IsVisible>
        <div className='relative mb-5 mt-96 pt-16 md:flex md:my-32 md:ml-16 md:items-center'>
            <img src={bustwo} className='object-fill md:h-5/6 md:w-1/2 h-56 md:ml-0 ml-9 w-[250px] md:rounded-[48px]'></img>
            <div className='md:mx-32 mx-3'>
            <p className='md:text-5xl md:h-48 font-bold font-montserrat md:mt-0 mt-10 text-slate-800'>Sit in comfort to your destination</p>
            <button className="block py-2 px-7 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded-xl md:mx-32 font-montserrat">Hire a bus</button>
            </div>
        </div>
        </IsVisible>

        <IsVisible>
        <div className='md:flex md:my-36 mb-5 md:ml-16 md:items-center'>
            <div className='md:mx-32 mx-3'>
            <p className='md:text-5xl md:h-48 font-bold font-montserrat md:mt-0 mt-10 text-slate-800'>The future of freight is here</p>
            <button className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded-xl ml-12 font-montserrat">Become a driver</button>
            </div>
            <img src={freight} className='object-fill md:h-5/6 md:w-1/2 h-56 md:ml-0 ml-9 w-[250px] md:rounded-[48px]'></img>
        </div>
        </IsVisible>

        <IsVisible>
        <div className='md:flex md:ml-16 items-center'>
            <img src={towing} className='object-fill md:h-5/6 md:w-1/2 h-56 md:ml-0 ml-9 w-[250px] md:rounded-[48px]'></img>
            <div className='md:mx-32 mx-3'>
            <p className='md:text-5xl md:h-48 font-bold font-montserrat md:mt-0 mt-10 text-slate-800'>Reliable Towing, Rapid Response</p>
            <button className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded-xl md:mx-32 font-montserrat">Order Your Ride</button>
            </div>
        </div>
        </IsVisible>




        <IsVisible>
        <section className='px-16 justify-center'> 
        <div className='my-32 justify-center items-center'>
        <div className='items-center'>
            <h1 className='md:text-5xl text-4xl md:text-center mb-5 font-montserrat font-bold text-slate-800 text-center'>Our Services</h1>
            <h1 className='md:text-1xl text-1xl md:text-center mb-10 font-montserrat font-semibold text-slate-800 text-center'>Products and features vary by country. Some features listed here may not be available in your app.</h1>
        </div>
        
        <div className='grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3 md:mx-12 mr-24'>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Trucking</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                        <img src={truck} className='opacity-60 mx-auto self-center justify-center max-h-[130px] max-w-[130px] md:!max-h-[130px] md:!max-w-[130px]'></img>
                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Bus Hiring</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                        <img src={bus} className='opacity-60 mx-auto self-center justify-center mt-5 max-h-[130px] max-w-[130px] md:!max-h-[130px] md:!max-w-[130px] size-24'></img>
                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Towing</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                        <img src={tow} className='opacity-60 mx-auto self-center justify-center bottom-0 max-h-[130px] max-w-[130px] md:!max-h-[130px] md:!max-w-[130px] size-26'></img>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        
        </section>
        </IsVisible>




<IsVisible>
        <div className='md:items-center md:text-center'><h1 className='md:text-5xl text-3xl md:mb-5 mr-36 md:mr-12 text-center font-montserrat font-bold text-slate-800'>Download our apps</h1></div>
            
            <section className='rounded-[12px] overflow-hidden md:ml-44 mb-20 justify-center items-center w-9/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden md:gap-x-4 md:min-h-[560px] bg-[#8E2C2C]'>
                    <div className='flex flex-col justify-center pl-4 pr-4 pt-10 md:pt-8 md:pb-8 w-full mb-8 md:mb-0 md:pl-24 md:pr-0 md:rtl:pr-24 md:rtl:pl-0 '>
                    <h2 className="text-white text-center text-4xl font-montserrat">Instant Requests, Timeless Services.</h2>
                <h2 className='text-white text-center text-2xl mt-8 font-montserrat'>Available on Android and iOS devices</h2>
                <button className='rounded bg-white md:ml-0 ml-16 h-10 w-36 text-bold self-center mt-10 font-montserrat'>Get the app</button>
                    </div>
                    <div className='flex justify-end items-end w-full h-full'>
                    <img src={phone} className='object-fill rounded-[48px]'></img>
                    </div>

                </div>
                <section/>


</section>
</IsVisible>
        </>
    )
}