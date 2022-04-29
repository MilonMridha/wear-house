import React from 'react';
import { Button, Card} from 'react-bootstrap';
import useHook from '../../Hook/Hook';

const AllProducts = ({ perfume }) => {
    const { name, detail, img, price, quantity, supplier, _id } = perfume;

    const [perfumes, setPerfumes] = useHook();


    const handleDelete = (id)=>{
        const proceed = window.confirm('Do you want to delete');
        if(proceed){
            const url =`https://gentle-crag-55338.herokuapp.com/product/${id}`
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = perfumes.filter(perfume => perfume._id !== id);
                setPerfumes(remaining);
            })
        }
    }
    return (
        <div>
            <Card className='h-100 shadow card bg-light p-3 rounded-pill' style={{ width: '18rem' }}>
                        
                        <Card.Body className=' ms-0'>
                            <Card.Title>Name: {name}</Card.Title>
                            <Card.Title>Price :${price}</Card.Title>
                            <Card.Title>Qty: {quantity}</Card.Title>
                            <h6>Supplier : {supplier}</h6>
                            <h6>ID : {_id}</h6>
                            <p>Url: {img}</p>
                            

                            <div className='d-flex justify-content-center'>
                                <Button onClick={()=>handleDelete(_id)} className='button w-100 rounded-pill' variant="danger">Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default AllProducts;