import React from 'react';

const EventDetails = ({ id }) => {
  const [event, setEvent] = React.useState(null);

  React.useEffect(() => {
    const fetchEventData = async () => {

      const eventData = await getEventDataFromAPI(id);
      setEvent(eventData);
    };
    fetchEventData();
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      
    </div>
  );
};

export default EventDetails;
