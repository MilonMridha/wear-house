import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './SixPerfume.css'

const SixPerfume = ({ perfume }) => {
const { name, detail, img, price, quantity, supplier, _id } = perfume;

const navigate = useNavigate();

    const handleBtn =(id)=>{
        navigate('/inventory/'+id)

    }
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <Card className='h-100 shadow card pb-3  rounded' style={{ width: '18rem' }}>
                <Card.Img className='home-image' variant="top" src={img} />
                <Card.Body className=' ms-0'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price :${price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <h6>Supplier : {supplier}</h6>
                    <Card.Text>
                        {detail}
                    </Card.Text>

                    <div className='d-flex justify-content-center'>
                        <Button onClick={()=>handleBtn(_id)} className='button w-100 d-block rounded-pill' variant="dark">Update</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SixPerfume;


