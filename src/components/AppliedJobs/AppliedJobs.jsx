import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getSearchParamsForLocation } from "react-router-dom/dist/dom";

 

const AppliedJobs = () => {
    const jobs = useLoaderData()

    useEffect( () =>{
        const jobStoredIds = getSearchParamsForLocation();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => ) 
        }
    },[])
    return (
        <div>
            <h3>Applied jobs</h3>
        </div>
    );
};

export default AppliedJobs;