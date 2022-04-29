import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [error, seterror] = useState('')

    const handleFormSubmit = event =>{
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        
    }
    return (
        <div>
           <h3 className='text-center text-danger mb-3'>Please SignUp!!</h3>
                <Form className='shadow rounded p-4' onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} className='rounded-pill' type="text" placeholder="Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} className='rounded-pill' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} className='rounded-pill' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={confirmPasswordRef} className='rounded-pill' type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <p className='text-danger'>{hookError?.message}</p>

                    <Button className='w-50 d-block rounded-pill mx-auto' variant="danger" type="submit">
                        SignUp
                    </Button>
                </Form>
        </div>
    );
};

export default SignUp;