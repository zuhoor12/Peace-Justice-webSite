import {useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function Login(){
    const navigate = useNavigate();
    let [isloginBox, setIsLoginBox] = useState(true)
    let [emails, setEmails] = useState("")
    let [password, setPassword] = useState("")

    let emailHandler = (e)=>{
        let value = e.target.value ;
        setEmails(value)
    }
    let passwordHandler = (e)=>{
        let value = e.target.value ;
        if(value.length> 0){
            setPassword(value)
        }
    }
    let loginFun = ()=>{
        axios.get("http://localhost:3000/userInfo")
        .then(response =>{
            if(response.data.userName == emails && response.data.pass == password){
                localStorage.setItem("token",true)
                navigate("/dashboard/OverView")

            }
            else{
                alert("pass or email is incorect")
            }
        })
    }
    return(
        <div className="w-full h-screen lg:grid lg:grid-cols-2">
            <div className="hidden  lg:block w-full h-full relative">
                {/* left Content */}
                    <img src="/public/loginPic copy.jpeg" alt="" className="w-full h-full object-cover"/>
                <div className="w-full h-full flex gap-6 items-center flex-col bg-[hsl(210_100%_20%/0.9)] justify-center absolute left-0 top-0" >
                    <span className="w-20 h-20 text-amber-300 font-bold flex items-center justify-center bg-[hsl(195,22%,29%)]   rounded-full text-3xl popFont border-amber-300 border-2 ">p</span>
                    <h1 className="text-4xl myFont font-bold text-white text-center">Peace & Justice <br /> International</h1>
                    <p className="w-100 text-gray-100 h-10 text-center p-10 border-t-2 border-amber-200">Building a Better World Together</p>
                    <div className="flex gap-4">
                        <div className="flex items-center flex-col gap-2">
                            <span className="text-amber-300 myFont  text-3xl font-bold">120+</span>
                            <span className="text-gray-300 ">Countries</span>
                        </div>

                        <div className="flex items-center flex-col gap-2">
                            <span className="text-amber-300 myFont  text-3xl font-bold">2M+</span>
                            <span className="text-gray-300 ">Lives Impacted</span>
                        </div>
                        <div className="flex items-center flex-col gap-2">
                            <span className="text-amber-300 myFont  text-3xl font-bold">30 yrs</span>
                            <span className="text-gray-300 ">Of Service</span>
                        </div >
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center border h-screen bg-[hsl(220,33%,93%)]">
                {isloginBox ? (
                            <div className="max-w-120 w-[80%] bg-white  h-150 gap-1 rounded-2xl flex flex-col items-center justify-evenly">
                                <div className="flex flex-col items-center ">
                                    <span className="w-15 h-15 font-bold flex items-center justify-center bg-[hsl(210_100%_20%/0.9)] text-amber-300 rounded-full text-2xl popFont  ">p</span>
                                    <h1 className="text-5xl myFont text-[hsl(210_100%_20%/0.9)]">Welcome Back</h1>
                                    <p className="text-gray-500 popFont ">Login to your account</p>
                                </div>
                                <div className="w-full pl-6 gap-7 pr-3 flex flex-col  ">
                                    <div className="flex flex-col ">
                                        <label htmlFor="emails" className="popFont pl-3">Email Address</label>
                                        <input onChange={emailHandler} type="email" placeholder="you@example.com" className=" border border-gray-400 rounded-[10px] pl-4 pt-2 py-2" />
                                    </div>

                                    <div className="flex flex-col ">
                                        <label htmlFor="pass" className="popFont pl-3">Password</label>
                                        <input onChange={passwordHandler} type="password" placeholder="your password" className=" border border-gray-400 rounded-[10px] pl-3  pt-2 py-2"/>
                                    </div>
                                    <button onClick={loginFun} className="w-full bg-[hsl(45,100%,50%)]  pt-2 py-2 rounded-xl hover:bg-[hsl(45_100%_50%/0.8)] transition-colors duration-200">Login</button>
                                    <div className="flex w-full items-center justify-center gap-3">
                                        <hr className="w-full border-gray-300" />
                                            <p>OR</p>
                                        <hr className="w-full border-gray-300" />
                                    </div>
                                    
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-gray-500">Don't have an accunt? </span>
                                        <span onClick={()=>setIsLoginBox(false)}>Register</span>
                                    </div>
                                </div>
                            </div>
                ) : (
                    <div className="max-w-120 w-[90%] rounded-2xl h-200  bg-white gap-4 flex flex-col items-center justify-evenly">
                                <div className="flex flex-col items-center">
                                    <span className="w-15 h-15 font-bold flex items-center justify-center bg-[hsl(210_100%_20%/0.9)] text-amber-300 rounded-full text-2xl popFont  ">p</span>
                                    <h1 className="text-5xl myFont text-[hsl(210_100%_20%/0.9)]">Create Your Account</h1>
                                    <p className="text-gray-500 popFont ">Join us in building a better world</p>
                                </div>
                                <div className=" flex-col pl-5 pr-6 flex gap-4">
                                    <div className="grid grid-cols-2 gap-2  w-full items-center justify-between ">
                                        <div className="flex gap-2 flex-col  ">
                                            <label htmlFor="FirstName" className="popFont">First Name</label>
                                            <div className="flex  items-center outline-[1.5px] outline-transparent border rounded-[7px] focus-within:outline-[1.5px] focus-within:border-transparent focus-within:outline-[hsl(210_100%_20%/0.9)]  gap-2 border-gray-500 ">
                                                <FaUserAlt size={20} className="pl-1 text-gray-500"/>
                                                <input  type="text" placeholder="Hellen" className="w-full group  pt-2 py-2 pl-1 focus:outline-none"/>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 flex-col  ">
                                            <label htmlFor="LastName" className="popFont">Last Name</label>
                                            <div className="flex  items-center outline-[1.5px] outline-transparent border rounded-[7px] focus-within:outline-[1.5px] focus-within:border-transparent focus-within:outline-[hsl(210_100%_20%/0.9)]  gap-2 border-gray-500 ">
                                                <FaUserAlt size={20} className="pl-1 text-gray-500"/>
                                                <input type="text" placeholder="Bayat" className="w-full group  pt-2 py-2 pl-1 focus:outline-none"/>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="flex gap-2 flex-col  ">
                                        <label htmlFor="email" className="popFont">Email Address</label>
                                        <div className="flex  items-center outline-[1.5px] outline-transparent border rounded-[7px] focus-within:outline-[1.5px] focus-within:border-transparent focus-within:outline-[hsl(210_100%_20%/0.9)]  gap-2 border-gray-500 ">
                                            <MdOutlineEmail size={24} className="pl-1 text-gray-500"/>
                                            <input type="email" placeholder="you@gmail.com" className="w-full group  pt-2 py-2 pl-1 focus:outline-none"/>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 flex-col  ">
                                        <label htmlFor="phone" className="popFont">Phone Number (Optional) </label>
                                        <div className="flex  items-center outline-[1.5px] outline-transparent border rounded-[7px] focus-within:outline-[1.5px] focus-within:border-transparent focus-within:outline-[hsl(210_100%_20%/0.9)]  gap-2 border-gray-500 ">
                                            <MdOutlinePhoneForwarded size={24} className="pl-1 text-gray-500"/>
                                            <input type="text" placeholder="+937xxxxxxxxx" className="w-full group  pt-2 py-2 pl-1 focus:outline-none"/>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 flex-col  ">
                                        <label htmlFor="pass" className="popFont">Password</label>
                                        <div className="flex  items-center outline-[1.5px] outline-transparent border rounded-[7px] focus-within:outline-[1.5px] focus-within:border-transparent focus-within:outline-[hsl(210_100%_20%/0.9)]  gap-2 border-gray-500 ">
                                            <IoLockClosedOutline size={24} className="pl-1 text-gray-500"/>
                                            <input type="password" placeholder="password" className="w-full group  pt-2 py-2 pl-1 focus:outline-none"/>
                                        </div>
                                    </div>                             

                                    <div className="flex gap-2 flex-col  ">
                                        <label htmlFor="pass" className="popFont">Password</label>
                                        <div className="flex  items-center outline-[1.5px] outline-transparent border rounded-[7px] focus-within:outline-[1.5px] focus-within:border-transparent focus-within:outline-[hsl(210_100%_20%/0.9)]  gap-2 border-gray-500 ">
                                            <IoLockClosedOutline size={24} className="pl-1 text-gray-500"/>
                                            <input type="password" placeholder="password" className="w-full group  pt-2 py-2 pl-1 focus:outline-none"/>
                                        </div>
                                    </div> 

                                    <button className="w-full bg-[hsl(45,100%,50%)]  pt-2 py-2 rounded-xl hover:bg-[hsl(45_100%_50%/0.8)] transition-colors duration-200">
                                        Create Account
                                    </button>

                                    <div className="flex w-full items-center justify-center gap-3">
                                        <hr className="w-full border-gray-300" />
                                            <p>OR</p>
                                        <hr className="w-full border-gray-300" />
                                    </div>
                                    <div  className="flex items-center justify-center gap-2">
                                        <span  className="text-gray-500">Already have an account?</span>
                                        <span className="cursor-pointer" onClick={()=>setIsLoginBox(true)}>login</span>
                                    </div>
                                </div>
                            </div>
                )}
            </div>

        </div>
    )
}

export default Login;