import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";



const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState([]);

    const jobs = useLoaderData()

    useEffect(() => {
        const jobStoredIds = getStoredJobApplication();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => jobStoredIds.includes(job.id)) 


            const jobsApplied = [];
            for (const id of jobStoredIds) {
                const job = jobs.find(job => job.id == id)
                if (job) {
                    jobsApplied.push(job)
                }
            }

            setAppliedJob(jobsApplied)
            console.log(jobs, jobStoredIds, jobsApplied)
        }
    },[jobs])
    return (
        <div>
            <h3>Applied jobs: {appliedJob.length}</h3>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Full time</a></li>
                </ul>
            </details>
            <ul>
                {
                    appliedJob.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name} : {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;