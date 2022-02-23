import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('C:/Users/jean-/Desktop/Projetlieu2/tourisme3/myapp/src/data/img/iconbar.png'),
    iconRetinaUrl: require('C:/Users/jean-/Desktop/Projetlieu2/tourisme3/myapp/src/data/img/iconbar.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 55),
    className: 'leaflet-div-icon'
});

export { iconPerson };