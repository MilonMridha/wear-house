import React from 'react';
import { Button, Card } from 'react-bootstrap';

import useHook from '../../Hook/Hook';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ManageInventory.css'
import { Link } from 'react-router-dom';


const ManageInventory = () => {
    const [perfumes, setPerfumes] = useHook();

    


    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete');
        if (proceed) {
            const url = `https://gentle-crag-55338.herokuapp.com/product/${id}`;

            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.success('Deleted Successfully')
                        const remaining = perfumes?.filter(item => item._id !== id);
                        setPerfumes(remaining);
                    }

                });
        }
    }

    return (
        <div className='container mt-5'>
            <h3 className='text-dark mb-3'>Manage Inventory</h3>

            <div className=' container mx-auto row row-cols-1 row-cols-md-3 g-4 mb-3 pb-3'>
                {
                    perfumes?.map(perfume => <div key={perfume._id}>


                        <Card className='container ms-2 shadow card bg-light p-3 rounded mb-2' style={{ width: '18rem' }}>


                            <Card.Body className=' ms-0'>
                                <Card.Img className='card-img' variant="top" src={perfume.img} />
                                <Card.Title>Name: {perfume?.name}</Card.Title>
                                <Card.Title>Price :${perfume?.price}</Card.Title>
                                <Card.Title>Qty: {perfume.quantity}</Card.Title>
                                <p>Supplier : {perfume?.supplier}</p>
                                <p>ID : {perfume._id}</p>



                                <div className='d-flex justify-content-center'>
                                    <Button onClick={() => handleDelete(perfume._id)} className='button w-100 rounded-pill mb-2' variant="danger">Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>)
                }
            </div>


            <Link to='/add' className='mt-5 w-50 text-decoration-none btn btn-dark rounded-pill mb-5 '>Add new Item</Link>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageInventory;