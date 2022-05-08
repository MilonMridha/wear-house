import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddNewItem = () => {

    const [user] = useAuthState(auth);

    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = user.email;
        const price = event.target.price.value;
        const img = event.target.url.value;
        const detail = event.target.detail.value;

        const newItem = { name, price, img, detail, email }

        fetch("https://gentle-crag-55338.herokuapp.com/add", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Product add Successfully')
                    event.target.reset()
                    return;
                }

            })
    }
    return (
        <div className='mt-4'>
            <h3 className='text-dark mb-3'>Add Your Item</h3>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Name" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="email" value={user?.email} placeholder="email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Price" name="price" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Image Url" name="url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Detail" name="detail" />
                </Form.Group>

                <Button className='d-block mx-auto rounded-pill' variant="success" type="submit">
                    Add your Item
                </Button>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddNewItem;