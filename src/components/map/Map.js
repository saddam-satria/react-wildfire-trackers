import Maps from 'google-map-react';
import mapStyle from './map.module.css';
import React from 'react';
import Markers from '../Markers';
import Loaders from '../loading/Loaders';
import Error from '../error/Errors';
import * as Ai from 'react-icons/ai';

const Map = ({ event, loading, error, center, zoom }) => {
  if (error) {
    return <Error />;
  }

  return (
    <>
      {loading && <Loaders />}
      {!loading && (
        <div className={mapStyle.container}>
          <Maps bootstrapURLKeys={{ key: 'AIzaSyBWtkNHXJJbV0NYxDdLvWqHKlCRijnnYOI' }} defaultCenter={center} defaultZoom={zoom}>
            {event !== null
              ? event.events.map((ev) => {
                  if (ev.categories[0].id === 8) {
                    return <Markers lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />;
                  } else {
                    return null;
                  }
                })
              : null}
            <div className={mapStyle.desc}>
              <span>
                <span className={mapStyle.icons}>
                  <Ai.AiTwotoneFire />
                </span>
                Wildfire areas
              </span>
            </div>
          </Maps>
        </div>
      )}
    </>
  );
};

Map.defaultProps = {
  center: {
    lat: 31.898043,
    lng: 35.204269,
  },
  zoom: 6,
};

export default Map;
