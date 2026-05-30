import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import DashboardCardProject from '../component/DashboardCardProject'
import axios from 'axios'
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";

function ProjectDashboard(){

    const [searchParams, setSearchParams] = useSearchParams();
    let [projects , setProjects] = useState([])
    let [addbox , setAddBox] = useState(false)

    // --- Edit state ---
    let [editbox, setEditBox] = useState(false)
    let [editProject, setEditProject] = useState(null)

    // --- Add form state ---
    let [title , setTitle] = useState("")
    let [shortdes , setShortDes] = useState("")
    let [fulldes , setFullDes] = useState("")
    let [imageurl , setImageURL] = useState("")
    let [impactnumber , setImpactNumber] = useState("")
    let [impactlabel, setImpactLabel] = useState("")
    let [location , setLocation] = useState("")

    useEffect(() => {
        if(searchParams.get("title") !== "Project"){
            setSearchParams({ title: "Project" });
        }
    }, []);

    useEffect(()=>{
        fetchProjects()
    },[])

    let fetchProjects = ()=>{
        axios.get("http://localhost:3000/project")
            .then(response => setProjects(response.data))
    }

    let AddBoxFun = ()=> setAddBox(!addbox)

    let addProjectFun = ()=>{
        let newProject = {
            title,
            imgaddress : imageurl,
            location,
            shortDescription : shortdes,
            fullDescription : fulldes,
            impactnumber,
            impactlabel
        }
        axios.post("http://localhost:3000/project", newProject)
            .then(()=>{
                fetchProjects()
                setAddBox(false)
            })
    }

    // --- DELETE ---
    let deleteProject = (id)=>{
        axios.delete(`http://localhost:3000/project/${id}`)
            .then(()=> fetchProjects())
    }

    // --- OPEN EDIT MODAL ---
    let openEditBox = (project)=>{
        setEditProject({ ...project })
        setEditBox(true)
    }

    // --- SAVE EDIT ---
    let saveEditFun = ()=>{
        axios.put(`http://localhost:3000/project/${editProject._id || editProject.id}`, editProject)
            .then(()=>{
                fetchProjects()
                setEditBox(false)
                setEditProject(null)
            })
    }

    // --- انیمیشن modal ---
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const modalVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 28 } },
        exit: { opacity: 0, y: 40, scale: 0.95, transition: { duration: 0.2 } }
    }

    // --- انیمیشن کارت‌ها ---
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" }
        })
    }

    // --- فرم مشترک برای Add و Edit ---
    const ModalForm = ({ isEdit }) => (
        <div className="w-full max-h-140 overflow-scroll overflow-x-hidden pl-2 pr-2 mt-4 flex flex-col gap-4">
            <div className="flex flex-col">
                <label className="popFont text-[16px]">Title *</label>
                <input
                    value={isEdit ? editProject.title : undefined}
                    onChange={(e)=> isEdit
                        ? setEditProject({...editProject, title: e.target.value})
                        : setTitle(e.target.value)
                    }
                    type="text"
                    placeholder="Project title"
                    className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"
                />
            </div>
            <div className="flex flex-col">
                <label className="popFont text-[16px]">Short Description</label>
                <textarea
                    value={isEdit ? editProject.shortDescription : undefined}
                    onChange={(e)=> isEdit
                        ? setEditProject({...editProject, shortDescription: e.target.value})
                        : setShortDes(e.target.value)
                    }
                    placeholder="Brief summary"
                    className="border h-20 resize-none pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"
                />
            </div>
            <div className="flex flex-col">
                <label className="popFont text-[16px]">Full Description *</label>
                <textarea
                    value={isEdit ? editProject.fullDescription : undefined}
                    onChange={(e)=> isEdit
                        ? setEditProject({...editProject, fullDescription: e.target.value})
                        : setFullDes(e.target.value)
                    }
                    placeholder="Detailed description"
                    className="border h-30 resize-none pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"
                />
            </div>
            <div className="flex flex-col">
                <label className="popFont text-[16px]">Image URL *</label>
                <input
                    value={isEdit ? editProject.imgaddress : undefined}
                    onChange={(e)=> isEdit
                        ? setEditProject({...editProject, imgaddress: e.target.value})
                        : setImageURL(e.target.value)
                    }
                    type="text"
                    placeholder="https://.."
                    className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"
                />
            </div>
            <div className="flex flex-col">
                <label className="popFont text-[16px]">Location</label>
                <input
                    value={isEdit ? editProject.location : undefined}
                    onChange={(e)=> isEdit
                        ? setEditProject({...editProject, location: e.target.value})
                        : setLocation(e.target.value)
                    }
                    type="text"
                    placeholder="e.g kabul Afghanistan"
                    className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"
                />
            </div>
            <div className="flex flex-col">
                <label className="popFont text-[16px]">Impact Number</label>
                <input
                    value={isEdit ? editProject.impactnumber : undefined}
                    onChange={(e)=> isEdit
                        ? setEditProject({...editProject, impactnumber: e.target.value})
                        : setImpactNumber(e.target.value)
                    }
                    type="text"
                    placeholder="e.g 1200"
                    className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"
                />
            </div>
            <div className="flex flex-col">
                <label className="popFont text-[16px]">Impact Label</label>
                <input
                    value={isEdit ? editProject.impactlabel : undefined}
                    onChange={(e)=> isEdit
                        ? setEditProject({...editProject, impactlabel: e.target.value})
                        : setImpactLabel(e.target.value)
                    }
                    type="text"
                    placeholder="e.g Lives Impacted"
                    className="border pl-3 pt-2 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[5px] focus:border-black focus:outline-none border-gray-300"
                />
            </div>
            <div className="flex gap-4 flex-row-reverse">
                <button
                    onClick={isEdit ? ()=> setEditBox(false) : AddBoxFun}
                    className="pl-3 pr-3 pt-2 py-2 rounded-xl h-10 border border-gray-400 popFont text-gray-900"
                >Cancel</button>
                <button
                    onClick={isEdit ? saveEditFun : addProjectFun}
                    className="pl-4 pr-4 pt-2 py-2 rounded-xl h-10 bg-sky-900 popFont font-bold text-white"
                >{isEdit ? "Save Changes" : "Save"}</button>
            </div>
        </div>
    )

    return(
        <div className="w-full h-full bg-green-500 overflow-hidden">
            <div className="flex items-center bg-[hsl(43,33%,96%)] justify-between pl-4 pr-4 pt-10 py-10">
                <h1 className="text-3xl font-bold myFont">Project</h1>
                <button onClick={AddBoxFun} className="bg-[hsl(210,100%,20%)] text-white pt-2 py-2 pl-3 pr-3 gap-3 cursor-pointer rounded-xl flex">
                    <BsPlus size={24} />
                    Add Project
                </button>
            </div>

            {/* ========== لیست کارت‌ها با انیمیشن stagger ========== */}
            <div className="w-full h-full bg-[hsl(43,33%,96%)] border-t">
                <div className="w-[90%] h-auto gap-4 mt-10 m-auto flex flex-col items-start">
                    {
                        projects.map((pro, i)=>
                            <motion.div
                                key={pro._id || pro.id}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                className="w-full"
                            >
                                <DashboardCardProject
                                    data={pro}
                                    onDelete={()=> deleteProject(pro._id || pro.id)}
                                    onEdit={()=> openEditBox(pro)}
                                />
                            </motion.div>
                        )
                    }
                </div>
            </div>

            <AnimatePresence>
                {addbox && (
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full h-full bg-[hsl(0_0%_0%/0.6)] fixed top-0 left-0 flex items-center justify-center z-50"
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:w-120 w-100 h-auto flex gap-3 flex-col bg-white rounded-xl p-5"
                        >
                            <div onClick={AddBoxFun} className="flex items-center justify-between cursor-pointer">
                                <span className="text-xl popFont">New Project</span>
                                <MdClose size={24} />
                            </div>
                            <ModalForm isEdit={false} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========== EDIT MODAL ========== */}
            <AnimatePresence>
                {editbox && editProject && (
                    <motion.div
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full h-full bg-[hsl(0_0%_0%/0.6)] fixed top-0 left-0 flex items-center justify-center z-50"
                    >
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:w-120 w-100 h-auto flex gap-3 flex-col bg-white rounded-xl p-5"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xl popFont">Edit Project</span>
                                <MdClose size={24} className="cursor-pointer" onClick={()=> setEditBox(false)}/>
                            </div>
                            <ModalForm isEdit={true} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
export default ProjectDashboard;