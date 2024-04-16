import Footer from "../../components/footer";

export default function Otp(){
    return(
        <>
        <section>
            <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0 w-1/2">
                <h1 className="font-bold text-5xl mb-4 font-montserrat text-center w-1/2">Activate User Account</h1>

                <div className="flex flex-col w-1/2">
                    <label className="text-md mb-5 text-center font-montserrat">Already a member? Log In</label>
                    <input placeholder ='Enter activation code' className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                
                    <a className="font-montserrat text-md text-center text-1xl my-3" href='passwordreset'>Did not get the activation code? Resend</a>

                    <button className="bg-[#8E2C2C] rounded-full py-3 mb-3 text-white font-montserrat">Confirm Code</button>
                    <span className="text-center text-sm font-montserrat">By using Envoyer, you agree to our Privacy Policy, and Terms & Agreement.</span>
                </div>

            </div>
        </section>
        <Footer/>
        </>
    )
}