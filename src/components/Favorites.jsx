import React from 'react';
import { Container, Row, Alert } from 'react-bootstrap';
import Event from './Event';
import useFavoriteStore from '../store/useFavoriteStore';

function Favorites() {
    const { favorites, removeFavorite } = useFavoriteStore();

    return (
        <Container>
            <h2>Mes Favoris</h2>
            {favorites.length > 0 ? (
                <Row>
                    {favorites.map((event) => (
                        <Event
                            key={event.id} 
                            event={event}
                            onDelete={removeFavorite}
                            isFavorite={true} // Indique que c'est un favori
                        />
                    ))}
                </Row>
            ) : (
                <Alert variant="info">Aucun élément en favoris.</Alert>
            )}
        </Container>
    );
}

export default Favorites;