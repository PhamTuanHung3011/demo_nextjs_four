import EventItemPage from "./event_item";

function EventListPages(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItemPage
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
export default EventListPages;
