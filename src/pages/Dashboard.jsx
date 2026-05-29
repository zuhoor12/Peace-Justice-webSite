import { Link, Outlet } from "react-router-dom";
import NavDashboard from '../component/NavDashboard'
import { LuArrowBigLeftDash } from "react-icons/lu";
import { useState } from "react";
import {NavLink} from 'react-router-dom'
import { IoBarChartOutline } from "react-icons/io5";
import { FaDiagramProject } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
function Dashboard(){
    let [activeMenu , setAcitveMenu] = useState(false)
    let active = ()=>{
        setAcitveMenu(!activeMenu)
    }


    return(
        <>
        <div className="flex w-screen h-screen relative ">
            <div className={`max-w-100 lg:w-110 w-90 h-screen   bg-[hsl(210,100%,12%)] absolute lg:static  lg:block ${activeMenu ? 'block' : "hidden"}`}>
                <div className="flex w-full border-b  h-auto border-gray-500  p-5 gap-3 items-center">
                    <span className="w-10 h-10 bg-[#003366] text-white flex items-center justify-center text-xl myFont rounded-full">P</span>
                    <h1 className="text-xl text-white popFont font-bold">PJI Admin</h1>
                    <LuArrowBigLeftDash size={24} className="text-white absolute right-4 lg:hidden" onClick={active}/>
                </div>
                <div className="flex w-[90%] flex-col h-auto m-auto  gap-4  mt-4 ">
                    <div className="bg-[hsl(210,80%,18%)] rounded-2xl py-3 pt-3 pl-4  ">
                        <NavLink to={"OverView"} className="hover:text-white transition-colors duration-200 text-gray-400 popFont text-[16px] w-full h-fit gap-3 flex  items-center "  onClick={active}>
                            <IoBarChartOutline size={24} />
                            Over View
                        </NavLink>
                    </div>
                    <div className="bg-[hsl(210,80%,18%)] rounded-xl py-3 pt-3 pl-4  ">
                        <NavLink to={"Projects"} className="hover:text-white transition-colors duration-200 text-gray-400 popFont text-[16px] w-full h-fit gap-3 flex  items-center "  onClick={active}>
                            <FaDiagramProject size={24} />
                            Projects
                        </NavLink>
                    </div>
                    <div className="bg-[hsl(210,80%,18%)] py-3 pt-3 pl-4 rounded-xl">
                        <NavLink to={"BlogPost"} className="hover:text-white transition-colors duration-200 text-gray-400 popFont text-[16px] w-full h-fit gap-3 flex  items-center "  onClick={active}>
                            <IoNewspaperOutline size={24} />
                            Blog Post
                        </NavLink>
                    </div>
                    <div className="bg-[hsl(210,80%,18%)]  py-3 pt-3 pl-4 rounded-xl ">
                        <NavLink to={"Team"} className="hover:text-white transition-colors duration-200 text-gray-400 popFont text-[16px] w-full h-fit gap-3 flex  items-center"  onClick={active}>
                            <AiOutlineTeam size={24} />
                            Team
                        </NavLink>
                    </div>
                    <div className="bg-[hsl(210,80%,18%)] py-3 pt-3 pl-4 rounded-xl  ">
                        <NavLink to={"Message"} className="hover:text-white transition-colors duration-200 text-gray-400 popFont text-[16px] w-full h-fit gap-3 flex  items-center "  onClick={active}>
                            <FiMessageSquare size={24} />
                            Message
                        </NavLink>
                    </div>
                    <div className="bg-[hsl(210,80%,18%)] py-3 pt-3 pl-4 rounded-xl  ">
                        <NavLink to={"Volunteers"} className="hover:text-white transition-colors duration-200 text-gray-400 popFont text-[16px] w-full h-fit gap-3 flex  items-center "  onClick={active}>
                            <FiUserCheck size={24} />
                            Volunteers
                        </NavLink>
                    </div>
                    <div className="absolute bottom-5">
                        <Link to="/" className="hover:text-white transition-colors duration-200 flex items-center gap-3 text-gray-400 font-bold popFont text-[16px]">
                            <MdLogout size={24} className="text-white" />
                            Back to site
                        </Link>
                    </div>
                </div>

            </div>
            
        
            <div className="flex flex-col w-full">
                <NavDashboard onclick = {active}/>
                <Outlet />
            </div>
        </div>
        </>
    )
}


export default Dashboard;