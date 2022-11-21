# react-leaflet-component

> Currently under construction

[![NPM](https://img.shields.io/npm/v/react-leaflet-component.svg)](https://www.npmjs.com/package/react-leaflet-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-leaflet-component
```

## Usage

```jsx
import React, { Component } from 'react'

import Mapping from 'react-leaflet-component'
import 'react-leaflet-component/dist/index.css'

class Example extends Component {
  render() {
    return <Mapping />
  }
}
```

## index.js

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'leaflet/dist/leaflet.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## License

MIT © [Mahmutcano](https://github.com/Mahmutcano)
