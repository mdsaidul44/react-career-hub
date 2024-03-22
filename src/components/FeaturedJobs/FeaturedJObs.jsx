import { useEffect, useState } from "react";
import Job from "../Job/Job";



const FeaturedJObs = () => {
    const [jobs, setJobs] = useState([])
     // this is not the best way to load show all data.
     const [jobLength ,setJonLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold">Featured Jobs :{jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,jobLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={jobLength === jobs.length && 'hidden'}>
                <button className="btn  btn-primary" onClick={() => setJonLength(jobs.length)}>Show all</button>
            </div>
        </div>
    );
};

export default FeaturedJObs;