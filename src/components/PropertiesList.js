import React, { PureComponent } from 'react';
import PropertyTable from './PropertyTable'
import properties$ from '../mock';

export default class PropertiesList extends PureComponent {
  constructor() {
    super()
    this.state = {
      properties: [],
      _sort: 'id'
     };
  }

  componentDidMount() {
    
  properties$.subscribe((data) => {
    
    this.setState({ properties: [{ 
      id: data.id,
      address: data.address,
      price: data.price,
      lastUpdate: data.lastUpdate,
      type: data.type}] 
    });
    
  })
}

render() {
    return (
      <div>
        <PropertyTable 
          properties = { this.state.properties }
        />
      </div>
    )
  }
}

