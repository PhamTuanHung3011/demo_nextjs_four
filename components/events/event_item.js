function EventItemPage(props) {
  const { title, descrioption, date, location, id, image } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: 'numeric',
  });
  const formattedAddress = location.replace(", ", "/n");
  const exploreLink = '/events/${id}';

  return (
    <li>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <h2>{descrioption}</h2>
        </div>
        <div>
            <link href={exploreLink}> Explore Event</link>
        </div>
      </div>
    </li>
  );
}

export default EventItemPage;
