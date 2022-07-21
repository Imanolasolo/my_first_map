// Import dependences and libraries
import React from "react";
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import MarkersConsultaExterna from "./MarkersConsultaExterna";
import MarkersHospitalizacion from "./MarkersHospitalizacion";
import MarkersLaboratorio from "./MarkersLaboratorio";
import MarkersCirugia from "./MarkersCirugia";
import MarkersConsultaExternaEspecializada from "./MarkersConsultaExternaEspecializada";
import LocationMarker from "./LocationMarker";

// Map Construction (1.Map Info 2.Tile Layer and attribution 3. Layers Controller)
const MapView = () => {
    return <MapContainer center={{ lat: '4.7130', lng: '-74.0731' }}
        zoom={6}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZomm={true}
        >
        
           
        <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='IT4PROS 2022&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <LocationMarker />
        <LayersControl position="topright">
         <LayersControl.Overlay name="urgencias">
         <Markers />
         </LayersControl.Overlay>

         <LayersControl.Overlay name="Consulta Externa">
         <MarkersConsultaExterna />
         </LayersControl.Overlay>

         <LayersControl.Overlay name="Hospitalización">
         <MarkersHospitalizacion />
         </LayersControl.Overlay>

         <LayersControl.Overlay name="Laboratorio">
         <MarkersLaboratorio />
         </LayersControl.Overlay>

         <LayersControl.Overlay name="Cirugía">
         <MarkersCirugia />
         </LayersControl.Overlay>

         <LayersControl.Overlay name="Consulta Externa Especializada">
         <MarkersConsultaExternaEspecializada />
         </LayersControl.Overlay>
      
        </LayersControl>

        
    </MapContainer>;
}
//Export Map to Principal App.js
export default MapView;
