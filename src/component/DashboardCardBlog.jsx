import { MdDriveFileRenameOutline, MdDelete } from "react-icons/md";

function DashboardCardBlog({ data, onDelete, onEdit }) {

    const categoryColor = {
        News:   "bg-[#1a472a] text-white",
        Story:  "bg-[#1a472a] text-white",
        Update: "bg-[#1a472a] text-white",
        Report: "bg-[#1a472a] text-white",
        Event:  "bg-[#1a472a] text-white",
    };

    return (
        <div className="w-full bg-white rounded-xl px-5 py-4 flex items-center justify-between border border-gray-100 shadow-sm">
            {/* متن */}
            <div className="flex flex-col gap-1 overflow-hidden">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-gray-900 myFont text-[15px] truncate">{data.title}</span>
                    {data.category && (
                        <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${categoryColor[data.category] || "bg-gray-200 text-gray-700"}`}>
                            {data.category}
                        </span>
                    )}
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${data.published ? "bg-[#1a472a] text-white" : "bg-gray-200 text-gray-600"}`}>
                        {data.published ? "Published" : "Draft"}
                    </span>
                </div>
                <span className="text-[13px] text-gray-500">
                    by {data.author || "Unknown"}{data.date ? ` · ${data.date}` : ""}
                </span>
            </div>

            {/* دکمه‌ها */}
            <div className="flex gap-3 items-center ml-4 shrink-0">
                <MdDriveFileRenameOutline
                    size={20}
                    className="text-gray-400 cursor-pointer hover:text-gray-700 transition-colors"
                    onClick={onEdit}
                />
                <MdDelete
                    size={20}
                    className="text-red-400 cursor-pointer hover:text-red-600 transition-colors"
                    onClick={onDelete}
                />
            </div>
        </div>
    );
}

export default DashboardCardBlog;