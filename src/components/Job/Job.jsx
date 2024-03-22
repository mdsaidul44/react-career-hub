import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";



const Job = ({job}) => {
 
    const { id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img className="w-28" src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <h1>{company_name}</h1> 
          <div>
            <button className="px-6 py-2 border mr-4 rounded font-bold text-sky-500">{remote_or_onsite}</button> 
            <button className="px-6 py-2 border rounded font-bold text-sky-500">{job_type}</button> 
          </div>
          <div className="flex gap-4 mt-4">
            <h1 className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn>{location}</h1>
            <h1 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h1>
          </div>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions  ">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;