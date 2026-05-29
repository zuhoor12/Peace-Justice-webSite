function MissionCard({props}){
    let Icon = props.icon
    return (
        <div className="bg-[#FCFAF8] w-70 p-6 flex flex-col gap-3 items-start pl-3 justify-center h-60 rounded-2xl m- border border-transparent  hover:border-[#285728] transition-all outline-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <Icon  className="w-12 h-12 p-4 rounded-2xl bg-[hsl(120_37%_25%/0.2)] text-[#285728]"/>
            <h1 className="myFont text-2xl">
                {props.title}
            </h1>
            <p className="text-gray-500">{props.paragraph}</p>
        </div>
    )
}

export default MissionCard;