# react-leaflet-component

> Do you want to add your map successfully with a single tag to avoid writing too much code with React leaflet?

You can use more than one marker together with a package where you can perform multiple data operations, you can easily add your icon format and type.

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
