import React, { Component } from 'react'
import Map from './Map.jsx'
import { location } from './Data/location.js'
import MarkerIcon from './assets/pin.png'

class MapPage extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Map
          dataSource={location}
          center={[38.963745, 35.243322]}
          markerIcon={MarkerIcon}
          iconSizeTwo={26}
          zoom={4}
          minZoom={6}
        />
      </div>
    )
  }
}

export default MapPage
