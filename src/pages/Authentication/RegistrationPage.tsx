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

                                    <select className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"> 
                                    <option value="">Choose your city</option>
                                    <option value="79">Aboso</option>
                                    <option value="67">Aburi</option>
                                    <option value="1">Accra</option>
                                    <option value="37">Adenta East</option>
                                    <option value="25">Aflao</option>
                                    <option value="44">Agogo</option>
                                    <option value="26">Agona Swedru</option>
                                    <option value="31">Akim Oda</option>
                                    <option value="78">Akim Swedru</option>
                                    <option value="73">Akropong</option>
                                    <option value="59">Akwatia</option>
                                    <option value="45">Anloga</option>
                                    <option value="72">Anomabu</option>
                                    <option value="56">Apam</option>
                                    <option value="41">Asamankese</option>
                                    <option value="5">Ashaiman</option>
                                    <option value="55">Axim</option>
                                    <option value="82">Banda Ahenkro</option><option value="24">Bawku</option><option value="69">Bechem</option><option value="51">Begoro</option><option value="80">Bekwai</option><option value="29">Berekum</option><option value="63">Bibiani</option><option value="27">Bolgatanga</option><option value="7">Cape Coast</option><option value="18">Dome</option><option value="81">Drobo</option><option value="70">Duayaw Nkwanta</option><option value="50">Dunkwa-on-Offin</option><option value="47">Effiakuma</option><option value="22">Ejura</option><option value="49">Elmina</option><option value="65">Foso</option><option value="20">Gbawe</option><option value="15">Ho</option><option value="33">Hohoe</option><option value="71">Kade</option><option value="61">Keta</option><option value="74">Kete-Krachi</option><option value="75">Kibi</option><option value="36">Kintampo</option><option value="53">Kintampo</option><option value="12">Koforidua</option><option value="40">Konongo</option><option value="76">Kpandae</option><option value="52">Kpandu</option><option value="2">Kumasi</option><option value="17">Lashibi</option><option value="11">Madina</option><option value="39">Mampong</option><option value="77">Mpraeso</option><option value="68">Mumford</option><option value="54">Navrongo</option><option value="30">Nkawkaw</option><option value="38">Nsawam</option><option value="16">Nungua</option><option value="62">Nyakrom</option><option value="66">Nyankpala</option><option value="8">Obuasi</option><option value="21">Oduponkpehe</option><option value="83">Other</option><option value="46">Prestea</option><option value="57">Salaga</option><option value="58">Saltpond</option><option value="43">Savelugu</option><option value="4">Sekondi-Takoradi</option><option value="60">Shama</option><option value="64">Somanya</option><option value="35">Suhum</option><option value="6">Sunyani</option><option value="28">Tafo</option><option value="23">Taifa</option><option value="3">Tamale</option><option value="48">Tarkwa</option><option value="14">Techiman</option><option value="10">Tema</option><option value="19">Tema New Town</option><option value="9">Teshie</option><option value="13">Wa</option><option value="42">Wenchi</option><option value="32">Winneba</option><option value="34">Yendi</option><option value="83">Other</option>
                                    
                                    </select>
                                        
                                    
                                        
                                        
                                </div>

                                <div className="flex flex-col gap-4">
                                    
                                        <input placeholder ='Password' type="password" className="border border-opacity-20 rounded-lg text-center border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        <input placeholder ='Confirm password' type="password" className="border rounded-lg text-center border-opacity-20 border-neutral-700 block py-3 px-3 mr-2 font-montserrat"></input>
                                        
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
