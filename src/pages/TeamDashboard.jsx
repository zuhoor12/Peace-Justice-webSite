import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";
import DashboardCardTeam from "../component/DashboardCardTeam";

// ✅ خارج از TeamDashboard — دیگه re-render نمیشه
function FormFields({ val, onChange, onSubmit, onCancel, isEdit }) {
    return (
        <div className="flex flex-col gap-4 mt-4 max-h-[65vh] overflow-y-auto pr-1">
            <div className="flex flex-col gap-1">
                <label className="popFont text-[15px]">Full Name *</label>
                <input
                    value={val.name}
                    onChange={e => onChange("name", e.target.value)}
                    placeholder="Full name"
                    className="border pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="popFont text-[15px]">Role / Title *</label>
                <input
                    value={val.role}
                    onChange={e => onChange("role", e.target.value)}
                    placeholder="e.g. Executive Director"
                    className="border pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="popFont text-[15px]">Biography</label>
                <textarea
                    value={val.bio}
                    onChange={e => onChange("bio", e.target.value)}
                    placeholder="Short bio"
                    className="border h-28 resize-none pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="popFont text-[15px]">Photo URL</label>
                <input
                    value={val.photo}
                    onChange={e => onChange("photo", e.target.value)}
                    placeholder="https://..."
                    className="border pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="popFont text-[15px]">Display Order</label>
                <input
                    value={val.order}
                    onChange={e => onChange("order", e.target.value)}
                    type="number"
                    placeholder="0"
                    className="border pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]"
                />
            </div>
            <div className="flex gap-3 justify-end pt-1 pb-2">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 rounded-xl border border-gray-400 popFont text-gray-800 text-[14px]"
                >Cancel</button>
                <button
                    onClick={onSubmit}
                    className="px-4 py-2 rounded-xl bg-sky-900 popFont font-bold text-white text-[14px]"
                >{isEdit ? "Save Changes" : "Save"}</button>
            </div>
        </div>
    );
}

function TeamDashboard() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [members, setMembers] = useState([]);
    const [addbox, setAddBox] = useState(false);
    const [editbox, setEditBox] = useState(false);
    const [editMember, setEditMember] = useState(null);

    const emptyForm = { name: "", role: "", bio: "", photo: "", order: 0 };
    const [form, setForm] = useState(emptyForm);

    useEffect(() => {
        if (searchParams.get("title") !== "Team") {
            setSearchParams({ title: "Team" });
        }
        fetchMembers();
    }, []);

    const fetchMembers = () => {
        axios.get("http://localhost:3000/Team")
            .then(res => setMembers(res.data));
    };

    const handleAdd = () => {
        axios.post("http://localhost:3000/Team", form).then(() => {
            fetchMembers();
            setAddBox(false);
            setForm(emptyForm);
        });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/Team/${id}`).then(() => fetchMembers());
    };

    const openEdit = (member) => {
        setEditMember({ ...member });
        setEditBox(true);
    };

    const handleEdit = () => {
        axios.put(`http://localhost:3000/Team/${editMember._id || editMember.id}`, editMember).then(() => {
            fetchMembers();
            setEditBox(false);
            setEditMember(null);
        });
    };

    const backdropV = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
    const modalV = {
        hidden: { opacity: 0, y: 50, scale: 0.96 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 28 } },
        exit: { opacity: 0, y: 30, scale: 0.96, transition: { duration: 0.18 } }
    };
    const cardV = {
        hidden: { opacity: 0, y: 24 },
        visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.38, ease: "easeOut" } })
    };

    return (
        <div className="w-full h-full bg-[hsl(43,33%,96%)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pl-6 pr-6 pt-10 py-10">
                <h1 className="text-3xl font-bold myFont">Team Members</h1>
                <button
                    onClick={() => setAddBox(true)}
                    className="bg-[hsl(210,100%,20%)] text-white py-2 px-4 gap-2 cursor-pointer rounded-xl flex items-center"
                >
                    <BsPlus size={22} />
                    Add Member
                </button>
            </div>

            {/* Grid کارت‌ها */}
            <div className="w-full border-t bg-[hsl(43,33%,96%)]">
                <div className="w-[90%] m-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                    {members.map((member, i) => (
                        <motion.div
                            key={member._id || member.id}
                            custom={i}
                            variants={cardV}
                            initial="hidden"
                            animate="visible"
                        >
                            <DashboardCardTeam
                                data={member}
                                onDelete={() => handleDelete(member._id || member.id)}
                                onEdit={() => openEdit(member)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ADD MODAL */}
            <AnimatePresence>
                {addbox && (
                    <motion.div variants={backdropV} initial="hidden" animate="visible" exit="exit"
                        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                        <motion.div variants={modalV} initial="hidden" animate="visible" exit="exit"
                            className="bg-white w-[90%] max-w-lg rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-lg popFont font-semibold">Add Member</span>
                                <MdClose size={22} className="cursor-pointer text-gray-600" onClick={() => setAddBox(false)} />
                            </div>
                            <FormFields
                                val={form}
                                onChange={(key, v) => setForm(prev => ({ ...prev, [key]: v }))}
                                onSubmit={handleAdd}
                                onCancel={() => setAddBox(false)}
                                isEdit={false}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* EDIT MODAL */}
            <AnimatePresence>
                {editbox && editMember && (
                    <motion.div variants={backdropV} initial="hidden" animate="visible" exit="exit"
                        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                        <motion.div variants={modalV} initial="hidden" animate="visible" exit="exit"
                            className="bg-white w-[90%] max-w-lg rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-lg popFont font-semibold">Edit Member</span>
                                <MdClose size={22} className="cursor-pointer text-gray-600" onClick={() => setEditBox(false)} />
                            </div>
                            <FormFields
                                val={editMember}
                                onChange={(key, v) => setEditMember(prev => ({ ...prev, [key]: v }))}
                                onSubmit={handleEdit}
                                onCancel={() => setEditBox(false)}
                                isEdit={true}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default TeamDashboard;