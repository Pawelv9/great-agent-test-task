import React from 'react';
import './PropertyTable.css';
import PropertyRow from './PropertyRow';

const PropertyTable = ({ properties }) => {

    const renderedList = properties.map(property => (
        <PropertyRow property={property} key={property.id} id={property.id} />
    ))

    return (
        <div>
            <div className="header">
                <div className="header-item">ID</div>
                <div className="header-item">Address</div>
                <div className="header-item">Price</div>
                <div className="header-item">Last Update</div>
                <div className="header-item">Type</div>
                <div className="header-item">Is in favorite</div>
            </div>
            <div>
                {renderedList}
            </div>
        </div>
    );
}

export default PropertyTable;