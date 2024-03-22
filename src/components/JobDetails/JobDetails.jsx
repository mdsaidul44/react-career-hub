import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplyJobApplication } from "../Utility/LocalStorage";

 

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job =>job.id === idInt)
    console.log(job)

    const handleApplyJob =() =>{
        saveApplyJobApplication(id)
        toast('You have applied successfully')
    }
    return (
        <div>
            <h2 className="text-center font-bold text-3xl mb-6">Job details:{id}</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border col-span-3 p-8"> 
                    <h1><span className="font-bold">Job Description:</span>  {job.job_description}</h1>
                    <p><span className="font-bold">Job Responsibility:</span>  {job.job_responsibility}</p>
                    <h1><span className="font-bold">Educational Requirements:</span>  {job.educational_requirements}</h1>
                    <p><span className="font-bold">Experiences:</span>  {job.experiences}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl font-semibold">Job details</h2>
                    <button className="btn btn-primary w-full" onClick={handleApplyJob}>Apply now</button>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;