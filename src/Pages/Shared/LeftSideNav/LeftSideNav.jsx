import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [category ,setCategory] =useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div>
            <h1 className="text-xl ">All Categories : {category.length}</h1>
            <p className="bg-slate-300 p-4 m-4 font-semibold">National News</p>
            {
                category.map(item=> <Link
                     key={item.id}
                     className="block ml-4 p-3 text-gray-500 font-semibold "
                     to={`/category/${item.id}`}
                     >{item.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;