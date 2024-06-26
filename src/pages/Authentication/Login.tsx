// import apple from '../../assets/apple-logo.png'
// import facebook from '../../assets/facebook.png'

import { Link } from "react-router-dom";
import Footer from "../../components/footer";

export default function Login(){
    return(
      <>
      <header className="flex mt-4 mr-72 justify-end">
      <Link to={'signup'}><a href="signup" className="py-2 px-3 bg-transparent font-semibold text-black hover:text-white hover:bg-black border border-black hover:border-transparent rounded-full font-montserrat">Sign Up</a></Link>
      </header>

        <section>
            <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
                <h1 className="font-bold text-5xl mb-6 font-montserrat">Welcome back.</h1>

                <div className="flex flex-col gap-y-4 w-3/12">
                    <label className="text-lg mb-2 text-center font-semibold font-montserrat">New to Envoyer? <a className="text-[#8E2C2C]">Sign Up</a> </label>
                    <select className="border rounded text-center border-opacity-20 border-neutral-700 block py-3 px-3 mr-2 font-montserrat">
                      <option value='Login as a/an'>Login as a/an</option>
                      <option value='Individual'>Individual</option>
                      <option value='Business'>Businessn</option>
                      <option value='Driver/Rider'>Driver/Rider</option>
                      <option value='Freight Forwarder'>Freight Forwarder</option>
                      <option value='Clearing agent'>Clearing agent</option>
                    </select>
                  
                    <input placeholder ='Enter phone number or email' className="border border-opacity-20 rounded text-center border-neutral-700 block py-3 font-montserrat"></input>
                    <input placeholder ='Enter password' type="password" className="border rounded text-center border-opacity-20 border-neutral-700 block py-3 px-3 font-montserrat"></input>
                    <a className="font-montserrat font-bold text-sm text-center text-[#8E2C2C]" href='passwordreset'>Forgot password?</a>
                    <button className="bg-[#8E2C2C] rounded-full py-2 text-white font-montserrat">Continue</button>
                    <a className="font-montserrat text-sm text-center" href='passwordreset'>By using Envoyer, you agree to our Privacy Policy, and Terms & Agreement.</a>
                </div>


                {/* <p className="font-montserrat text-sm">_____________________OR_____________________</p>

                <div className="flex flex-col">
                    <button className="bg-[#D9D9D9] rounded mb-1 mt-4 py-2 px-20 text-black font-montserrat flex"><svg className="h-5 w-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_13183_10121)">
                  <path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"></path>
                  <path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"></path>
                  <path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"></path>
                  <path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"></path>
                </g>
                <defs>
                  <clipPath id="clip0_13183_10121">
                    <rect width="20" height="20" fill="white" transform="translate(0.5)"></rect>
                  </clipPath>
                </defs>
              </svg>Continue with Google</button>
                    <button className="bg-[#D9D9D9] rounded my-1 py-2 text-black font-montserrat flex text-center"><img src={apple} className="h-5 w-5 ml-20 mr-2"></img>Continue with Apple</button>
                    <button className="bg-[#D9D9D9] rounded my-1 py-2 text-black font-montserrat flex text-center"><img src={facebook} className="h-5 w-5 ml-20 mr-2"></img>Continue with Facebook</button>
                </div> */}
            </div>
        </section>
        <Footer/>
        </>
    )
}