import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../index.css";
import "leaflet/dist/leaflet.css";
import Globe from 'react-globe.gl';




export function MapCard() {
  const [filmingLocs] = useSelector((state) => [
    state.MovieReducer.filmingLocs,
  ]);


  const [globeglCoordinates, setglobeglCoordinates] = useState([]);

  var globeglCoordinatesList = [];




  useEffect(() => {
    getPlacesWithCoords(filmingLocs);

  }, [filmingLocs,]);

  const getCoordinates = async (loc) => {
    return axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?text=${loc.location}&apiKey=708074432570405dab02fa921064d5c8`
      )
 
      .then((response) =>

        setglobeglCoordinates(
          (oldArray) => [
            ...oldArray,
            { lat: response.data.features[0].geometry.coordinates[1], lng: response.data.features[0].geometry.coordinates[0], location: loc.location, remark: loc.remarks }
          ],

          globeglCoordinatesList.push(
            { lat: response.data.features[0].geometry.coordinates[1], lng: response.data.features[0].geometry.coordinates[0], location: loc.location, remark: loc.remarks }
          )
        )
      )

      .catch((err) => console.log(err));
  };



  const getPlacesWithCoords = async (places) => {
    const withCoords = await Promise.all([places]).then((place) =>
      place[0].map((loc) => getCoordinates(loc))
    );
    return withCoords;
  };

  const getTooltip = d => `
      <div style="text-align: center">
        <div><b>Location : ${d.location}</b></div>
        
        <div><b>Remark :${d.remark}</b></div>
      </div>
    `;

      
    

  return (
    <div style={{opacity:'95%'}} >
    
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          pointsData={globeglCoordinates}
          pointRadius={.3}
          width={1250}
          pointLabel={getTooltip}


        />
    </div>
  );
}

export default MapCard;


