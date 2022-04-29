import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryId = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Inventory Id : {id}</h1>
        </div>
    );
};

export default InventoryId;