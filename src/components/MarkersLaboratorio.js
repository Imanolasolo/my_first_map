// Markers for Laboratorio Group
// Import dependences and libraries
import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconLaboratorio} from "./IconLocation";
import MarkerClusterGroup from 'react-leaflet-cluster';

// Define markers
const MarkersLaboratorio = () => {
    return (
        <MarkerClusterGroup>
        <Marker position={[4.57102, -74.05756]} icon={IconLaboratorio([30])}>
            <Popup>
            FUNDACIÓN HOSPITAL SAN CARLOS.<br />Carrera 12 D No. 32 44<br />6017443333
            </Popup>
        </Marker>
        </MarkerClusterGroup> 
         
     
    );
}

// Export Laboratorio markers
export default MarkersLaboratorio
