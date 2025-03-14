import { useState, useEffect } from "react";
import Event from "./Event";
import { Container, Row, Alert } from "react-bootstrap";
import Header from "./Header";
import useCounter from "../store/userCounterStore";
import useEventStore from "../store/useEventStore";
import { deleteEvent } from "../services/api"; 

function Events() {
    const [showMessage, setShowMessage] = useState(true);
    const { events, fetchEvents, updateEvent } = useEventStore();

    useEffect(() => {
        fetchEvents(); 
    }, [fetchEvents]);

    const handleBookEvent = (eventName) => {
        const updatedEvents = events.map(event =>
            event.name === eventName && event.nbTickets > 0
                ? {
                      ...event,
                      nbTickets: event.nbTickets - 1,
                      nbParticipants: event.nbParticipants + 1,
                  }
                : event
        );

        updateEvent(updatedEvents);
    };

    const handleDeleteEvent = async (id) => {
        try {
            await deleteEvent(id);
            fetchEvents();
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    const { count, increment, decrement, reset } = useCounter();

    return (
        <Container>
            <Header />

            <div>{count}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>

            {showMessage && (
                <Alert variant="success">Bienvenue sur la page des événements !</Alert>
            )}
            <Row>
                {Array.isArray(events) && events.length > 0 ? (
                    events.map((event) => (
                        <Event
                            key={event.id}
                            event={event}
                            onBook={handleBookEvent}
                            onDelete={handleDeleteEvent}
                        />
                    ))
                ) : (
                    <p>Aucun événement disponible.</p>
                )}
            </Row>
        </Container>
    );
}

export default Events;