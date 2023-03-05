import React from 'react';
// import {
//   GoogleMap,
//   LoadScript,
//   MarkerF,
//   InfoWindowF,
// } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '20em',
// };

// const center = {
//   lat: 58.283737,
//   lng: 12.286889,
// };

// const divStyle = {
//   background: `white`,
//   padding: 5,
// };

// const onLoad = (marker) => {
//   console.log('marker:', marker);
// };

function Map() {
  return (
    <iframe
      title="Map"
      width="100%"
      height="400px"
      style={{ border: 0 }}
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDdg1OhulMY_DZOOugZ5xgSU4m3s-c-03k&q=Majo+Bar,Trollhättan"
      allowFullScreen
    ></iframe>
    // <LoadScript googleMapsApiKey="AIzaSyDdg1OhulMY_DZOOugZ5xgSU4m3s-c-03k">
    //   <GoogleMap
    //     mapContainerStyle={containerStyle}
    //     center={center}
    //     zoom={15}
    //     clickableIcons={false}
    //   >
    //     {/* Child components, such as markers, info windows, etc. */}
    //     <MarkerF onLoad={onLoad} position={center} clickable={true}>
    //       <InfoWindowF
    //         position={center}
    //         onCloseClick={() => {
    //           console.log('CLOSED');
    //         }}
    //       >
    //         <div style={divStyle}>
    //           <p className="text-black text-sm m-0">Majo Bar & Restaurang</p>
    //           <p className="text-black text-sm m-0">Polhemsgatan 6</p>
    //         </div>
    //       </InfoWindowF>
    //     </MarkerF>
    //   </GoogleMap>
    // </LoadScript>
  );
}

export default Map;
