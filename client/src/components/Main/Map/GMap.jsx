import React, { useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
} from "react-google-maps";
import { midNightCommander } from "./mapStyle";

const current_location = JSON.parse(process.env.REACT_APP_CURRENT_LOC_LAT_LNG);
const mapApiKey = process.env.REACT_APP_MAP_API_KEY;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapApiKey}`;

const Map = ({ data, router }) => {
  const [selectedLoc, setSelectedLoc] = useState(null);
  const handleLocationNavigation = payload => {
    router.push("/app/create-land", { currentLand: payload });
  };
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={current_location}
      defaultOptions={{ styles: midNightCommander }}
    >
      {data.map(loc => (
        <Marker
          key={loc._id}
          position={{ lat: loc.coOrdinates.lat, lng: loc.coOrdinates.lng }}
          onClick={() => setSelectedLoc(loc)}
        />
      ))}

      {selectedLoc && (
        <InfoWindow
          position={{
            lat: selectedLoc.coOrdinates.lat,
            lng: selectedLoc.coOrdinates.lng
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
