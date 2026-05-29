import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function OverFlowDashboard(){

    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {

        if(searchParams.get("title") !== "Over View"){

            setSearchParams({
                title: "Over View"
            });

        }

    }, []);
    return (
        <div className="w-full h-full bg-green-500">

        </div>
    )
}

export default OverFlowDashboard;