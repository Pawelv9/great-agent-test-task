import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Table.css'
import { loadDataAction } from '../actions';
import { connect } from 'react-redux'
import TableItem from './TableItem';


class Table extends PureComponent {

    componentDidMount() {
        this.props.loadDataAction()
    }

    renderList = () => {
        this.props.properties.map(property => {
            return (
                <TableItem
                    id={property.id}
                    key={property.id}>
                </TableItem>)
        })
    }
        
    render() {
        return (
            <Fragment>
                <div className="header">
                        <div className="header-item">ID</div>
                        <div className="header-item">Address</div>
                        <div className="header-item">Price</div>
                        <div className="header-item">Last Update</div>
                        <div className="header-item">Type</div>
                        <div className="header-item">Is in favorite</div>
                </div>
                <div>
                    {this.renderList()}           
                </div>
            </Fragment>
        )
    }
}

    mapStateToProps = (state) => {
        return {
            properties: state.properties
        }
    }

    Table.propTypes = {
        properties: PropTypes.array
    };

export default connect(mapStateToProps, { loadDataAction })(Table);