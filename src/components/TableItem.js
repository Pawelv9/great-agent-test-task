import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TableItem.Item.css'

class TableItem extends PureComponent {
    
    render() {
        return (
            <div className="item">
                <div className="item-column">{this.props.data.id}</div>
                <div className="item-column">{this.props.data.address}</div>
                <div className="item-column">{this.props.data.price}</div>
                <div className="item-column">{this.props.data.lastUpdate}</div>
                <div className="item-column">{this.props.data.type}</div>
            </div>
        )
    }
}
TableItem.propTypes = {

};

export default TableItem;