import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";


const News = ({ news }) => {
    const { _id, rating, total_view, title, author, thumbnail_url, image_url, details } = news;
    console.log(news);

    return (
        <div className="mb-8">
            <div className='p-5 flex items-center justify-between rounded-t-lg bg-[#F3F3F3]'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={author.img} className='w-10 aspect-square rounded-full' />
                    </div>
                    <div>
                        <h4 className='text-base mb-2 font-semibold'>{author.name}</h4>
                        <p className='font-normal text-sm'>{author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 text-xl'>
                    <FaRegBookmark></FaRegBookmark>
                    <CiShare2 className='text-2xl' />
                </div>
            </div>
            <div className='border border-[#F3F3F3] rounded-b-lg p-5'>
                <h2 className='font-bold mb-5 text-lg text-[#403F3F]'>{title}</h2>
                <img src={image_url} alt="" />
                <p className='font-normal text-sm mt-8 mb-1'>{details.slice(0, 250)}.... </p>
                <a className='mb-4 block cursor-pointer text-orange-600 font-semibold'>Read More</a>
                <div className='flex items-center justify-between pt-4 border-t'>
                    <div className='flex items-end'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h4 className='ml-3 text-[#706F6F] font-medium'>{rating.number}</h4>
                    </div>
                    <div className='flex items-center'>
                        <FaEye className='text-xl' />
                        <h4 className='ml-3 text-[#706F6F] font-medium'>{total_view}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;