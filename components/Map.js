import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'


const api_key = 'f2fe54e2a0e5e7fb8d7027e4ba49af86';

const Map = () => {
  const [ coord, setCoord ] = useState({
    latitude: -18.9166667,
    longitude: -48.3000000
  });

  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [coord.latitude, coord.longitude],
      zoom: 15,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    })
  }, []) 


  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current)
    L.marker([coord.latitude, coord.longitude]).addTo(mapRef.current);
  }, [])


  return (
    <div style={{ width: '100%', height: '100vh' }} id="map">
    </div>
  );
}

export default Map;
