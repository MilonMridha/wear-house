import React from 'react';
import useHook from '../../Hook/Hook';
import SixPerfume from '../SixPerfume/SixPerfume';

const Inventory = () => {

    const [perfumes, setPerfumes] = useHook();
    

    return (
        <div className='container mt-5'>
            <h2 className='text-primary'>Inventory</h2>
            <div className=' container mx-auto  row row-cols-1 row-cols-md-3 g-4 mt-2'>
                {
                    perfumes?.slice(0, 6).map(perfume =><SixPerfume
                    key={perfume._id}
                    perfume={perfume}
                    ></SixPerfume>)
                }
            </div>
        </div>
    );
};

export default Inventory;