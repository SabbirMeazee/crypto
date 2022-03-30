import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticky flex top-0 justify-center bg-white px-10 py-6 md:justify-between '>
            <div className='hidden md:block'> <Link to='/' className='text-xl font-mono text-gray-600'>Crypto Cafe</Link></div>
            <div className='flex text-xl gap-4'>
                <CustomLink className='hover:bg-red-500 px-6 py-4 rounded-md text-white ' to='/'>Home</CustomLink>
                <CustomLink className='hover:bg-red-500 px-6 py-4 rounded-md text-white ' to='/coins'>Coins</CustomLink>
                <CustomLink className='hover:bg-red-500 px-6 py-4 rounded-md text-white ' to='/contact'>Contact</CustomLink>
                <CustomLink className='hover:bg-red-500 px-6 py-4 rounded-md text-white ' to='/about'>About</CustomLink>

            </div>
        </div>

    );
};

export default Header;