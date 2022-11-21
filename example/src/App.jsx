import React from 'react'
import { Map } from 'react-leaflet-component'
import { location } from './Data/location.js'
import MarkerIcon from './assets/pin.png'

const App = () => {
  return (
    <div>
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

export default App
