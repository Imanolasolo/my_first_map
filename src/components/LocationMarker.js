// Import dependences and libraries
import {React, useState} from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import {GetIcon} from "./IconLocation";

// main function for Location marker on touch the screen
function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={GetIcon([30])}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
// Export Location marker
export default LocationMarker