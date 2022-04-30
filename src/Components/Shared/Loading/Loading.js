import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = () => {
    return (
        <div>
            <div style={{height: '400px'}} className='w-100 align-items-center d-flex justify-content-center'>
            <Spinner animation="border" variant="primary" />
        </div>
        </div>
    );
};

export default Loading;