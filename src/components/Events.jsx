import { useState, useEffect } from "react";
import Event from "./Event";
import { Container, Row, Alert } from "react-bootstrap";
import Header from "./Header";
import useCounter from "../store/userCounterStore";
import useEventStore from "../store/useEventStore";
import { deleteEvent } from "../services/api";  // Importez la fonction deleteEvent

function Events() {
    const [showMessage, setShowMessage] = useState(true);

    // Utilisez le store pour gérer les événements
    const { events, fetchEvents, updateEvent } = useEventStore();

    useEffect(() => {
        fetchEvents();  // Charge les événements au montage du composant
    }, [fetchEvents]);

    const handleBookEvent = (eventName) => {
        // Trouver l'événement à mettre à jour
        const updatedEvents = events.map(event =>
            event.name === eventName && event.nbTickets > 0
                ? {
                      ...event,
                      nbTickets: event.nbTickets - 1,
                      nbParticipants: event.nbParticipants + 1,
                  }
                : event
        );

        // Mettre à jour les événements dans le store
        updateEvent(updatedEvents);
    };

    const handleDeleteEvent = async (id) => {
        try {
            // Supprimer l'événement via l'API
            await deleteEvent(id);
            // Recharger la liste des événements après la suppression
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
                    events.map((event, index) => (
                        <Event
                            key={index}
                            event={event}
                            onBook={handleBookEvent}
                            onDelete={handleDeleteEvent}  // Passez la fonction de suppression
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