// Create icon (Geticon)
import L from "leaflet";

export const GetIcon = (iconSize) => {
    return L.icon({
        iconUrl: require("../components/assets/icons8-location-40.png"),
        iconSize:[iconSize]
    });
};

export const IconCirugia = (iconSize) => {
    return L.icon({
        iconUrl: require("../components/assets/HospitalCirugia.png"),
        iconSize:[iconSize]
    });
};

export const IconConsultaExterna = (iconSize) => {
    return L.icon({
        iconUrl: require("../components/assets/HospitalConsultaExterna.png"),
        iconSize:[iconSize]
    });
};

export const IconHospitalizacion = (iconSize) => {
    return L.icon({
        iconUrl: require("../components/assets/HospitalHospitalizacion.png"),
        iconSize:[iconSize]
    });
};

export const IconLaboratorio = (iconSize) => {
    return L.icon({
        iconUrl: require("../components/assets/HospitalLaboratorio.png"),
        iconSize:[iconSize]
    });
};

export const IconConsultaExternaEspecializada = (iconSize) => {
    return L.icon({
        iconUrl: require("../components/assets/HospitalConsultaExternaEspecializada.png"),
        iconSize:[iconSize]
    });
};

export const IconUrgencias = (iconSize) => {
    return L.icon({
        iconUrl: require("../components/assets/HospitalUrgencias.png"),
        iconSize:[iconSize]
    });
};


