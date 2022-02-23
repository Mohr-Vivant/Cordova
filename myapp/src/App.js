import React, { useRef } from 'react';
import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMapEvent, useMap } from 'react-leaflet'
import barsData from './data/bars-metz.json'
import restoData from './data/resto-metz.json'
import hopitalData from './data/hopital-metz.json'
import L from "leaflet";
import {  iconPerson  } from './Icons';
//import * as withScriptsjs from 'react-google-maps/lib/withScriptjs';
//import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';

/*
function Map(){
  return(
    <GoogleMap defaultZoom={10} defaultCenter={{lat: 49.114460, lng: 6.172090}}/>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


<WrappedMap 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBiXWwCWtyOXGf7rgTL1EmyeXrxxRrveAA'}
        loadingElement={<div style={{height: '100%'}}/>}
        containerElement={<div style={{height: '100%'}}/>}
        mapElement={<div style={{height: '100%'}}/>}
      />
*/ 
/*
      <div onLoad={getLocation}/>

const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [status, setStatus] = useState(null);

  function getLocation(){
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

var positionUserLat = 0
var positionUserLng = 0

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(displayLocationInfo);
}

function displayLocationInfo(position) {
  const lng = position.coords.longitude;
  const lat = position.coords.latitude;

  console.log(`longitude: ${ lng } | latitude: ${ lat }`);

  positionUserLat += lat
  positionUserLng += lng

  console.log(positionUserLat)
  console.log(positionUserLng)

}

const positionUser = [positionUserLat, positionUserLng]
*/

/*
function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvent({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Circle center={position} radius={200}>
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
    </Circle>
  )
}

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = 200;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>
          You are here. <br />
        </Popup>
      </Marker>
    );
  }

*/

const positionIUT = [49.11993680318855, 6.162113522351432]
const positionCathedrale = [49.12031328688017, 6.175798326540397]
const positionTemple = [49.12075144107102, 6.172236167351551]



function App() {

  
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(displayLocationInfo);
    }
    
    function displayLocationInfo(position) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    
      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    
    }



     /* var map = L.map('map', {
        'center': [0, 0],
        'zoom': 0,
        'layers': [
          L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            'attribution': 'Map data &copy; OpenStreetMap contributors'
          })
        ]
      });

      L.Circle.include({
        contains: function (latLng) {
          return this.getLatLng().distanceTo(latLng) < this.getRadius();
        }
      });
      
      var circle = L.circle([52.370216, 4.895168], 5000).addTo(map);
      
      map.fitBounds(circle.getBounds());*/

      const iconeBar = new L.Icon({
        iconUrl: require('C:/Users/jean-/Desktop/Projetlieu2/tourisme3/myapp/src/data/img/iconbar.png'),
        iconSize: [40, 45],
      });

      const iconePlace = new L.Icon({
        iconUrl: require('C:/Users/jean-/Desktop/Projetlieu2/tourisme3/myapp/src/data/img/iconplace.png'),
        iconSize: [40, 45],
      });

      const iconeRestaurant = new L.Icon({
        iconUrl: require('C:/Users/jean-/Desktop/Projetlieu2/tourisme3/myapp/src/data/img/iconresto.png'),
        iconSize: [40, 45],
      });

      const iconeHoptial = new L.Icon({
        iconUrl: require('C:/Users/jean-/Desktop/Projetlieu2/tourisme3/myapp/src/data/img/iconhopital.png'),
        iconSize: [40, 45],
      });

    

  return (
    <MapContainer center={[49.114460, 6.172090]} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Circle center={[lat, lng]} radius={150}>
        <Marker position={[lat, lng]}>
          <Popup>
            Vous êtes ici<br />
          </Popup>
        </Marker>
      </Circle>
      <Navbar/>
      <Marker position={positionIUT} icon={iconePlace}>
        <Popup>
          IUT Saulcy Metz<br />
        </Popup>
      </Marker>
      <Marker position={positionCathedrale} icon={iconePlace}>
        <Popup>
          Cathédrale de Metz<br />
        </Popup>
      </Marker>
      <Marker position={positionTemple} icon={iconePlace}>
        <Popup>
          Temple Neuf<br />
        </Popup>
      </Marker>

      {barsData.map(bar =>(
        <Marker
        key={bar.id}
        position={[bar.latitude, bar.longitude]}
        icon={iconeBar}>
        <Popup className='popbar'>
          {bar.name} <br /> Happyhour : {bar.happyhour}
        </Popup>
        </Marker>
      ))}

      {restoData.map(resto =>(
        <Marker
        key={resto.id}
        position={[resto.latitude, resto.longitude]}
        icon={iconeRestaurant}>
        <Popup className='popbar'>
          {resto.name} <br /> Horaires : {resto.horaires}
        </Popup>
        </Marker>
      ))}

      {hopitalData.map(hoptial =>(
        <Marker
        key={hoptial.id}
        position={[hoptial.latitude, hoptial.longitude]}
        icon={iconeHoptial}>
        <Popup className='popbar'>
          {hoptial.name} <br /> {hoptial.vaccin}
        </Popup>
        </Marker>
      ))}

    </MapContainer>
  );
}

export default App;
/*

<div className="App">
      <header className="App-header">
      </header>
    </div>

<Navbar/>

<h2>Tourisme à Metz<img src={logo} className="App-logo" alt="logo" /></h2>
*/ 