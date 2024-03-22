import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJObs from "../FeaturedJobs/FeaturedJObs";

 

const Home = () => {
    return (
        <div> 
            <Banner></Banner> 
            <CategoryList></CategoryList>  
            <FeaturedJObs></FeaturedJObs> 
        </div>
    );
};

export default Home;