import Navbar  from'../component/Navbar'
import Footer from '../component/Footer'
import { FaRegHeart } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
function Involved(){
    return (
        <>
            <div className="w-screen h-auto relative bg-[#f8f6f1] ">
                <img src="/public/Picture_5.png" alt="" className="w-full h-120 object-cover" />
                <div className="w-full h-120 inset-0 bg-[#00000079] absolute"> 
                    <Navbar />
                    <div className="flex items-center justify-center w-full flex-col  mt-15 ">
                        <span className="text-[hsl(45_72%_59%)] uppercase">Take Action</span>
                        <h1 className="md:text-7xl text-4xl text-white myFont">Get Involved</h1>
                    </div>

                </div>
                <div className="w-screen  h-auto ">
                    <div className="max-w-300 h-auto  m-auto pt-30 py-30 flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3">
                        <div className="max-w-full w-[80%] border rounded-3xl  border-gray-300 h-full m-auto transition-all duration-200 hover:shadow-[0px_10px_1px_rgba(221,221,221,1),0_10px_20px_rgba(204,204,204,1)]">
                            <div className="flex flex-col items-center justify-evenly  m-6  h-70 text-center ga">
                                <FaRegHeart className="w-11 h-11 p-3 bg-[hsl(120_37%_25%/0.2)] text-[#285728] rounded-xl" />
                                <h1 className="text-4xl myFont ">Donate</h1>
                                <p className="pl-4 pr-4 text-[16px]">Your contribution directly funds education, community projects, and emergency relief for those who need it most.</p>
                            </div>
                        </div>
                        <div className="max-w-full w-[80%] border rounded-3xl  border-gray-300 h-full m-auto transition-all duration-200 hover:shadow-[0px_10px_1px_rgba(221,221,221,1),0_10px_20px_rgba(204,204,204,1)]">
                            <div className="flex flex-col items-center justify-evenly  m-6  h-70 text-center ga">
                                <FaRegHeart className="w-11 h-11 p-3 bg-[hsl(120_37%_25%/0.2)] text-[#285728] rounded-xl" />
                                <h1 className="text-4xl myFont ">Donate</h1>
                                <p className="pl-4 pr-4 text-[16px]">Your contribution directly funds education, community projects, and emergency relief for those who need it most.</p>
                            </div>
                        </div>
                        <div className="max-w-full w-[80%] border rounded-3xl  border-gray-300 h-full m-auto transition-all duration-200 hover:shadow-[0px_10px_1px_rgba(221,221,221,1),0_10px_20px_rgba(204,204,204,1)]">
                            <div className="flex flex-col items-center justify-evenly  m-6  h-70 text-center ga">
                                <FaRegHeart className="w-11 h-11 p-3 bg-[hsl(120_37%_25%/0.2)] text-[#285728] rounded-xl" />
                                <h1 className="text-4xl myFont ">Donate</h1>
                                <p className="pl-4 pr-4 text-[16px]">Your contribution directly funds education, community projects, and emergency relief for those who need it most.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-auto  bg-transparent">
                    <div className="max-w-300 w-[90%] bg-[hsl(210,100%,20%)] my-20 m-auto rounded-3xl flex items-center gap-5 justify-center flex-col ">
                        <span className=" mt-10 text-white myFont text-4xl">Your impact</span>
                        <div className=" w-full pr-4 pl-4 h-auto mb-10 flex flex-col gap-10 items-center m-auto md:grid md:grid-cols-2 lg:grid-cols-4">
                            <div className="w-[90%] fe text-white flex flex-col h-30  gap-4 rounded-2xl text-center pt-3 py-3 bg-[hsl(210,64%,28%)]">
                                <h1 className="text-4xl text-amber-300 myFont font-bold">$25</h1>
                                <span className="text-gray-400">School supplies for 5 children</span>
                            </div>
                            <div className="w-[90%] fe text-white flex flex-col h-30 gap-4 rounded-2xl text-center pt-3 py-3 bg-[hsl(210,64%,28%)]">
                                <h1 className="text-4xl text-amber-300 myFont font-bold">$50</h1>
                                <span className="text-gray-400">1 month of schooling</span>
                            </div>
                            <div className="w-[90%] fe text-white flex flex-col h-30 gap-4 rounded-2xl text-center pt-3 py-3 bg-[hsl(210,64%,28%)]">
                                <h1 className="text-4xl text-amber-300 myFont font-bold">$150</h1>
                                <span className="text-gray-400">Teacher training workshop</span>
                            </div>
                            <div className="w-[90%] fe text-white flex flex-col h-30 gap-4 rounded-2xl text-center pt-3 py-3 bg-[hsl(210,64%,28%)]">
                                <h1 className="text-4xl text-amber-300 myFont font-bold">$500</h1>
                                <span className="text-gray-400">Community development project</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full h-full bg-transparent">
                    <div className="max-w-200 w-[90%] h-auto my-30 m-auto  flex flex-col justify-evenly items-center ">
                        <div className="w-fit text-center flex flex-col gap-3">
                            <h1 className="md:text-5xl text-4xl myFont font-bold">Volunteer With Us</h1>
                            <p className="text-[16px] text-gray-600">Fill out the form below and we'll reach out to discuss how you can contribute.</p>
                        </div>
                        <form className="w-full h- h-full  mt-10 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {/* Full Name */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="FullName" className="popFont font-bold pl-3">Full Name *</label>
                                    <input type="text" id="FullName" placeholder="Your full name"  className="bg-transparent p-3 rounded-xl  border border-gray-300   " />
                                </div>
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="Email" className="popFont font-bold pl-3">Email</label>
                                    <input type="email" placeholder="you@example.com" className="bg-transparent p-3 rounded-xl  border border-gray-300   " />
                                </div>

                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {/* Phone*/}
                                <div  className="flex flex-col gap-2">
                                    <label htmlFor="Phone" className="popFont font-bold pl-3">Phone</label>
                                    <input type="text" placeholder="+937xxxxxxxxx" className="bg-transparent p-3 rounded-xl  border border-gray-300   " />
                                </div>
                                {/* Availablity */}

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="Availablity">Availablity</label>
                                    <select  id="Availablity" className="bg-transparent p-3 rounded-xl  border border-gray-300   ">
                                        <option value="full_time">Full Time</option>
                                        <option value="part_time">Part Time</option>
                                        <option value="weekends">Weekends</option>
                                        <option value="remote">Remote</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-1 w-full gap-7 ">
                                    <div className="w-full grid grid-cols-1 gap-2 ">
                                        <label htmlFor="skills" className="popFont font-bold pl-3">Skills & Expertise</label>
                                        <input type="text" placeholder="e.g Teaching , Web Development , Translation" className="w-full bg-transparent p-3 rounded-xl  border border-gray-300 " />
                                    </div>
                                    <div className="w-full grid grid-cols-1 gap-2">
                                        <label htmlFor="message" className="popFont font-bold pl-3">Why do you want to volunteer?</label>
                                        <textarea  id="message" placeholder="Tell us about your motivation" className="resize-none w-full h-30 bg-transparent p-3 rounded-xl  border border-gray-300   "></textarea>
                                    </div>

                                    <button className="w-full flex items-center  bg-[hsl(120,37%,25%)] pt-3 py-3 justify-center text-white gap-3 text-[16px] rounded-xl hover:bg-[hsl(120_37%_25%/0.9)] transition-colors">
                                        <IoIosSend />
                                        Submit Application
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        </>
        
    )
}


export default Involved;