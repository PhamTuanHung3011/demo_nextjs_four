
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from '../dummy-data';
import EventItemPage from '../components/events/event_list';

function Home() {

  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
      <EventItemPage items={featuredEvents}/>
    </div>
  );
}

export default Home;