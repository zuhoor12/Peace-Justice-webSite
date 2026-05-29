import { useEffect, useState } from 'react';
import BlogCard from '../component/BlogCard';
import Navbar  from'../component/Navbar'
import axios from 'axios'
import Footer from '../component/Footer';
function Blog(){
    let [blog , setBlog] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/blog")
        .then(response =>{
            setBlog(response.data)
        })
    },[])
    return (
        <>
            <div className="max-w-full bg-[hsl(43_33%_96%)]">
                <div className="max-w-full  h-130 bg-[#003366] flex items-center justify-center flex-col">
                    <div className="max-w-300 w-[90%] h-full ">
                        <Navbar />
                        <div className="flex flex-col">
                            <div className="w-full flex-col  mt-15 flex gap-10 ">
                                <span className="text-[hsl(45_72%_59%)] uppercase">news  &  stories</span>
                                <h1 className="text-7xl text-white myFont">Blog</h1>
                                <p className="text-gray-300 text-2xl popFont">Voices from the field, stories of resilience, and updates on our journey toward a just world.</p>

                                <div>
                                    
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                <div className="max-w-full w-fit m-auto h-fit pt-20 py-20 ">
                    <div className="max-w-300 w-full   h-full m-auto  grid place-items-center md:grid-cols-2 gap-5  lg:grid-cols-3">
                        {
                            blog.map((datacard)=> <BlogCard datacard = {datacard} /> )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    )
}


export default Blog;