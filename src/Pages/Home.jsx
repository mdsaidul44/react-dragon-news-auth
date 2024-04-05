import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header/Header";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";

 

const Home = () => {
    const news = useLoaderData() 
    return (
        <div>
            <Header></Header> 
            <BreakingNews></BreakingNews>
            <Navbar></Navbar> 
            <div className="  grid md:grid-cols-4 grid-clos-1 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2 border">
                    <h3 className="text-4xl">News coming soon</h3>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;