import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";



const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">BREAKING NEWS</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="ml-4" to='/'> I can be a React component, multiple React components, or just some text. </Link>
                <Link className="ml-2" to='/'> I can be a React component, multiple React components, or just some text. </Link>
                <Link className="ml-2" to='/'> I can be a React component, multiple React components, or just some text. </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;