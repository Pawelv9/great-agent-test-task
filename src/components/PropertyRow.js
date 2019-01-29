import React from 'react';

const PropertyRow = ({property}) => {

    return (
        <div>             
            <div>{property.id}</div>
            <div>{property.address}</div>
            <div>{property.price}</div>
            <div>{property.lastUpdate}</div>
            <div>{property.type}</div>
        </div>
    )
}

export default PropertyRow;