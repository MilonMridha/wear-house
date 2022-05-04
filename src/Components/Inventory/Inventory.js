import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useHook from '../../Hook/Hook';
import SixPerfume from '../SixPerfume/SixPerfume';
import Loading from '../Shared/Loading/Loading';
const Inventory = () => {

    const [perfumes, setPerfumes] = useHook();
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    

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