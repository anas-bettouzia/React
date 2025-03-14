import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import Header from "./Header";
import { editEvent, getallEvents } from "../services/api";

// Schéma Zod sans validation du champ img
const eventSchema = z.object({
    name: z.string().min(3, "Event name must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    price: z.coerce.number().min(1, "Price must be at least 1").max(1000, "Price must be at most 1000"),
    nbTickets: z.coerce.number().min(1, "Number of tickets must be at least 1").max(100, "Number of tickets must be at most 100"),
    nbParticipants: z.coerce.number().min(0, "Number of participants must be a non-negative number"),
    like: z.boolean(),
});

const UpdateEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            name: "",
            description: "",
            price: "",
            nbTickets: "",
            nbParticipants: "",
            like: false,
        },
    });

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await getallEvents(id);
                const eventData = response.data;
                setValue("name", eventData.name);
                setValue("description", eventData.description);
                setValue("price", eventData.price);
                setValue("nbTickets", eventData.nbTickets);
                setValue("nbParticipants", eventData.nbParticipants);
                setValue("like", eventData.like);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching event data:", error);
            }
        };
        fetchEvent();
    }, [id, setValue]);

    const onSubmit = async (data) => {
        try {
            await editEvent(id, data);
            navigate("/events");
        } catch (error) {
            console.error("Error updating event:", error);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" {...register("name")} isInvalid={!!errors.name} />
                    <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" {...register("description")} isInvalid={!!errors.description} />
                    <Form.Control.Feedback type="invalid">{errors.description?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="price" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" {...register("price")} isInvalid={!!errors.price} />
                    <Form.Control.Feedback type="invalid">{errors.price?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="nbTickets" className="mb-3">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control type="number" {...register("nbTickets")} isInvalid={!!errors.nbTickets} />
                    <Form.Control.Feedback type="invalid">{errors.nbTickets?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="nbParticipants" className="mb-3">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control type="number" {...register("nbParticipants")} isInvalid={!!errors.nbParticipants} />
                    <Form.Control.Feedback type="invalid">{errors.nbParticipants?.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="like" className="mb-3">
                    <Form.Check type="checkbox" label="Like" {...register("like")} />
                </Form.Group>
                <Button variant="primary" type="submit">Update</Button>
                <Button variant="secondary" onClick={() => navigate("/events")} className="ms-2">Cancel</Button>
            </Form>
        </>
    );
};

export default UpdateEvent;