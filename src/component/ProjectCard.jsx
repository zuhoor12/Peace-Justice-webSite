import { IoLocationOutline } from "react-icons/io5";
function ProjectCart({datacard}){
    console.log(datacard.imgaddress)
    return (
        <div className="w-[90%] transition-all group overflow-hidden hover:shadow-[0px_10px_1px_rgba(221,221,221,1),0_10px_20px_rgba(204,204,204,1)] h-130 gap-3 mt-4 bg-white rounded-2xl  grid grid-cols-1 ">
            <div className="group-hover:scale-110 transition-all duration-500">
                <img src={datacard.imgaddress} alt="" className="rounded-t-2xl"/>
            </div>
            <div className="flex flex-col pl-3 pr-3 absulote gap-3">
                <div className="flex items-center gap-2 ">
                    <IoLocationOutline />
                    <span>{datacard.location}</span>
                </div>
                <h1 className="text-3xl myFont ">{datacard.title}</h1>
                <p className="text-[14px] pr-4 text-gray-600">{datacard.shortDescription}</p>

                <div className="flex border-t items-center  gap-3 pt-4 py-4">
                    <h1 className="text-3xl myFont">{datacard.impactNumber}</h1>
                    <span className="text-gray-600">{datacard.impactLabel}</span>
                </div>
            </div>
        </div>
    )
}


export default ProjectCart;