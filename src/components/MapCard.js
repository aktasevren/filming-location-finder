import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import "../index.css";
import "leaflet/dist/leaflet.css";
// import Globe from 'react-globe.gl';




export function MapCard() {
  const [movieInfo, filmingLocs, showMovie] = useSelector((state) => [
    state.MovieReducer.selectedMovieInfo,
    state.MovieReducer.filmingLocs,
    state.MovieReducer.showMovie,
  ]);


  const [coordinates, setCoordinates] = useState([]);
  // const [globeglCoordinates, setglobeglCoordinates] = useState([]);

  var coordinatesList = [];
  var globeglCoordinatesList = [];


  useEffect(() => {
    console.log("MapCard.js / " + filmingLocs)
    getPlacesWithCoords(filmingLocs);

  }, [filmingLocs,]);

  const getCoordinates = async (loc) => {
      console.log(loc.location)
    // return axios
    //   .get(
    //     `https://api.geoapify.com/v1/geocode/search?text=${loc.location}&apiKey=a97d941d259f4b42912a28ac3d623d46`
    //   )
    //   .then((response) =>
    //     setCoordinates(
    //       (oldArray) => [
    //         ...oldArray,
    //         [
    //           response.data.features[0].geometry.coordinates[0],
    //           response.data.features[0].geometry.coordinates[1],
    //           loc.remarks,
    //           loc.location
    //         ],
    //       ],
    //       coordinatesList.push([
    //         response.data.features[0].geometry.coordinates[0],
    //         response.data.features[0].geometry.coordinates[1],
    //         loc.remarks,
    //         loc.location
    //       ])
    //     )
      // )



      // .then((response) =>

      //   // console.log(  { lat: response.data.features[0].geometry.coordinates[1], lng: response.data.features[0].geometry.coordinates[0],location:loc.location })
      //   setglobeglCoordinates(
      //     (oldArray) => [
      //       ...oldArray,
      //       { lat: response.data.features[0].geometry.coordinates[1], lng: response.data.features[0].geometry.coordinates[0], location: loc.location, remark: loc.remarks }
      //     ],

      //     globeglCoordinatesList.push(
      //       // `"lat":${response.data.features[0].geometry.coordinates[0]},"lng":${response.data.features[0].geometry.coordinates[1]}`
      //       { lat: response.data.features[0].geometry.coordinates[1], lng: response.data.features[0].geometry.coordinates[0], location: loc.location, remark: loc.remarks }
      //     )
      //   )
      // )

      .catch((err) => console.log(err));
  };



  const getPlacesWithCoords = async (places) => {
    const withCoords = await Promise.all([places]).then((place) =>
    place[0].map((loc) => getCoordinates(loc))
    );
    return withCoords;
  };

  // const getTooltip = d => `
  //     <div style="text-align: center">
  //       <div><b>Location : ${d.location}</b></div>
        
  //       <div><b>Remark :${d.remark}</b></div>
  //     </div>
  //   `;




  return (
    <div className="container">
      <div>

        <MapContainer center={[55, 60]} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {
            coordinates.map((poi, index) => (
              <Marker
                key={index}
                position={[poi[1], poi[0]]}
                icon={
                  new Icon({
                    iconUrl: movieInfo.image,
                    iconSize: [37.5, 61.5],
                    iconAnchor: [12, 41],
                  })
                }
              >
                {poi[2] == 'undefined' ? <Popup>{poi[2] + ' / ' + poi[3]}</Popup> : <Popup>{poi[3]}</Popup>}
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapCard;





{/* GLOBE GL  */ }
{/* <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          pointsData={globeglCoordinates}
          pointRadius={.3}
          // pointLabel="location"
          pointLabel={getTooltip}
        /> */}
{/* GLOBE GL  */ }