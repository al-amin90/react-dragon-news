import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCalendarClearOutline } from "react-icons/io5";
import left1 from "../../../assets/1.png"
import left2 from "../../../assets/2.png"
import left3 from "../../../assets/3.png"

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("./categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>All Categories</h2>

            <div className='flex flex-col gap-2'>
                {
                    categories.map(category => <NavLink
                        to={`/category/${category.id}`}
                        key={category.id}
                        className={({ isActive }) =>
                            isActive ? "w-full btn bg-[#E7E7E7] font-bold text-[#403F3F ]"
                                : "w-full btn bg-transparent font-normal text-[#9F9F9F]"
                        }
                    >{category.name}
                    </NavLink>)
                }
            </div>

            <div className='mt-5'>
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
    );
};

export default LeftSideNav;