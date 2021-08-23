import React from 'react';
import Map from '../components/map/Map';

const Index = () => {
  const [events, setEvents] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchMarkers = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      try {
        setLoading(false);
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        setError(true);
      }
    };
    fetchMarkers();
  }, []);

  return (
    <div>
      <Map event={events} loading={loading} error={error} />
    </div>
  );
};

export default Index;
