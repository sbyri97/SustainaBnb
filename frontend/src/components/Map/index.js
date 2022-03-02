import React, { useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import './map.css'
const myKey = process.env.REACT_APP_API_KEY

export default function GoogleMap(){
  const onStartUpCenter = {
    start: {
      lat: 37.773972,
      lng: -122.431297
    },
    zoom: 9
  };

  return (
    // Important! Always set the container height explicitly
    <div className="mapApi">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${myKey}` }}
        defaultCenter={onStartUpCenter.start}
        defaultZoom={onStartUpCenter.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    </div>
  );
}
