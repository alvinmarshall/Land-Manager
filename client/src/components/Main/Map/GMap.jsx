import React, { useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
  Polygon
} from "react-google-maps";
import { midNightCommander } from "./mapStyle";

//JSON.parse(process.env.REACT_APP_CURRENT_LOC_LAT_LNG);
const current_location = { lat: 6.06006, lng: -1.394168 };
const mapApiKey = process.env.REACT_APP_MAP_API_KEY;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapApiKey}`;

const Map = ({ data, router }) => {
  const [selectedLoc, setSelectedLoc] = useState(null);
  const handleLocationNavigation = payload => {
    router.push("/app/create-land", { currentLand: payload });
  };
  return (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={current_location}
      defaultOptions={{ styles: midNightCommander }}
    >
      {data.map((loc, index) => (
        <Marker
          key={loc._id}
          position={{
            lat: loc.coOrdinates[index].lat,
            lng: loc.coOrdinates[index].lng
          }}
          onClick={() => setSelectedLoc(loc)}
          style={{ height: "2xpx", width: "2px" }}
        />
      ))}

      {selectedLoc && (
        <InfoWindow
          position={{
            lat: selectedLoc.coOrdinates[0].lat,
            lng: selectedLoc.coOrdinates[0].lng
          }}
          onCloseClick={() => setSelectedLoc(null)}
        >
          <div>
            <button
              className="btn btn-sm btn-neutral"
              onClick={() => handleLocationNavigation(selectedLoc)}
            >
              {selectedLoc.name}
            </button>
          </div>
        </InfoWindow>
      )}

      {data.map(loc => (
        <Polygon
          key={loc._id}
          path={loc.coOrdinates}
          geodesic={true}
          options={{
            strokeColor: "#ff2527",
            strokeOpacity: 0.75,
            strokeWeight: 2
          }}
        />
      ))}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GMap = ({ data, router }) => {
  return (
    <div style={{ height: "85vh" }}>
      <WrappedMap
        data={data}
        router={router}
        googleMapURL={googleMapURL}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default GMap;
