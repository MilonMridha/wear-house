import React from 'react';

import useHook from '../../Hook/Hook';
import AllProducts from '../AllProducts/AllProducts';

const ManageInventory = () => {
    const [perfumes, setPerfumes] = useHook();

    return (
        <div className='container mt-5'>
            <h3 className='text-primary mb-3'>Manage Inventory</h3>
           
                <div className=' container mx-auto row row-cols-1 row-cols-md-3 g-4'>
                    {
                        perfumes.map(perfume => <AllProducts
                            key={perfume._id}
                            perfume={perfume}
                        ></AllProducts>)
                    }
                </div>


            
        </div>
    );
};

export default ManageInventory;