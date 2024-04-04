import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex mt-12 flex-col items-center justify-center'>
            <img src={logo} alt="" />
            <p className='font-normal mt-5 mb-2 text-base'>Journalism Without Fear or Favour</p>
            <p className='text-lg mb-7 font-medium'>{moment().format("dddd, ")}<span className='text-[#706F6F]'>{moment().format(" MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;