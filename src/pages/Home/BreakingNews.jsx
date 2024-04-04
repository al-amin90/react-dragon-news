import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className='bg-[#F3F3F3] p-4 flex items-center gap-5'>
            <button className='btn bg-[#D72050] text-white rounded-none'>Latest</button>
            <div className='text-[#403F3F] font-semibold text-base'>
                <Marquee pauseOnHover speed={100}>
                    <Link to="/" className="mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                    <Link to="/" className="mr-12">I can be a React component, multiple React components, or just some text...</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;