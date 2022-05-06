import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MyItems.css'

import useHook from '../../Hook/Hook';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';



const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const navigate = useNavigate()

    

    useEffect(() => {
        const email = user.email;

        try{
            fetch(`https://gentle-crag-55338.herokuapp.com/add?email=${email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setMyItems(data))
        }
        catch(error){
            console.log(error.message);
            if(error.response.status === 401 || error.response.status === 403){
                signOut(auth);
                navigate('/login')
            }

        }
    }, [user]);


    const handleMyItem = (id) => {
        const proceed = window.confirm('Do you want to delete')
        if (proceed) {
            const url = `https://gentle-crag-55338.herokuapp.com/add/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.acknowledged === true) {
                        toast.success('Delete Successfull');
                        const remaining = myItems.filter(item => item._id !== id);
                        setMyItems(remaining);

                    }

                })
        }

    }
    return (
        <div className='container mt-5'>
            <h3>My Items : {myItems?.length}</h3>
            <div className='row row-cols-1 row-cols-md-3'>
                {
                myItems?.map(item => <div
                        key={item._id}>
                        <Card className='shadow' style={{ width: '18rem' }}>

                            <Card.Body>
                                <Card.Img className='my-item' style={{ width: '50px' }} variant="top" src={item.img} />
                                <Card.Title>Name :{item.name}</Card.Title>

                                <Card.Text>
                                    Price : {item.price}
                                </Card.Text>
                                <Card.Text>Details :
                                    {item.detail}
                                </Card.Text>
                                <Button onClick={() => handleMyItem(item._id)} variant="danger">Delete Item</Button>
                            </Card.Body>
                        </Card>
                        <ToastContainer></ToastContainer>
                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default MyItems;