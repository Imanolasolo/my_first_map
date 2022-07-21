// Markers for Consulta Externa Group
// Import dependences and libraries
import React from "react";
import { Marker, Popup } from "react-leaflet";
import {IconConsultaExterna} from "./IconLocation";
import MarkerClusterGroup from 'react-leaflet-cluster';

// Define markers
const MarkersConsultaExterna = () => {
    return (
        <MarkerClusterGroup>
        <Marker position={[10.98973, -74.95579]} icon={IconConsultaExterna([30])}>
            <Popup>
            IPS UNIDAD MEDICA ETICA E.U.<br />Calle 5 No. 8 39<br />6053096329
            </Popup>
        </Marker>
        <Marker position={[4.72541, -75.90537]} icon={IconConsultaExterna([30])}>
            <Popup>
            CLÍNICA PORTOAZUL S.A SIGLA CPA<br />Carrera 30 Corredor Universitario No. 1  851<br />6053597533 6053672600
            </Popup>
        </Marker>
        <Marker position={[6.26675, -75.56442]} icon={IconConsultaExterna([30])}>
            <Popup>
            IPS UNIVERSITARIA CLÍNICA LEÓN XIII (Bloque 2)<br />Calle 69 No. 51C 24<br />6044477085 Opc. 1 Ext. 32395 32321 32563
            </Popup>
        </Marker>
        
        </MarkerClusterGroup>
         
     
    );
}
// Export Consulta Externa Markers
export default MarkersConsultaExterna