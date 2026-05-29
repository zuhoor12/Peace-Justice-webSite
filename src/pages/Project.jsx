import { useEffect, useState } from 'react';
import Navbar  from'../component/Navbar'
import ProjectCard from '../component/ProjectCard'
import axios from 'axios';
import Footer from '../component/Footer';

function Project(){
    let [allproject , setAllProject] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/project")
        .then(response =>{
            setAllProject(response.data)
        })
    },[])
    return (
        <>  

            <div className="max-w-full bg-[hsl(43_33%_96%)]">
                <div className="max-w-full  h-130 bg-[#003366] flex items-center justify-center flex-col">
                    <div className="max-w-300 w-[90%]   h-full ">
                        <Navbar />
                        <div className="flex flex-col">
                            <div className="w-full flex-col  mt-15 flex gap-10 ">
                                <span className="text-[hsl(45_72%_59%)] uppercase">our story</span>
                                <h1 className="text-7xl text-white myFont">About Us</h1>
                                <p className="text-gray-300 text-2xl popFont">Every project is a testament to what's possible when people unite for justice and peace.</p>

                                <div>
                                    
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className="max-w-full w-[90%] m-auto h-fit pt-20 py-20 ">
                    <div className="max-w-300 w-full   h-full m-auto  grid place-items-center md:grid-cols-2 gap-5  lg:grid-cols-3">
                        {
                            allproject.map((datacard)=> <ProjectCard datacard = {datacard} /> )
                        }
                    </div>
                </div>
                <Footer />
            </div>

        
        </>
        
    )
}


export default Project;