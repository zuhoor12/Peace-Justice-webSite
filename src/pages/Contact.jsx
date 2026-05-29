import Navbar  from'../component/Navbar'
import Footer from '../component/Footer'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
function Contact(){
    return (
        <>
            
            <div className="max-w-full bg-[hsl(43_33%_96%)]">
                <div className="max-w-full  h-130 bg-[#003366] flex items-center justify-center flex-col">
                    <div className="max-w-300 w-[90%]   h-full ">
                        <Navbar />
                        <div className="flex flex-col">
                            <div className="w-full flex-col  mt-15 flex gap-10 ">
                                <span className="text-[hsl(45_72%_59%)] uppercase">Reach Out</span>
                                <h1 className="md:text-7xl text-5xl text-white myFont">Contact Us</h1>
                                <p className="text-gray-300 md:text-2xl text-[16px]  popFont">Have questions, want to partner, or need support? We'd love to hear from you.</p>

                                <div>
                                    
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className="max-w-300  m-auto grid grid-cols-1 lg:grid-cols-2 bg-[hsl(43, 33%, 96%)]">
                    <div className="max-w-300 m-auto w-[90%]  h-full md:place-content-center md:gap-10 flex flex-col gap-5 mt-10 ">
                        {/* info */}
                        <h1 className="text-4xl md:text-6xl myFont ">Get In Touch</h1>


                        <div className="flex  items-center gap-3">
                            <MdOutlineMailOutline className="w-11 h-11 p-3 bg-[hsl(210_100%_20%/0.2)] rounded-2xl text-[#003366]" />
                            <div className="flex flex-col">
                                <span className="popFont ">Email</span>
                                <span className="popFont font-bold">info@peacceandjustice.org</span>
                            </div>
                        </div>

                        <div className="flex  items-center gap-3">
                            <IoCallOutline className="w-11 h-11 p-3 bg-[hsl(210_100%_20%/0.2)] rounded-2xl text-[#003366]" />
                            <div className="flex flex-col">
                                <sapn className="popFont">Phone</sapn>
                                <sapn className="popFont font-bold">+93 700 000 000</sapn>
                            </div>
                        </div>

                        <div className="flex  items-center gap-3">
                            <IoCallOutline className="w-11 h-11 p-3 bg-[hsl(210_100%_20%/0.2)] rounded-2xl text-[#003366]"/>
                            <div className="flex flex-col">
                                <sapn className="popFont">Location</sapn>
                                <sapn className="popFont font-bold">Kabul, Afghanistan</sapn>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="text-2xl popFont ">Follow Us</span>
                            <div className="flex gap-8">
                                <span className="w-11 h-11 rounded-full bg-[hsl(38,20%,92%)] flex items-center justify-center hover:bg-[#003366] hover:text-white transition-colors duration-200">T</span>
                                <span className="w-11 h-11 rounded-full bg-[hsl(38,20%,92%)] flex items-center justify-center hover:bg-[#003366] hover:text-white transition-colors duration-200">F</span>
                                <span className="w-11 h-11 rounded-full bg-[hsl(38,20%,92%)] flex items-center justify-center hover:bg-[#003366] hover:text-white transition-colors duration-200">I</span>
                                <span className="w-11 h-11 rounded-full bg-[hsl(38,20%,92%)] flex items-center justify-center hover:bg-[#003366] hover:text-white transition-colors duration-200">L</span>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-300 m-auto w-full  h-200 flex flex-col items-center justify-center  mt-10">
                        {/* Form */}
                        <div className="w-[90%] flex flex-col  m-auto p-4 rounded-2xl gap-7 bg-white">
                            <h1 className="text-4xl text-[#003366] myFont ">Send a Message</h1>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="popFont pl-2">Name *</label>
                                <input type="text" id="name" className="w-full pt-2 py-2 pl-2 border rounded-xl border-gray-300" placeholder="Your name"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="emails"  className="popFont pl-2">Email *</label>
                                <input type="email" placeholder="you@example.com"  className="w-full pt-2 py-2 pl-2 border rounded-xl border-gray-300" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="What is thsi about ?"  className="w-full pt-2 py-2 pl-2 border rounded-xl border-gray-300"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="user_message">Message *</label>
                                <textarea  id="user_message"  className="w-full resize-none pt-2 py-2 pl-2 border rounded-xl border-gray-300 h-40"  placeholder="Write your message here ..."/>
                            </div >

                            <button className="w-full flex items-center  justify-center gap-3 bg-[#003366] pt-2 py-2 rounded-2xl text-white hover:bg-[hsl(210_100%_20%/0.8)] transition-all">
                                <IoIosSend />
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
        

    )
}

export default Contact;