
import { MdOutlineDateRange } from "react-icons/md";
function BlogCard({datacard}){
    console.log(datacard.imgaddress)
    return (
        <div className="w-90 transition-all  group overflow-hidden border border-gray-300  h-130 gap-1 mt-4 bg-white rounded-2xl  grid grid-cols-1 ">
            <div className="group-hover:scale-110 transition-all duration-500 ">
                <img src={datacard.imgaddress} alt="" className="rounded-t-2xl w-100 h-60 object-cover"/>
            </div>
            <div className="flex flex-col pl-3 pr-3 absulote gap-3">
                <div className="flex items-center justify-between  ">
                    <span className=" pl-2 pr-2 py-1 pt-1 bg-[#285728] text-white rounded-3xl text-[12px]">{datacard.state}</span>
                    <div className="flex  items-center">
                        <MdOutlineDateRange />
                        <span className="text-[12px]">{datacard.date}</span>
                    </div>
                    <span className="text-[12px]">by {datacard.by}</span>
                </div>
                <h1 className="text-3xl myFont group-hover:text-[#285728] transition-colors ">{datacard.title}</h1>
                <p className="text-[14px] pr-4 text-gray-600">{datacard.description}</p>

            </div>
        </div>
    )
}


export default BlogCard;