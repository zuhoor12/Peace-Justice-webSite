import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import axios from "axios";
import DashboardCardBlog from "../component/DashboardCardBlog";

function BlogDashboard() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [blogs, setBlogs] = useState([]);
    const [addbox, setAddBox] = useState(false);
    const [editbox, setEditBox] = useState(false);
    const [editBlog, setEditBlog] = useState(null);

    // --- فرم Add ---
    const emptyForm = { title: "", excerpt: "", content: "", coverImage: "", author: "", category: "News", published: false };
    const [form, setForm] = useState(emptyForm);

    useEffect(() => {
        if (searchParams.get("title") !== "Blog") {
            setSearchParams({ title: "Blog" });
        }
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        axios.get("http://localhost:3000/blog")
            .then(res => setBlogs(res.data));
    };

    const handleAdd = () => {
        const newPost = {
            title: form.title,
            excerpt: form.excerpt,
            content: form.content,
            coverImage: form.coverImage,
            author: form.author,
            category: form.category,
            published: form.published,
            date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
        };
        axios.post("http://localhost:3000/blog", newPost).then(() => {
            fetchBlogs();
            setAddBox(false);
            setForm(emptyForm);
        });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/blog/${id}`).then(() => fetchBlogs());
    };

    const openEdit = (blog) => {
        setEditBlog({ ...blog });
        setEditBox(true);
    };

    const handleEdit = () => {
        axios.put(`http://localhost:3000/blog/${editBlog._id || editBlog.id}`, editBlog).then(() => {
            fetchBlogs();
            setEditBox(false);
            setEditBlog(null);
        });
    };

    // --- variants ---
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

    const categories = ["News", "Story", "Update", "Report", "Event"];

    const FormFields = ({ isEdit }) => {
        const val = isEdit ? editBlog : form;
        const set = (key, v) => isEdit
            ? setEditBlog({ ...editBlog, [key]: v })
            : setForm({ ...form, [key]: v });

        return (
            <div className="flex flex-col gap-4 mt-4 max-h-[65vh] overflow-y-auto pr-1">
                {/* Title */}
                <div className="flex flex-col gap-1">
                    <label className="popFont text-[15px]">Title *</label>
                    <input value={val.title} onChange={e => set("title", e.target.value)}
                        placeholder="Article title"
                        className="border pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]" />
                </div>
                {/* Excerpt */}
                <div className="flex flex-col gap-1">
                    <label className="popFont text-[15px]">Excerpt</label>
                    <textarea value={val.excerpt} onChange={e => set("excerpt", e.target.value)}
                        placeholder="Short preview text"
                        className="border h-20 resize-none pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]" />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-1">
                    <label className="popFont text-[15px]">Content *</label>
                    <textarea value={val.content} onChange={e => set("content", e.target.value)}
                        placeholder="Full article content (Markdown)"
                        className="border h-28 resize-none pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]" />
                </div>
                {/* Cover Image */}
                <div className="flex flex-col gap-1">
                    <label className="popFont text-[15px]">Cover Image URL</label>
                    <input value={val.coverImage} onChange={e => set("coverImage", e.target.value)}
                        placeholder="https://..."
                        className="border pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]" />
                </div>
                {/* Author */}
                <div className="flex flex-col gap-1">
                    <label className="popFont text-[15px]">Author</label>
                    <input value={val.author} onChange={e => set("author", e.target.value)}
                        placeholder="Author name"
                        className="border pl-3 py-2 placeholder:text-gray-400 placeholder:text-[13px] rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px]" />
                </div>
                {/* Category */}
                <div className="flex flex-col gap-1">
                    <label className="popFont text-[15px]">Category</label>
                    <select value={val.category} onChange={e => set("category", e.target.value)}
                        className="border pl-3 py-2 rounded-[6px] focus:border-gray-700 focus:outline-none border-gray-300 text-[14px] bg-white">
                        {categories.map(c => <option key={c}>{c}</option>)}
                    </select>
                </div>
                {/* Published toggle */}
                <div className="flex items-center gap-3">
                    <label className="popFont text-[15px]">Published</label>
                    <div
                        onClick={() => set("published", !val.published)}
                        className={`w-11 h-6 rounded-full cursor-pointer transition-colors duration-300 relative ${val.published ? "bg-sky-900" : "bg-gray-300"}`}
                    >
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow ${val.published ? "left-5" : "left-0.5"}`}
                        />
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex gap-3 justify-end pt-1 pb-2">
                    <button onClick={() => isEdit ? setEditBox(false) : setAddBox(false)}
                        className="px-4 py-2 rounded-xl border border-gray-400 popFont text-gray-800 text-[14px]">Cancel</button>
                    <button onClick={isEdit ? handleEdit : handleAdd}
                        className="px-4 py-2 rounded-xl bg-sky-900 popFont font-bold text-white text-[14px]">
                        {isEdit ? "Save Changes" : "Save"}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full h-full bg-[hsl(43,33%,96%)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pl-6 pr-6 pt-10 py-10">
                <h1 className="text-3xl font-bold myFont">Blog Posts</h1>
                <button onClick={() => setAddBox(true)}
                    className="bg-[hsl(210,100%,20%)] text-white py-2 px-4 gap-2 cursor-pointer rounded-xl flex items-center">
                    <BsPlus size={22} />
                    New Post
                </button>
            </div>

            {/* List */}
            <div className="w-full border-t bg-[hsl(43,33%,96%)]">
                <div className="w-[90%] m-auto mt-8 flex flex-col gap-4">
                    {blogs.map((blog, i) => (
                        <motion.div
                            key={blog._id || blog.id}
                            custom={i}
                            variants={cardV}
                            initial="hidden"
                            animate="visible"
                            className="w-full"
                        >
                            <DashboardCardBlog
                                data={blog}
                                onDelete={() => handleDelete(blog._id || blog.id)}
                                onEdit={() => openEdit(blog)}
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
                                <span className="text-lg popFont font-semibold">New Post</span>
                                <MdClose size={22} className="cursor-pointer text-gray-600" onClick={() => setAddBox(false)} />
                            </div>
                            <FormFields isEdit={false} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* EDIT MODAL */}
            <AnimatePresence>
                {editbox && editBlog && (
                    <motion.div variants={backdropV} initial="hidden" animate="visible" exit="exit"
                        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                        <motion.div variants={modalV} initial="hidden" animate="visible" exit="exit"
                            className="bg-white w-[90%] max-w-lg rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-lg popFont font-semibold">Edit Post</span>
                                <MdClose size={22} className="cursor-pointer text-gray-600" onClick={() => setEditBox(false)} />
                            </div>
                            <FormFields isEdit={true} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default BlogDashboard;