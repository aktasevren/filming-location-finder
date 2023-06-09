import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import axios from "axios";
import "../index.css";
import "leaflet/dist/leaflet.css";

export function MapCard() {
  const [movieInfo, filmingLocs] = useSelector((state) => [
    state.MovieReducer.selectedMovieInfo,
    state.MovieReducer.filmingLocs,
  ]);

  const [coordinates, setCoordinates] = useState([]);
  var coordinatesList = [];

  useEffect(() => {
    getPlacesWithCoords(filmingLocs);
    console.log(filmingLocs)
  }, [filmingLocs,]);

  

  const getCoordinates = async (loc) => {
    return axios
      .get(
        `https://api.geoapify.com/v1/geocode/search?text=${loc}&apiKey=a97d941d259f4b42912a28ac3d623d46`
      )
      
      .then((response) =>
        setCoordinates(
          (oldArray) => [
            ...oldArray,
            [
              response.data.features[0].geometry.coordinates[0],
              response.data.features[0].geometry.coordinates[1],
              // loc.remarks,
              loc
            ],
          ],
          coordinatesList.push([
            response.data.features[0].geometry.coordinates[0],
            response.data.features[0].geometry.coordinates[1],
            // loc.remarks,
            loc
          ])
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

  return (
    <div className="container" >
      <div>

        <MapContainer center={[55, 60]} zoom={2} minZoom={2} maxZoom={6} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          />
          {
            coordinates.map((poi, index) => (
              <Marker
                key={index}
                position={[poi[1], poi[0]]}

                icon={
                  new Icon({
                    iconUrl: `https://image.tmdb.org/t/p/original${movieInfo.poster_path}`,
                    iconSize: [37.5, 61.5],
                    iconAnchor: [12, 41],

                  })
                }
              >
                {poi[2] === 'undefined' ? <Popup>{poi[2] + ' / ' + poi[3]}</Popup> : <Popup>{poi[2]}</Popup>}
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapCard;