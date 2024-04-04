import React, { useEffect, useState } from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import News from './News';


const Home = () => {
    const [newss, setNewss] = useState([])

    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => setNewss(data))
    }, [])



    return (
        <div className=''>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=' md:col-span-2 '>
                    <h2 className='font-semibold text-lg mb-5'>Dragon News Home:</h2>

                    {
                        newss.map(news => <News key={news._id} news={news}></News>)
                    }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;