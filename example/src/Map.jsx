import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const Map = (props) => {
  const [data, setData] = useState([])
  const mapRef = useRef()

  useEffect(() => {
    setData(props.dataSource)
  }, [props.dataSource])

  class Icon {
    constructor() {
      this.markerIcon = props.markerIcon
      this.iconSizeTwo = props.iconSizeTwo
    }
  }

  let row = new Icon(props.markerIcon, props.iconSizeTwo)

  function GetIconAll() {
    return L.icon({
      iconUrl: row.markerIcon,
      iconSize: [row.iconSizeTwo]
    })
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ width: '100%' }}>
        <MapContainer
          ref={mapRef}
          center={props.center}
          zoom={props.zoom} // initial zoom required
          minZoom={props.minZoom}
          zoomAnimation={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='<a href="">Mahmut Can Özgan</a>'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {data &&
            data.map((item) => {
              return (
                <Marker
                  key={item.key}
                  position={[item.lat, item.lng]}
                  icon={GetIconAll()}
                  eventHandlers={{
                    click: (e) => {
                      console.log(e.target)
                    },
                    mouseover: (e) => {
                      e.target.openPopup()
                    },
                    mouseout: (e) => {
                      setTimeout(() => {
                        e.target.closePopup()
                      }, 1000)
                    }
                  }}
                >
                  <Popup
                    eventHandlers={{
                      mouseover: (e) => {
                        e.target.openPopup()
                      },
                      mouseout: (e) => {
                        e.target.closePopup()
                      }
                    }}
                  ></Popup>
                </Marker>
              )
            })}
        </MapContainer>
      </div>
    </div>
  )
}

export default Map
