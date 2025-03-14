import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Header from "./Header";
import useEventStore from "../store/useEventStore";

const eventSchema = z.object({
    name: z.string().min(3, "Event name must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    img: z.any()
        .refine((file) => file.length > 0, "Image is required")
        .refine((file) => file[0]?.size < 5 * 1024 * 1024, "Image size must be less than 5MB"),
    price: z.coerce.number().min(1, "Price must be at least 1").max(1000, "Price must be at most 1000"),
    nbTickets: z.coerce.number().min(1, "Number of tickets must be at least 1").max(100, "Number of tickets must be at most 100"),
    nbParticipants: z.coerce.number().min(0, "Number of participants must be a non-negative number"),
    like: z.boolean(),
});

const EventForm = () => {
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        name: "",
        description: "",
        img: "",
        price: "",
        nbTickets: "",
        nbParticipants: "",
        like: false,
    });

    const { addEvent } = useEventStore();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues: event,
    });

    const onSubmit = async (data) => {
        const { name, description, img, price, nbTickets, nbParticipants, like } = data;
        console.log(data);
        try {
            addEvent({
                name,
                description,
                img: img[0].name,
                price: parseFloat(price),  // Conversion en nombre
                nbTickets: parseInt(nbTickets, 10),  // Conversion en nombre
                nbParticipants: parseInt(nbParticipants, 10),  // Conversion en nombre
                like,
            });
            navigate("/events");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        {...register("name")}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        {...register("description")}
                        isInvalid={!!errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.description?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="img" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="img"
                        {...register("img")}
                        isInvalid={!!errors.img}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.img?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="price" className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        {...register("price")}
                        isInvalid={!!errors.price}  
                        step={0.01}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.price?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="nbTickets" className="mb-3">
                    <Form.Label>Number of Tickets</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbTickets"
                        {...register("nbTickets")}
                        isInvalid={!!errors.nbTickets}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.nbTickets?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="nbParticipants" className="mb-3">
                    <Form.Label>Number of Participants</Form.Label>
                    <Form.Control
                        type="number"
                        name="nbParticipants"
                        {...register("nbParticipants")}
                        isInvalid={!!errors.nbParticipants} 
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.nbParticipants?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="like" className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="Like"
                        name="like"
                        {...register("like")}
                        isInvalid={!!errors.like}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.like?.message}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="danger" type="reset" onClick={() => navigate("/events")}>
                    Cancel
                </Button>
            </Form>
        </>
    );
};

export default EventForm;   