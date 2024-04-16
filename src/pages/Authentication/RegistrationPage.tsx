import { useState } from 'react';
import IsVisible from '../../components/fade_intoview';
import Footer from '../../components/footer';

interface AccountType {
    id: string;
    label: string;
}

const accountTypes: AccountType[] = [
    { id: '1', label: 'Personal' },
    { id: '2', label: 'Business' },
    { id: '4', label: 'Freight forwarders' },
    { id: '5', label: 'Clearing agents' }
];


export default function CustomerRegistration() {
    const [selectedType, setSelectedType] = useState<string>("1");
    const [showExtraInputs, setShowExtraInputs] = useState<boolean>(false);

    const handleAccountTypeChange = (id: string) => {
        setSelectedType(id);
        // Check if the selected type is one of the types where extra inputs should be hidden
        if (id === '1' || id === '5') {
            setShowExtraInputs(false);
        } else {
            setShowExtraInputs(true);
        }
    };
    return (
        <>
            <IsVisible>
                <article className="grid grid-cols-1 md:grid-cols-2 container px-48 mx-auto my-12" id="page-signup">
                    <div className="flex flex-col w-11/12" id="page-signup-content">
                        <div className="">
                            <div className="mb-6 text-start">
                                <a href="https://www.envoyergh.com/" id="app-logo" className="inline-block">
                                    <img src="https://www.envoyergh.com/media/img/icons/official-logo.jpg" alt="Envoyer Logo"/>
                                </a>
                            </div>

                            <div className=''>
                            <div className="flex items-center mb-6">
                                <div className="mr-4">
                                    <i className="icon-checkmark2"></i>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Security</h2>
                                    <p className='text-1xl font-montserrat'>Envoyer exposes you to drivers who are willing to deliver your goods at fair deals. These drivers are vetted to make sure that you know exactly who you are working with.</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="mr-4">
                                    <i className="icon-checkmark2"></i>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Operational support</h2>
                                    <p className='text-1xl font-montserrat'>We do send you updates on new changes and implementations taking place at Envoyer. We are also available to answer your queries all the time. Call <a className="text-[#8E2C2C] hover:underline" href="tel:+233508286531">+233508286531</a> or email us with <a className="text-[#8E2C2C] hover:underline" href="mailto:info@envoyer.com">E-mail: info@envoyer.com</a> for more inquiries.</p>
                                </div>
                            </div>

                            <div className="flex items-center mb-6">
                                <div className="mr-4">
                                    <i className="icon-checkmark2"></i>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Competitive pricing</h2>
                                    <p className='text-1xl font-montserrat'>Since we expose you to multiple vetted drivers, they can bid whilst you choose your favorite candidate based on fair price, reviews, and other factors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>








                    <div className="flex flex-col justify-start" id="page-signup-content">
                        <div className="">
                            <h1 className="text-5xl mb-6 font-bold font-montserrat">Join and enjoy the best of Envoyer.</h1>

                            <div className="mb-6">
                                <div>
                                    <p><span className="text-lg font-semibold">I want to <a href="signup_partner" className="text-[#8E2C2C] hover:underline">Join as a driver</a></span></p>
                                    <p><span className="text-lg font-semibold">Already a member? <a href="login" className="text-[#8E2C2C] hover:underline">Log In</a></span></p>
                                </div>
                            <div id="account-signup">
                                {/* <!-- account type selector --> */}
                                <div className="grid grid-cols-2 gap-2">
                                            {accountTypes.map(type => (
                                                <div key={type.id}>
                                                    <div className={`choose-account-container-item flex py-auto ${selectedType === type.id ? "active" : ""}`} onClick={() => handleAccountTypeChange(type.id)}>
                                                        <div>
                                                            <span className="trans choose-account-container-item-selector flex-item-justify-content-center flex-item flex-item-align-items-center"><span></span></span>
                                                        </div>
                                                        <div className="flex-item-flex-grow-1">{type.label}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        
                                <div className='flex flex-col gap-4 mt-4'>
                                <div className="flex flex-col gap-4">
                                       
                                        <input placeholder ='Surname' className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        <input placeholder ='First name' className="border rounded-lg text-center border-opacity-20 border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                    
                                </div>
                                {showExtraInputs && (
                                <div className="flex flex-col gap-4">
                                       
                                       <input placeholder ='Business name' className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                       <input placeholder ='Enter your Business Registration/Licence Number' className="border rounded-lg text-center border-opacity-20 border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                   
                               </div>
                                )}

                                <div className="flex flex-col gap-4">
                                        
                                        <input placeholder ='Your Email' className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        <input placeholder ='Enter Ghana Card Number' className="border rounded-lg text-center border-opacity-20 border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        
                                </div>

                                <div className="flex flex-col gap-4">
                                        
                                        <input placeholder ='Mobile number' className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        <input placeholder ='Whatsapp number' className="border rounded-lg text-center border-opacity-20 border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        
                                </div>

                                <div className="flex flex-col gap-4">
                                        
                                        <input placeholder ='Choose your City' className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        
                                        
                                </div>

                                <div className="flex flex-col gap-4">
                                    
                                        <input placeholder ='Password' className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        <input placeholder ='Confirm password' className="border rounded-lg text-center border-opacity-20 border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        
                                </div>
                                </div>
                                {/* <!-- /for business --> */}
                            </div>
                            <div className="flex flex-col">
                            <a href='otp-verification' className='flex flex-col'><button className="bg-[#8E2C2C] rounded-full mt-5 py-3 text-white font-montserrat">Continue</button></a>
                            </div>
                            </div>

                            <div className="text-start">
                                <small className="block"><b><a href="otp-verification" className="text-[#8E2C2C] hover:underline">Account not activated? Resend verification email.</a></b></small>
                                <small className="block"><b><a href="recover_user_account_sms" className="text-[#8E2C2C] hover:underline">Account not activated? Resend activation SMS.</a></b></small>
                            </div>

                            <p className="text-start mt-6 w-10/12">By using Envoyer, you agree to our <b><a href="privacy" className="text-[#8E2C2C] hover:underline">Privacy Policy</a></b>, and <b><a href="terms" className="text-[#8E2C2C] hover:underline">Terms & Agreement</a></b>.</p>
                        </div>
                    </div>
                </article>
            </IsVisible>

            <Footer/>
        </>
    )
}
