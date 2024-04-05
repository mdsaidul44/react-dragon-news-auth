import { useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

 

const NewsDetails = () => {
    const {id} = useParams()
    console.log(id)
    return ( 
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
            <div className="col-span-3">
            <h1>News details</h1>
            <p>{id}</p>
            </div>
            <div >
                <RightSideNav></RightSideNav>
            </div>
        </div>
        </div>
    );
};

export default NewsDetails;