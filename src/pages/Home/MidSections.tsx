import phone from '../../assets/phone_14_01-removebg.png'
import tow from '../../assets/tow-truck-icon.png'
import bus from '../../assets/bus-icon.png'
import truck from '../../assets/truck-icon.png'
import bustwo from '../../assets/Bus.jpg'
import freight from '../../assets/freight-forward.jpg'
import towing from '../../assets/towing.jpg'


export default function MidSection(){
    return(
        <>
        <div className='flex my-32 ml-16 items-center'>
            <img src={bustwo} className='object-fill h-5/6 w-1/2 rounded-[48px]'></img>
            <div className='mx-32'>
            <p className='text-5xl h-48 font-bold font-montserrat text-slate-800'>Sit in comfort to your destination</p>
            <button className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded-xl mx-32 font-montserrat">Order Your Ride</button>
            </div>
        </div>

        <div className='flex my-36 ml-16 items-center'>
        <div className='mx-32'>
            <p className='text-5xl h-48 font-montserrat font-bold text-slate-800'>Drive to earn what you need</p>
            <button className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded-xl mx-32 font-montserrat">Become a driver</button>
            </div>
            <img src={freight} className='object-fill h-5/6 w-1/2 rounded-[48px]'></img>

        </div>

        <div className='flex my-32 ml-16 items-center'>
            <img src={towing} className='object-fill h-5/6 w-1/2 rounded-[48px]'></img>
            <div className='mx-32'>
            <p className='text-5xl h-48 font-bold font-montserrat text-slate-800'>Sit in comfort to your destination</p>
            <button className="block py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded-xl mx-32 font-montserrat">Order Your Ride</button>
            </div>
        </div>


        <section className='container container-md px-16 my-36 md:mb-40'> 
        <div className='my-72 md:mb-23'>
        <div className='items-center'><h1 className='text-5xl text-center mb-5 font-montserrat font-bold text-slate-800'>Our Services</h1></div>
        <div className='grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 mx-12'>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Trucking</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                        <img src={truck} className='absolute top-10 right-0 bottom-0 z-0 max-h-[130px] max-w-[130px] md:!max-h-[130px] md:!max-w-[130px]'></img>
                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Bus Hiring</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                        <img src={bus} className='absolute top-12 right-0 bottom-0 z-0 max-h-[130px] max-w-[130px] md:!max-h-[130px] md:!max-w-[130px] size-24'></img>
                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Towing</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                        <img src={tow} className='absolute top-6 right-0 bottom-0 z-0 max-h-[130px] max-w-[130px] md:!max-h-[130px] md:!max-w-[130px] size-26'></img>
                    </div>
                </div>
            </div>
            {/* <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Rides</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Rides</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                    </div>
                </div>
            </div>
            <div role='button' className='bg-[#D9D9D9] overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100'>
                <div className='relative z-10 w-full h-full'>
                    <div className='pb-14 md:pb-0 md:pr-26'>
                        <h5 className='font-semibold mt-0 text-lg md:text-2xl mb-2 font-montserrat'>Rides</h5>
                        <span className='inline-block mt-0 text-base leading-6 font-normal font-montserrat mb-0 text-secondary max-md:!text-sm'>Instant Requests, Timeless Rides</span>
                    </div>
                </div>
            </div> */}
            
        </div>
        </div>
        
        </section>
       


        <div className='items-center text-center'><h1 className='text-5xl mb-5 text-center font-montserrat font-bold text-slate-800'>Download our apps</h1></div>
            
            <section className='rounded-[12px] overflow-hidden ml-44 h-screen justify-center items-center w-9/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden md:gap-x-4 md:min-h-[560px] bg-[#8E2C2C]'>
                    <div className='flex flex-col justify-center pl-4 pr-4 pt-10 md:pt-8 md:pb-8 w-full mb-8 md:mb-0 md:pl-24 md:pr-0 md:rtl:pr-24 md:rtl:pl-0 '>
                    <h2 className="text-white text-center text-4xl font-montserrat">Instant Requests, Timeless Rides.</h2>
                <h2 className='text-white text-center text-2xl mt-8 font-montserrat'>Available on Android and iOS devices</h2>
                <button className='rounded bg-white h-10 w-36 text-bold mx-36 mt-10 font-montserrat'>Get the app</button>
                    </div>
                    <div className='flex justify-end items-end w-full h-full'>
                    <img src={phone} className='object-fill rounded-[48px]'></img>
                    </div>

                </div>
                <section/>

</section>
        
        </>
    )
}