import { useEffect, useState } from "react";
import {useSearchParams} from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
function NavDashboard({onclick}){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");

    return (
        <div className={`flex  items-center gap-3 pl-4 w-full bg-white h-20  `}>
            <IoMdMenu size={24} className="lg:hidden block" onClick={onclick}/>
            <span>{title}</span>
        </div>
    )
}

export default NavDashboard;