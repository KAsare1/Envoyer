
export default function Otp(){
    return(
        <section>
            <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0 w-1/2">
                <h1 className="font-bold text-5xl mb-6 font-montserrat text-center w-1/2">Activate User Account</h1>

                <div className="flex flex-col w-1/2">
                    <label className="text-xl mb-5 text-center font-montserrat">Already a member? Log In</label>
                    <input placeholder ='Enter activation code' className="border border-opacity-20 rounded text-center border-neutral-700 block py-2 px-3 mr-2 font-montserrat"></input>
                
                    <a className="font-montserrat text-center text-sm my-3" href='passwordreset'>Did not get the activation code? Resend</a>

                    <button className="bg-[#8E2C2C] rounded my-4 py-2 text-white font-montserrat">Confirm Code</button>
                    <span className="text-center font-montserrat">By using Envoyer, you agree to our Privacy Policy, and Terms & Agreement.</span>
                </div>

            </div>
        </section>
    )
}