// Markers for Cirugía group
// Import dependences and libraries
import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconCirugia} from "./IconLocation";
import MarkerClusterGroup from 'react-leaflet-cluster';

// Define markers
const MarkersCirugia = () => {
    return (
        <MarkerClusterGroup>
        <Marker position={[6.277100, -75.579736]} icon={IconCirugia([30])}>
            <Popup>
            HOSPITAL PABLO TOBÓN URIBE.<br />Calle 78 B No. 69 240<br />6044459000
            </Popup>
        </Marker>
        <Marker position={[5.84615, -76.00930]} icon={IconCirugia([30])}>
            <Popup>
            E.S.E. HOSPITAL LA MERCED<br />Calle 49 No. 36 298<br />6048411182
            </Popup>
        </Marker>
        <Marker position={[3.53398, -76.29692]} icon={IconCirugia([30])}>
            <Popup>
            REHABILITACION FISICA INTEGRAL IPS EU<br />Carrera 27 No. 37 34<br />6022740470
            </Popup>
        </Marker>
        
        </MarkerClusterGroup> 
    )
}
// export markers
export default MarkersCirugia