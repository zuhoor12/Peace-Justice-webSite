import { MdDriveFileRenameOutline, MdDelete } from "react-icons/md";

function DashboardCardTeam({ data, onDelete, onEdit }) {

    const initials = data.name
        ? data.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)
        : "?";

    return (
        <div className="w-full bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col gap-3">
            {/* ردیف اول: عکس/avatar + اسم + نقش */}
            <div className="flex items-center gap-3">
                {data.photo ? (
                    <img
                        src={data.photo}
                        alt={data.name}
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                        <span className="text-gray-600 font-semibold text-[15px]">{initials}</span>
                    </div>
                )}
                <div className="flex flex-col overflow-hidden">
                    <span className="font-semibold text-gray-900 myFont text-[15px] truncate">{data.name}</span>
                    <span className="text-[13px] text-gray-500 truncate">{data.role}</span>
                </div>
            </div>

            {/* بیوگرافی */}
            {data.bio && (
                <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed">{data.bio}</p>
            )}

            {/* دکمه‌ها */}
            <div className="flex items-center gap-4 pt-1 border-t border-gray-100">
                <button
                    onClick={onEdit}
                    className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-800 cursor-pointer transition-colors"
                >
                    <MdDriveFileRenameOutline size={17} />
                    Edit
                </button>
                <button
                    onClick={onDelete}
                    className="flex items-center gap-1 text-[13px] text-red-400 hover:text-red-600 cursor-pointer transition-colors"
                >
                    <MdDelete size={17} />
                </button>
            </div>
        </div>
    );
}

export default DashboardCardTeam;