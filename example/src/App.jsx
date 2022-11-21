import React from 'react'
import { Map } from 'react-leaflet-components'
import MarkerIcon from './assets/pin.png'

export const location = [
  { key: 1, lat: 38.963745, lng: 35.243322 },
  { key: 2, lat: 37.874641, lng: 32.493156 },
];

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
