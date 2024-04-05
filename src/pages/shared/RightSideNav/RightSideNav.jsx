
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import 'animate.css';
import { useRef } from "react";

const RightSideNav = () => {
    const loginRef = useRef(null)


    const handleEffect = () => {
        loginRef.current.classList.add("animate__hinge")

        setTimeout(() => {
            loginRef.current.classList.remove("animate__hinge")
        }, 2000)
    }

    return (
        <div>
            <h2 className='font-semibold text-lg  '>Login with</h2>

            <div className="mt-5 mb-7">
                <button ref={loginRef} onClick={handleEffect} className="btn w-full text-blue-400 btn-outline animate__animated">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn mt-2 w-full animate__animated text-gray-800 btn-outline">
                    <FaGithub ></FaGithub>
                    Login with Github
                </button>
            </div>

            <h2 className='font-semibold text-lg'>Find Us On</h2>
            <div className="my-5 ">
                <a className="p-4 border border-[#E7E7E7] rounded-t-lg w-full text-base flex items-center gap-3 cursor-pointer btn-outline">
                    <FaFacebookF className="text-blue-400 text-lg"></FaFacebookF>
                    <span className="text-[#706F6F] font-semibold">Facebook</span>
                </a>
                <a className="p-4 border-x border-[#E7E7E7]  w-full text-base flex items-center gap-3 cursor-pointer btn-outline">
                    <FaTwitter className="text-blue-400 text-lg"></FaTwitter>
                    <span className="text-[#706F6F] font-semibold">Twitter</span>
                </a>
                <a className="p-4 border border-[#E7E7E7] rounded-b-lg w-full text-base flex items-center gap-3 cursor-pointer btn-outline">
                    <FaInstagram className="text-pink-400 text-lg"></FaInstagram>
                    <span className="text-[#706F6F] font-semibold">Instagram</span>
                </a>
            </div>

            <div className="bg-[#F3F3F3] p-1">
                <h2 className='font-semibold m-4 text-lg'>Q-Zone</h2>
                <img src={qZone1} className="mb-5 border border-gray-300 border-dashed" alt="" />
                <img src={qZone2} className="mb-5 border border-gray-300 border-dashed" alt="" />
                <img src={qZone3} className="mb-5 border border-gray-300 border-dashed" alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;