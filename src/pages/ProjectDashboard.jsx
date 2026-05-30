import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import DashboardCardProject from '../component/DashboardCardProject'
import axios from 'axios'
import { MdClose } from "react-icons/md";

function ProjectDashboard(){
    const [searchParams, setSearchParams] = useSearchParams();
    let [projects , setProjects] = useState([])
    let [addbox , setAddBox] = useState(false)
    let [title , setTitle] = useState("")
    let [shortdes , setShortDes] = useState("")
    let [fulldes , setFullDes] = useState("")
    let [imageurl , setImageURL] = useState("")
    let [impactnumber , setImpactNumber] = useState("")
    let [impactlabel, setImpactLabel] = useState("")
    let [location , setLocation] = useState("")

    useEffect(() => {

        if(searchParams.get("title") !== "Project"){

            setSearchParams({
                title: "Project"
            });

        }

    }, []);
    

    useEffect(()=>{
        axios.get("http://localhost:3000/project")
        .then(response =>{
            setProjects(response.data)
            
        })
    },[])
    let AddBoxFun = ()=>{
        setAddBox(!addbox)
    }
    let addProjectFun =()=>{
        let newProject = {
            title,
            imgaddress : imageurl,
            location,
            shortDescription : shortdes,
            impactnumber,
            impactlabel
        }
        axios.post("http://localhost:3000/project",newProject)
        setAddBox(!addbox)
        
        
    }
    // console.log(projects)
    return(
        <div className="w-full h-full bg-green-500 overflow-hidden">
            <div className="flex  items-center bg-[hsl(43,33%,96%)] justify-between  pl-4 pr-4 pt-10 py-10">
                <h1 className="text-3xl font-bold myFont ">Project</h1>
                <button onClick={AddBoxFun} className="bg-[hsl(210,100%,20%)] text-white pt-2 py-2 pl-3 pr-3 gap-3 cursor-pointer rounded-xl flex ">
                    <BsPlus size={24} />
                    Add Project
                </button>
            </div>
            <div className="w-full h-full bg-[hsl(43,33%,96%)] border-t">
                <div className="w-[90%] h-auto gap-4  mt-10 m-auto flex flex-col items-start ">
                    {
                        projects.map((pro)=> <DashboardCardProject data={pro} /> )
                    }
                </div>
            </div>
            <div className={`w-full h-full bg-[hsl(0_0%_0%/0.6)] fixed top-0 left-0   items-center  justify-center z-50 ${addbox ? "flex" : "hidden"}`}>
                <div className="md:w-120 w-100 h-auto flex gap-3 flex-col bg-white rounded-xl p-5 ">
                    <div onClick={AddBoxFun} className="flex items-center justify-between">
                        <span className="text-xl popFont">New Project</span>
                        <MdClose size={24} className="cursor-pointer"/>
                    </div>

                    <div className="w-full max-h-140 overflow-scroll overflow-x-hidden  pl-2 pr-2 mt-4 flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="popFont text-[16px] ">Title *</label>
                            <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Project title" className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="popFont text-[16px] ">Short Description</label>
                            <textarea onChange={(e)=> setShortDes(e.target.value)} type="text" placeholder="Brief summary" className="border h-20 resize-none pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"/>
                        </div>

                        <div className="flex flex-col">
                            <label className="popFont text-[16px] ">Full Description *</label>
                            <textarea onChange={(e)=> setFullDes(e.target.value)} type="text" placeholder="Detailed description" className="border h-30 resize-none pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"/>
                        </div>

                        <div className="flex flex-col">
                            <label className="popFont text-[16px] ">Image URL *</label>
                            <input onChange={(e)=> setImageURL(e.target.value)} type="text" placeholder="https://.." className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="popFont text-[16px] ">Location</label>
                            <input onChange={(e)=> setLocation(e.target.value)} type="text" placeholder="e.g kabul Afghanistan" className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="popFont text-[16px] ">Impact Number</label>
                            <input onChange={(e)=> setImpactNumber(e.target.value)} type="text" placeholder="e.g 1200" className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="popFont text-[16px] ">Impact Label</label>
                            <input onChange={(e)=> setImpactLabel(e.target.value)} type="text" placeholder="e.g Lives Impacted" className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"/>
                        </div>
                        <div className="flex  gap-4 flex-row-reverse">
                            <button onClick={AddBoxFun} className="pl-3 pr-3 pt-2 py-2 rounded-xl h-10 border border-gray-400 popFont text-gray-900">Cancel</button>
                            <button onClick={addProjectFun} className="pl-4 pr-4 pt-2 py-2 rounded-xl h-10 bg-sky-900 popFont font-bold text-white">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDashboard;