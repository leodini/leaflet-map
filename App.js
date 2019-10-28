import React, { useState, useEffect, useRef } from 'react';
import { usePosition } from 'use-position';
import './App.css';
import 'leaflet/dist/leaflet.css'
import Zomato from 'zomato-developers';
import Map from './components/Map';

const api_key = 'f2fe54e2a0e5e7fb8d7027e4ba49af86';

function App() {
 
  // const getCity = async() => {
  //   Zomato.getLocationDetails(api_key, coord)
  //   .then(result => console.log(result))
  //   Zomato.getCities(api_key, coord).then((result) => {
  //     console.log(result)
  //   }).catch(function(err){
  //     console.log(err)
  //   });
  // }

  //  function getlocation(){
  //    if (navigator.geolocation) {
  //      console.log(navigator.geolocation.getCurrentPosition(showPosition));
  //    } else {
  //      console.log('geolocation is not available')
  //    }
  //  }

  //  function showPosition(position) {
  //     setCoord({latitude: position.coords.latitude,longitude: position.coords.longitude})
  //     console.log(coord.latitude)
  //  }


  return (
    <Map/>
  );
}

export default App;
