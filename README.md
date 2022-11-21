# react-leaflet-component

> React Leaflet offers us many things, but without some points it is difficult to activate the map. (Multi Data)

Let's make our job easier...

Add a map to your code with a single line.

You can write your desired Marker, Marker Size and Multi-data processing much faster.

[![NPM](https://img.shields.io/npm/v/react-leaflet-component.svg)](https://www.npmjs.com/package/react-leaflet-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-leaflet-component
```

## Usage

```jsx
import React from 'react'
// REACT LEAFLET COMPONENT
import { Map } from 'react-leaflet-component'
// ICON SVG,PNG,JPG..
import MarkerIcon from './assets/pin.png'

// DATA
export const location = [
  { key: 1, lat: 38.963745, lng: 35.243322 },
  { key: 2, lat: 37.874641, lng: 32.493156 },
];

const App = () => {
  return (
    <div>
      <Map
        // Data
        dataSource={location}
        // Center Location
        center={[38.963745, 35.243322]}
        // Marker İcon
        markerIcon={MarkerIcon}
        // İcon Size
        iconSizeTwo={26}
        zoom={4}
        minZoom={6}
      />
    </div>
  )
}

export default App
```

## Make Sure to Write This (index.css)

```jsx
.leaflet-container {
  width: 100%;
  height: 100vh;
}
```

## Make Sure to Write This (index.js)

```jsx
import 'leaflet/dist/leaflet.css'
```

## License

MIT © [Mahmutcano](https://github.com/Mahmutcano)
