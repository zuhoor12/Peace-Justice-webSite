import { NavLink } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
function Footer (){
    return (
        <div className="w-screen h-fit py-10 bg-[#003366] ">
            <div className="max-w-300 h-full m-auto flex  mt-10 flex-col pl-5 gap-4 md:grid-cols-2 md:grid pr-4 lg:grid-cols-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-start  gap-7 " >
                        <span className="w-15 h-15 bg-[hsl(45_72%_59%)] text-black flex items-center justify-center text-3xl myFont rounded-full">P</span>
                        <div>
                            <h1 className="myFont  text-[22px] font-bold text-white">Peace & Justice</h1>
                            <p className="uppercase text-[14px] text-gray-300">international</p>
                        </div>
                    </div>
                    <p className="text-gray-200">Born from the resilience of Afghan youth, dedicated to building a world where peace, justice, and equality are not dreams — but realities.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-gray-200 font-bold myFont text-2xl">Navigate</span>
                    <div className="flex flex-col gap-3 text-gray-300">
                        <NavLink to={"/about"}  className="hover:text-amber-300">About Us</NavLink>
                        <NavLink to={"/project"} className="hover:text-amber-300">Our Projects</NavLink>
                        <NavLink to={"/blog"} className="hover:text-amber-300">Blog & News</NavLink>
                        <NavLink to={"/involved"} className="hover:text-amber-300">Get Involved</NavLink>
                        <NavLink to={"/contact"} className="hover:text-amber-300" >Contact</NavLink>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-gray-200 font-bold myFont text-2xl" >Our Work</span>
                    <div className="flex flex-col gap-3 text-gray-300">
                        <span>Education Programs</span>
                        <span>Community Development</span>
                        <span>Women's Empowerment</span>
                        <span>Youth Leadership</span>
                        <span>Emergency Relief</span>
                    </div>

                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-gray-200 font-bold myFont text-2xl">Stay Connected</span>
                    <span className="text-gray-300">Follow our journey and join the movement for peace.</span>
                    <div className="flex gap-8">
                        <span className="w-10 h-10 flex items-center text-white justify-center bg-[hsl(210_64%_28%)] rounded-full hover:bg-[hsl(45_72%_59%)] transition-all hover:text-black  popFont  ">T</span>
                        <span className="w-10 h-10 flex items-center text-white justify-center bg-[hsl(210_64%_28%)] rounded-full hover:bg-[hsl(45_72%_59%)] transition-all hover:text-black  popFont  ">F</span>
                        <span className="w-10 h-10 flex items-center text-white justify-center bg-[hsl(210_64%_28%)] rounded-full hover:bg-[hsl(45_72%_59%)] transition-all hover:text-black  popFont  ">I</span>
                    </div>
                </div>

            </div>
             <div className="border-t-[0.5px] w-[90%] m-auto items-center justify-between text-center mt-3 md:flex-row border-gray-300 flex flex-col gap-3">
                    <span className="mt-2 text-gray-500">© 2026 Peace and Justice International. All rights reserved.</span>
                    <span className="flex items-center gap-1 text-gray-500">Made with <CiHeart className="text-[hsl(45_72%_59%)]"/> for a better world</span>
            </div>
        </div>
    )
}


export default Footer ;