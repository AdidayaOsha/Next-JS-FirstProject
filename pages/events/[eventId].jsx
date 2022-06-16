import { Fragment } from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage(props) {
  const { selectedEvents } = props;

  if (!selectedEvents) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={selectedEvents.title} />
      <EventLogistics
        date={selectedEvents.date}
        address={selectedEvents.location}
        image={selectedEvents.image}
        imageAlt={selectedEvents.title}
      />
      <EventContent>
        <p>{selectedEvents.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvents: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths,
    // fallback false: letting next js know if we try to load this page
    // for unknown id, it will show the 404 page
    fallback: "blocking",
  };
}

export default EventDetailPage;
