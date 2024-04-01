import redtruck from '../../assets/redtruck.jpg'
import IsVisible from '../../components/fade_intoview'

export default function CustomerRegisteration(){
    return(
        <>
        <IsVisible>
           <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
           <h1 className="font-bold text-4xl mb-5 font-montserrat">Join Envoyer, Unlock Your Shipping Potential</h1>
           
                <div className="flex size-10/12 bg-gray-200 rounded-lg">
                    <div className=" flex flex-col w-1/2 h-full rounded-lg items-center justify-center">
                    <h1 className="font-bold text-5xl mb-10 font-montserrat">Register</h1>
                        <div className="flex mb-5">
                            <input placeholder ='First Name' className="border border-opacity-20 rounded text-center border-neutral-700 block py-2 px-3 mr-2 font-montserrat"></input>
                            <input placeholder ='Last Name' className="border border-opacity-20 rounded text-center border-neutral-700 block py-2 px-3 mr-2 font-montserrat"></input>
                        </div>
                        <div>
                            <select className="border border-opacity-20 rounded text-center border-neutral-700 block py-2 px-[87px] mr-2 font-montserrat font-extralight">
                                <option value='select your category' className="text-center font-montserrat">Select your category</option>
                                <option value="volvo" className="text-center font-montserrat">Individual</option>
                                <option value="saab" className="text-center font-montserrat">Business</option>
                                <option value="fiat" className="text-center font-montserrat">Freight Forwarder </option>
                                <option value="audi" className="text-center font-montserrat">Clearing Agents </option>
                            </select>
                            <input placeholder ='Enter Email' className="mt-4 border-opacity-20 border rounded text-center border-neutral-700 block py-2 px-20 mr-2 font-montserrat"></input>
                            <input placeholder ='Phone number' className="mt-4 border-opacity-20 border rounded text-center border-neutral-700 block py-2 px-20 mr-2 font-montserrat"></input>
                            <input placeholder ='Enter password' className="mt-4 border-opacity-20 border rounded text-center border-neutral-700 block py-2 px-20 mr-2 font-montserrat"></input>
                            <input placeholder ='Confirm password' className="mt-4 border-opacity-20 border rounded text-center border-neutral-700 block py-2 px-20 mr-2 font-montserrat"></input>
                            <button className="bg-[#8E2C2C] rounded my-4 py-2 text-white px-20 items-center mt-12 justify-center ml-10 font-montserrat">Continue</button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full rounded-lg">
                        <img src={redtruck} className='h-full rounded-lg'></img>

                    </div>

                </div>

            </div>
            </IsVisible>
        </>
    )
}