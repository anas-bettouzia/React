import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import Placeholder from "../assets/placeholder.jpg";
import { Link } from "react-router-dom";
import useFavoriteStore from "../store/useFavoriteStore"; 

const Event = ({ event, onBook, onDelete, isFavorite = false }) => {
    const [showMessage, setShowMessage] = useState(false);
    const { addFavorite, removeFavorite } = useFavoriteStore(); 

    const images = import.meta.glob("../assets/*", { eager: true });
    const getImagePath = (img) => {
        return images[`../assets/${img}`]?.default || Placeholder;
    };

    const handleBook = () => {
        onBook(event.name);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    };

    const [liked, setLiked] = useState(false);
    const togglelike = () => {
        setLiked(prevState => !prevState);
    };

    const handleAddToFavorites = () => {
        addFavorite(event); 
    };

    const handleRemoveFromFavorites = () => {
        removeFavorite(event.id); 
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={getImagePath(event.img)} />
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>Prix: {event.price} DT</Card.Text>
                <Card.Text>Tickets restants: {event.nbTickets}</Card.Text>
                <Card.Text>Participants: {event.nbParticipants}</Card.Text>

                {showMessage && <Alert variant="success">You have booked an event</Alert>}

                <Button
                    onClick={handleBook}
                    disabled={event.nbTickets === 0}
                >
                    {event.nbTickets === 0 ? "Sold Out" : "Book an Event"}
                </Button>

                <Button
                    onClick={togglelike}
                    variant={liked ? "danger" : "primary"}
                    className="ms-2"
                >
                    {liked ? "Dislike" : "Like"}
                </Button>

                <Button
                    variant="warning"
                    as={Link}
                    to={`/update-event/${event.id}`}
                    className="ms-2"
                >
                    Update
                </Button>

                <Button
                    variant="danger"
                    onClick={() => onDelete(event.id)}
                    className="ms-2"
                >
                    Delete
                </Button>

                <Button variant="outline-primary" as={Link} to={`/by/price/${event.price}`} className="ms-2">
                    Voir Details
                </Button>

                {isFavorite ? (
                    <Button
                        variant="danger"
                        onClick={handleRemoveFromFavorites}
                        className="ms-2"
                    >
                        Retirer des favoris
                    </Button>
                ) : (
                    <Button
                        variant="info"
                        onClick={handleAddToFavorites}
                        className="ms-2"
                    >
                        Ajouter aux favoris
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

export default Event;