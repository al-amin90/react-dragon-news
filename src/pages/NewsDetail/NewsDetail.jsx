import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Header from "../shared/Header/Header";
import left1 from "../../assets/1.png"
import left2 from "../../assets/2.png"
import left3 from "../../assets/3.png"
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { IoCalendarClearOutline } from "react-icons/io5";


const NewsDetail = () => {
    const { newsId } = useParams();
    const navigate = useNavigate(null)
    const newsAll = useLoaderData();

    const newsDetails = newsAll.find(news => news._id === newsId)
    const { title, image_url, details } = newsDetails;


    return (
        <div>
            <Header></Header>

            <div className='grid grid-cols-1 md:grid-cols-4 mb-24 gap-6'>
                <div className=' md:col-span-3 '>
                    <h2 className='font-semibold text-lg mb-5'>Dragon News Home</h2>

                    <div className="border rounded-lg p-6">
                        <img src={image_url} alt="" />
                        <h2 className='font-bold mt-5  text-2xl text-[#403F3F]'>{title}</h2>
                        <p className='font-normal text-base mt-2 mb-1'>{details}</p>
                        <button onClick={() => { navigate(-1) }} className='btn mt-4 bg-[#D72050] font-medium text-white rounded-none'><FaArrowLeft className="text-base" /> All news in this category</button>
                    </div>

                    <h2 className='font-semibold text-lg mb-5 mt-7'>Editors Insight</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1">
                        <div >
                            <img src={left1} alt="" />
                            <h2 className='font-semibold text-lg text-[#403F3F] my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>

                            <h5 className='text-base mb-4 flex items-center gap-5 text-[#403F3F] mr-5 font-medium'>Sports
                                <span className='text-[#9F9F9F] flex justify-center items-center gap-3'><IoCalendarClearOutline /> Jan 4, 2022</span>

                            </h5>
                        </div>
                        <div >
                            <img src={left2} alt="" />
                            <h2 className='font-semibold text-lg text-[#403F3F] my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>

                            <h5 className='text-base mb-4 flex items-center gap-5 text-[#403F3F] mr-5 font-medium'>Sports
                                <span className='text-[#9F9F9F] flex justify-center items-center gap-3'><IoCalendarClearOutline /> Jan 4, 2022</span>

                            </h5>
                        </div>
                        <div >
                            <img src={left3} alt="" />
                            <h2 className='font-semibold text-lg text-[#403F3F] my-4'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>

                            <h5 className='text-base mb-4 flex items-center gap-5 text-[#403F3F] mr-5 font-medium'>Sports
                                <span className='text-[#9F9F9F] flex justify-center items-center gap-3'><IoCalendarClearOutline /> Jan 4, 2022</span>

                            </h5>
                        </div>
                    </div>
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;