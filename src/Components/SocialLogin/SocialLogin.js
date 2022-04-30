import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import icon from './Social-icon/google.png';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const navigate = useNavigate();

    if(user){
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div style={{height: '1px'}} className='bg-dark w-50 mx-auto'></div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50 mx-auto '>
                </div>
            </div>
            <p className='text-danger'>{error?.message}</p>
            <Button onClick={()=> signInWithGoogle()} className='btn btn-dark w-25 rounded-pill'><span className='pe-1'><img src={icon} alt="" /></span>Google SignIn</Button>
        </div>
    );
};

export default SocialLogin;