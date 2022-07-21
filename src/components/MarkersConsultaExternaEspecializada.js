// Markers for Consulta Externa Especializada Group
// Import dependences and libraries
import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconConsultaExternaEspecializada} from "./IconLocation";
import MarkerClusterGroup from 'react-leaflet-cluster';

// Define markers
const MarkersConsultaExternaEspecializada = () => {
    return (
        <MarkerClusterGroup>
        <Marker position={[6.34533, -75.51664]} icon={IconConsultaExternaEspecializada([30])}>
            <Popup>
            E.S.E. HOSPITAL SANTA MARGARITA.<br />Carrera 64 No.  48 80<br />6044000770
            </Popup>
        </Marker>
        <Marker position={[7.11386, -73.10769]} icon={IconConsultaExternaEspecializada([30])}>
            <Popup>
            CENTRO DE ATENCIÓN Y DIAGNÓSTICO DE ENFERMEDADES INFECCIOSAS CDI S.A.<br />Carrera 37 No. 51 126<br />6076431666 Ext. 101
            </Popup>
        </Marker>
        <Marker position={[3.53398, -76.29692]} icon={IconConsultaExternaEspecializada([30])}>
            <Popup>
            CLÍNICA GIRÓN E.S.E<br />Calle 33 No. 25 36<br />6076531312
            </Popup>
        </Marker>
        
        </MarkerClusterGroup> 
         
     
    );
}
// Export Consulta Externa Especializada Markers
export default MarkersConsultaExternaEspecializada