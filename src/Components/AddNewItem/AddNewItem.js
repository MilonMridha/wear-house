import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddNewItem = () => {


    const handleAddItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const img = event.target.url.value;
        const detail = event.target.detail.value;

        const newItem = {name, price, img, detail }
        
        fetch("https://gentle-crag-55338.herokuapp.com/product", {
            method : "POST",
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            event.target.reset()
        })
    }
    return (
        <div className='mt-4'>
            <h3 className='text-primary'>Add New Item</h3>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Name" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Price" name="price" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Image Url" name="url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Detail" name="detail"/>
                </Form.Group>

                <Button className='d-block mx-auto rounded-pill' variant="success" type="submit">
                    Add New Item
                </Button>
            </Form>
        </div>
    );
};

export default AddNewItem;