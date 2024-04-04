import { IoLogoGoogle } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full ">
                    <IoLogoGoogle></IoLogoGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full ">
                    <BsGithub></BsGithub>
                    Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-2xl mb-3 font-semibold">Find Us on</h2>
                <a className="flex text-lg items-center border rounded-t-lg p-4" href="">
                    <GrFacebookOption className="mr-3"></GrFacebookOption>
                    FaceBook
                </a>
                <a className="flex text-lg items-center border-x p-4" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="flex text-lg items-center border rounded-b-lg p-4" href="">
                    <FaInstagramSquare className="mr-3"></FaInstagramSquare>
                    Instagram
                </a>
            </div>
            {/* Q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Q Zone</h2> 
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;