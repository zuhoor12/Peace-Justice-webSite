import { MdDriveFileRenameOutline, MdDelete } from "react-icons/md";

function DashboardCardProject({ data, onDelete, onEdit }) {
    return (
        <div className="w-full bg-white h-20 rounded-xl items-center px-4 grid grid-cols-[60px_1fr_80px] gap-4">
            {/* تصویر */}
            <img
                src={data.imgaddress}
                alt=""
                className="w-14 h-14 object-cover rounded-xl"
            />
            {/* متن */}
            <div className="flex flex-col justify-center overflow-hidden">
                <span className="font-semibold text-gray-900 truncate myFont">{data.title}</span>
                <span className="text-sm text-gray-500 truncate">{data.shortDescription}</span>
            </div>
            {/* دکمه‌ها */}
            <div className="flex gap-3 items-center justify-end">
                <MdDriveFileRenameOutline
                    size={20}
                    className="text-gray-500 cursor-pointer hover:text-gray-800"
                    onClick={onEdit}
                />
                <MdDelete
                    size={20}
                    className="text-red-500 cursor-pointer hover:text-red-700"
                    onClick={onDelete}
                />
            </div>
        </div>
    );
}

export default DashboardCardProject;