import React, { useEffect, useState } from 'react';
import { Button as Button, Card, Form, } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InventoryId.css'

const InventoryId = () => {
    const { id } = useParams();

    const [singleItem, setSingleItem] = useState({});
    const { name, detail, img, price,quantity, supplier, _id } = singleItem;
    
    const [perfumeQty, setPerfumeQty] = useState(quantity);



    useEffect(() => {
        const url = `https://gentle-crag-55338.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [perfumeQty]);

    //delevery item ------------>
    const handleDelivery = () => {
        const newQtyTotal = parseInt(singleItem.quantity) - 1;
        if(newQtyTotal < 0){
            toast.error('No stock here now')
        }
        else{
            const updateItem = { newQtyTotal };

            const url = `https://gentle-crag-55338.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateItem)
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.acknowledged === true) {
                        setPerfumeQty(updateItem)
                        toast.success('Product delivery successfully')
                    }
                   
                    
    
                })
        }

        

    }

    //handle reload stock quantity----------->
    const handleUpdate = event => {
        event.preventDefault();
        const inputQty = event.target.quantity.value;

        const newQtyTotal = parseInt(quantity) + parseInt(inputQty);
        
        
        


        const updateItem = { newQtyTotal };
        const url = `https://gentle-crag-55338.herokuapp.com/product/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.acknowledged === true) {
                    setPerfumeQty(newQtyTotal)
                    toast.success('Product Stock Added successfully')
                    event.target.reset()
                    
                }


            })
    }

    return (
        <div >
            <div className='d-flex justify-content-center mt-5 mb-5'>
                {
                    singleItem && <Card className='h-100 shadow card pb-3 rounded' style={{ width: '18rem' }}>
                        <Card.Img className='inven-img' variant="top" src={img} />
                        <Card.Body className=' ms-0'>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>Price :${price}</Card.Title>
                            <Card.Title>Quantity: {quantity}</Card.Title>
                            <h6>Supplier : {supplier}</h6>
                            <Card.Text>
                                {detail}
                            </Card.Text>

                            <div className='d-flex justify-content-center'>
                                <Button onClick={handleDelivery} className='button w-100 rounded-pill' variant="danger">Delivered</Button>

                            </div>
                        </Card.Body>
                    </Card>
                }
            </div>
            <div className='mb-5'>
                <Form onSubmit={handleUpdate}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control className='rounded-pill shadow pb-2 w-50 mx-auto' type="text" placeholder="Input Quantity" name="quantity" required />
                    </Form.Group>

                    <Button className='d-block mx-auto rounded-pill' variant="success" type="submit">
                        Add Quantity
                    </Button>
                </Form>
                <ToastContainer></ToastContainer>
            </div>

            <Link to='/manage' className='d-block mx-auto p-2 rounded-pill w-50 btn btn-primary text-decoration-none mb-5' bg="primary">Manage Inventory</Link>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default InventoryId;