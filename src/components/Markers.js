// Markers for Urgencias tile
// Import dependences and libraries
import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconUrgencias} from "./IconLocation";
import MarkerClusterGroup from 'react-leaflet-cluster';
//Define markers in group
const Markers = () => {
    return (
        <MarkerClusterGroup>
        <Marker position={[3.41163, -76.48473]} icon={IconUrgencias([30])}>
            <Popup>
            HOSPITAL ISAIAS DUARTE CANCINO E.S.E.<br />Calle 96 28 E3 02<br />6024140707 Ext. 133
            </Popup>
        </Marker>
        
        </MarkerClusterGroup> 
        
    );
}
// Export Markers
export default Markers