// Markers for Hospitalizacion Group
// Import dependences and libraries
import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconHospitalizacion} from "./IconLocation";
import MarkerClusterGroup from 'react-leaflet-cluster';

// Define markers
const MarkersHospitalizacion = () => {
    return (
        <MarkerClusterGroup>
        <Marker position={[3.46059, -76.53013]} icon={IconHospitalizacion([30])}>
            <Popup>
            CLÍNICA DE OCCIDENTE.<br />Calle 18 Norte No. 5 34<br />6025248505
            </Popup>
        </Marker>
        <Marker position={[4.69387, -74.05550]} icon={IconHospitalizacion([30])}>
            <Popup>
            CLÍNICA VASCULAR NAVARRA LTDA<br />Autopista Norte No. 106 -31<br /> 6016026847 6016059999 Ext. 302
            </Popup>
        </Marker>
        <Marker position={[4.66861, -74.05756]} icon={IconHospitalizacion([30])}>
            <Popup>
            IMÁGENES DIAGNÓSTICAS DEL COUNTRY<br />Carrera 16 A No. 82 38<br />6016449201 Ext. 205
            </Popup>
        </Marker>
        
        </MarkerClusterGroup> 
         
     
    );
}
// Export Hospitalizacion markers
export default MarkersHospitalizacion