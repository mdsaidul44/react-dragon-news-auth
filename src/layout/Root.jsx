import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";

 

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto font-poppins">
            <Home></Home>
            <Outlet/>
        </div>
    );
};

export default Root;