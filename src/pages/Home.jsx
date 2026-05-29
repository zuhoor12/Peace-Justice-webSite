import Navbar from '../component/Navbar'
import { NavLink} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { IoPlayOutline } from "react-icons/io5";
import MissionCard from '../component/MissionCard'
import ProjectCard from '../component/ProjectCard'
import { GiInjustice } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { PiUsersLight } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import Footer from "../component/Footer"
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home(){
    let [project , setProject] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/project")
        .then(response =>{
            setProject(response.data)
        })
    },[])

        let MissionCardData = [
            {
                id:1,
                title : "Justice",
                paragraph: "Standing firm for the rights and dignity of every individual across all borders.",
                icon : GiInjustice,
            },
            {
                id:2,
                title:"Peace",
                paragraph: "Building bridges between communities through understanding and compassion.",
                icon : FaRegHeart
            },
            {
                id:3,
                title:"Equality",
                paragraph: "Ensuring every voice is heard regardless of race, culture, gender, or age.",
                icon : PiUsersLight
            },
            {
                id:4,
                title: "Unity",
                paragraph: "Connecting people worldwide in the shared vision of a just and humane world.",
                icon :TfiWorld
            }
        ]

    return (

        <>  
            <header className="w-screen relative h-screen gap-30 md:gap-0 flex items-center flex-col">
                <Navbar /> 
                <div className="absolute inset-0 bg-black/50 z-0">
                </div>

                <div className="max-w-325 flex items-center z-100 ml-10 justify-center h-full ">
                    <div className="w-full flex flex-col gap-8 ">
                        <div className="w-fit h-10 flex items-center p-3 justify-center bg-[hsl(45_72%_59%/0.2)] text-[hsl(45_72%_59%)]  font-medium rounded-2xl ">
                            <span className="text-[12px]">Founded by Afghan Youth for Global Peace</span>
                        </div>
                        <h1 className=" font-bold myFont text-3xl md:text-6xl lg:text-8xl text-white">Justice Is Not<br></br><span className="text-[#e1ba4c]">A Dream</span><br />It Is A Requirement</h1>
                        <p className="text-gray-200 text-[12px] pr-2 ">Born from the resilience of the Afghan people, we build bridges of peace, justice, and equality — for every person, regardless of who they are.</p>
                        <div className="w-fit h-fit flex flex-col text-[12px] items-start md:flex-row gap-10 md:text-2xl" >
                            <NavLink to={"/involved"} className="bg-[hsl(45_72%_59%)] pl-9 pr-9 pt-4 py-4 gap-2 font-bold rounded-3xl flex items-center ">Join the Movement <FaArrowRight/> </NavLink>
                            <NavLink to={"/about"} className="flex text-white items-center border-2 pl-7 pr-7 hover:bg-[#ffffff41] transition-colors pt-4 py-4 gap-3 rounded-4xl">Our Story <IoPlayOutline/> </NavLink>
                            
                        </div>
                    </div>

                </div>
            </header>
            <main className="w-full h-fit bg-white flex items-center flex-col  justify-center">
                <div className="bg-[#F8F6F1] w-screen">
                    <div className="w-full max-w-325 h-full m-auto  mt-4">
                        <div className=" w-[90%]  h-full pt-15  py-20 flex  m-auto flex-col lg:grid lg:grid-cols-2">
                            <div className="  lg-grid lg:grid-cols-2 gap-5 popFont h-full flex items-start flex-col justify-center ">
                                <span className="uppercase text-[#285728] font-medium">out mission</span>
                                <h1 className="text-4xl myFont font-bold ">From Pain,<br /><span className="text-[#285728]">We Build Hope</span></h1>
                                <p className="text-gray-500 text-[18px]">Peace and Justice International was born from the collective experience of Afghan youth who have witnessed the devastation of conflict and injustice. We channel that understanding into action — creating programs that empower communities, educate the next generation, and build the foundations of lasting peace.</p>
                                <p className="text-gray-500 text-[18px]">We believe that a better world is not only possible — it is our responsibility to build it. Every project we undertake, every life we touch, brings us one step closer to the world we envision: one where justice is not a privilege, but a right.</p>
                            </div>
                        <div className="w-full h-fit gap-5 mt-10 grid grid-cols-1 md:grid-cols-2 place-items-center">
                            {
                                MissionCardData.map((data)=> <MissionCard props={data} key={data.id} />)
                            }
                        </div>
                    </div>
                </div>
                </div>

                <div className="bg-[#F3F1EB] w-screen ">
                    <div className="max-w-325 w-full m-auto h-auto pt-10 py-20 ">
                        <div className="w-[90%] h-full m-auto flex flex-col gap-4  ">
                            <div className="mt-5 flex flex-col gap-4 text-center">
                            <span className="uppercase text-[#285728] popFont">out impact</span>
                                <h1 className="text-5xl myFont font-bold ">Featured Projects</h1>
                                <p className="text-[16px] text-gray-500">Every project is a step toward the world we believe in. Here's where we're making a difference.</p>
                            </div>
                            <div className="flex gap-8 flex-col md:grid-cols-2 lg:grid-cols-3 md:grid ">
                                {
                                    project.slice(0,3).map((datacard)=> <ProjectCard datacard = {datacard} /> )
                                }

                            </div>
                            <div className="w-full flex mt-4  items-center justify-center ">
                                <NavLink to={"/project"} className="hover:bg-[hsl(45_72%_59%)] border transition-all hover:border-transparent pl-7 pr-7 pt-3 py-3 flex items-center gap-3 rounded-4xl" >View All Project<FaArrowRight /> </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-screen  h-180 relative">
                    <img src="../../public/Picture_2.png" alt="" className="w-screen bobject-cover h-full"/>

                        <div className="w-fullh-full bg-blue-600/90  absolute inset-0">
                            <div className="flex max-w-325  m-auto gap-7 items-center justify-center flex-col w-full h-full">
                                <h1 className="md:text-7xl text-6xl text-center myFont font-bold text-white">Be Part of <br /> <span className="text-[hsl(45_72%_59%)]">Something Greater</span></h1>
                                <p className="md:text-2xl text-[14px] pl-2 pr-2 text-center text-white popFont">Whether you volunteer your time, share your skills, or support with a donation — every action counts. Together, we can build the just and peaceful world we all deserve.</p>
                                <div className="flex items-center justify-center gap-3 mt-15 ">
                                    <NavLink className="flex items-center  gap-4 bg-[hsl(45_72%_59%)] hover:bg-[hsl(45_72%_59%/0.8)] transition-colors duration-200 pl-7 pr-7 pt-3 py-3 rounded-3xl popFont font-bold" >Get Involved <FaArrowRight /></NavLink>
                                    <NavLink  className="pl-7 pr-7 pt-3 py-3 popFont font-bold text-white border rounded-3xl hover:bg-[#ffffff41] transition-all duration-200">Contact Us</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>


                <Footer />
            </main>
            
            
        </>

    )
}


export default Home;