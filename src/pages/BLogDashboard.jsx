import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function BLogDashboard(){

    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {

        if(searchParams.get("title") !== "blog"){

            setSearchParams({
                title: "blog"
            });

        }

    }, []);
    return "BLogDashboard"
}
export default BLogDashboard;