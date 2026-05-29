import {NavLink} from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

function Navbar(){
    let [activeBox , setActiveBox] = useState(false)
    let toggleFun = ()=>{
        setActiveBox(!activeBox)
    }

    return (
        <>  
            <div className="w-full h-30 pr-3 pl-3  flex items-center justify-center z-100">
                <nav className="flex items-center justify-between w-300 ">
                    <div className="flex items-center gap-7 justify-center" >
                        <span className="w-15 h-15 bg-[#003366] text-white flex items-center justify-center text-3xl myFont rounded-full">P</span>
                        <div>
                            <h1 className="myFont  text-[22px] font-bold text-white">Peace & Justice</h1>
                            <p className="uppercase text-[14px] text-gray-300">international</p>
                        </div>
                    </div>
                    <IoMenu o className="lg:hidden text-white w-10 pr-2 text-3xl" onClick={toggleFun}  size={30} />
                    <div className=" gap-10 items-center text-white hidden lg:flex ">
                            <NavLink to={'/'} className="text-[18px] w-20 h-10 flex items-center justify-center hover:bg-[#6666] transition-colors  rounded-[5px]">Home</NavLink>
                            <NavLink to={"/about"} className="text-[18px] w-20 h-10 flex items-center justify-center hover:bg-[#6666] ">About</NavLink>
                            <NavLink to={"/project"} className="text-[18px] w-20 h-10 flex items-center justify-center hover:bg-[#6667] ">project</NavLink>
                            <NavLink to={"/blog" } className="text-[18px]w-20 h-10 flex items-center justify-center hover:bg-[#6666] ">Blog</NavLink>
                            <NavLink to={"/involved"} className="text-[18px] w-30 h-10 flex items-center justify-center hover:bg-[#6666] ">Get Involved</NavLink>
                            <NavLink to={"/contact"} className="text-[18px] w-20 h-10 flex items-center justify-center hover:bg-[#6666] ">Contact</NavLink>
                            <NavLink to={"/involved"} className="bg-amber-400 w-30 h-10 rounded-3xl flex items-center text-black   font-bold justify-center" >Donate</NavLink>
                    </div>
                    
                </nav>

            </div>
            <div  className ={ ` w-full max-w-300  fixed top-0 pt-4 py-4  left-0 overflow-hidden flex-col text-black bg-white z-200 ${activeBox ? "flex" : "hidden"}`}>
                <div className="flex items-center justify-between w-[90%] max-w-300  pl-3 pr-3 m-auto">
                    <div className="flex items-center gap-7 justify-center" >
                        <span className="w-11 h-11 bg-[#003366]  flex items-center justify-center text-white text-2xl myFont rounded-full">P</span>
                        <div>
                            <h1 className="myFont  text-[22px] font-bold">Peace & Justice</h1>
                            <p className="uppercase text-[14px] ">international</p>
                        </div>
                    </div>
                    <IoMdClose onClick={toggleFun} className="cursor-pointer  w-10  text-3xl"/>
                </div>
                <div className="   lg:flex flex mt-4  flex-col items-center gap-1 justify-center border-t border-gray-300 w-full ">
                            <NavLink onClick={toggleFun} to={'/'} className="text-[18px] w-full h-10 flex items-center text-[#003366] popFont  justify-center hover:bg-[hsl(210_100%_20%/0.7)] hover:text-white transition-colors duration-200 rounded-[5px]">Home</NavLink>
                            <NavLink onClick={toggleFun} to={"/about"} className="text-[18px] w-full h-10 flex items-center justify-center text-[#003366] popFont  hover:bg-[hsl(210_100%_20%/0.7)] hover:text-white transition-colors duration-200">About</NavLink>
                            <NavLink onClick={toggleFun} to={"/project"} className="text-[18px] w-full h-10 flex items-center justify-center text-[#003366] popFont  hover:bg-[hsl(210_100%_20%/0.7)] hover:text-white transition-colors duration-200">project</NavLink>
                            <NavLink onClick={toggleFun} to={"/blog" } className="text-[18px] w-full h-10 flex items-center justify-center text-[#003366] popFont  hover:bg-[hsl(210_100%_20%/0.7)] hover:text-white transition-colors duration-200 ">Blog</NavLink>
                            <NavLink onClick={toggleFun} to={"/involved"} className="text-[18px] w-full h-10 flex items-center justify-center text-[#003366] popFont  hover:bg-[hsl(210_100%_20%/0.7)] hover:text-white transition-colors duration-200 ">Get Involved</NavLink>
                            <NavLink onClick={toggleFun} to={"/contact"} className="text-[18px] w-full h-10 flex items-center justify-center text-[#003366] popFont  hover:bg-[hsl(210_100%_20%/0.7)] hover:text-white transition-colors duration-200">Contact</NavLink>
                </div>
            </div>

        </>
    )
}

export default Navbar;