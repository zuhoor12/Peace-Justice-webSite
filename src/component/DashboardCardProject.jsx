import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function DashboardCardProject({ data }) {
  let myData = data;

  return (
    <div className="w-full bg-white h-20  rounded-xl items-center px-4 grid grid-cols-[60px_1fr_80px] gap-4">
      
      {/* ستون ۱: تصویر */}
      <img
        src={myData.imgaddress}
        alt=""
        className="w-14 h-14 object-cover rounded-xl"
      />

      <div className="flex flex-col justify-center overflow-hidden">
        <span className="font-semibold text-gray-900 truncate myFont">{myData.title}</span>
        <span className="text-sm text-gray-500 truncate">{myData.shortDescription}</span>
      </div>


      <div className="flex gap-3 items-center justify-end">
        <MdDriveFileRenameOutline  size={20} className="text-gray-500 cursor-pointer hover:text-gray-800" />
        <MdDelete size={20} className="text-red-500 cursor-pointer hover:text-red-700" />
      </div>

    </div>
  );
}

export default DashboardCardProject;