import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth,  { sendEmailVerification: true });

    const handleFormSubmit = event =>{
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if(password !== confirmPassword){
            setError('Password did not match');
            return
        }
        if(password.length < 6){
            setError('Password must be six characters')
            return
        }
        createUserWithEmailAndPassword(email, password);
        navigate('/');
        
        


    }
    return (
        <div className='w-75 mx-auto mt-5 mb-5'>
           <h3 className='text-center text-primary mb-3'>Please SignUp!!</h3>
                <Form className='shadow rounded p-4' onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} className='w-50 mx-auto rounded-pill' type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} className='rounded-pill w-50 mx-auto' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} className='rounded-pill w-50 mx-auto' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={confirmPasswordRef} className='rounded-pill w-50 mx-auto' type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <p className='text-danger'>{hookError?.message}</p>

                    <Button className='w-25 d-block rounded-pill mx-auto' variant="primary" type="submit">
                        SignUp
                    </Button>
                </Form>
                <p className='text-center mt-2'>Already User? <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default SignUp;