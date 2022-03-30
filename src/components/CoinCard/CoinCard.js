import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    return (
        <div className=' shadow-lg bg-white w-[250px] rounded-2xl p-4'>
            <Link to={`/coin-details/${coin.id}`}>
                <div className='flex justify-between items-center'>
                    <div className='flex shrink-0 w-[50px]'>
                        <img src={coin.image} alt="coinImg" srcset="" />
                    </div>
                    <div className='flex justify-end
                     flex-col'>
                        <h3 className='text-gray-600 font-medium'>{coin.name}</h3>
                        <p className=' text-gray-400 text-xs'>{coin.symbol}</p>
                    </div>
                </div>

            </Link>

        </div>
    );
};

export default CoinCard; 