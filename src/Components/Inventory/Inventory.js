import React from 'react';

import useHook from '../../Hook/Hook';
import Loading from '../Shared/Loading/Loading';
import SixPerfume from '../SixPerfume/SixPerfume';

const Inventory = () => {

    const [perfumes, setPerfumes, loading] = useHook();



    return (
        <div className='container mt-5'>
            
            <h2 className='text-dark mb-3'>Inventory</h2>
            { loading? <Loading></Loading> : 
             <div className=' container mx-auto  row row-cols-1 row-cols-md-3 g-4'>
                    {
                        perfumes?.slice(0, 6).map(perfume => <SixPerfume
                            key={perfume._id}
                            perfume={perfume}
                        ></SixPerfume>)
                    }
                </div>
            }
        </div>
    );
};

export default Inventory;