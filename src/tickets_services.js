// Crear el ticket
// Consultar el ticket
// Actualizar el ticket
// Eliminar el ticket
// Listar todos los tickets

// CRUD
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE

import { Ticket } from "./db.js";

export const ticketsService = () => {
    let db = [];

    /**
     * The `create` function pushes data into a database array.
     * @param data - The `data` parameter in the `create` function represents the information or object
     * @param data.owner - The `owner` property represents the name of the person who created the ticket.
     * @param data.event_name - The `event_name` property represents the name of the event that the ticket is for.
     * @param data.event_date - The `event_date` property represents the date of the event that the ticket is for.
     * that you want to add to the `db` array. When you call the `create` function and pass in the
     * `data` parameter, it will be pushed into the `db` array.
     */
    const create = async (data) => {
        try {
            const ticket = await Ticket.create({
                owner: data.owner,
                event_name: data.event_name,
                event_date: data.event_date,
            });

            return ticket;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    };

    const read = (id) => {
        return db.find((ticket) => ticket.id === id);
    };

    const list = async () => {
        const tickets = await Ticket.findAll({
            raw: true
        });
        return tickets
    };

    const update = (id, name) => {
        const newDB = db.map((ticket) => {
            if (ticket.id === Number(id)) {
                ticket.owner = name;
            }
            return ticket;
        });

        db = [...newDB];
        return db;
    };

    const remove = (id) => {
        const newDB = db.filter((ticket) => ticket.id !== id);
        db = [...newDB];
        return db;
    };

    return {
        create,
        read,
        list,
        update,
        remove,
    };
}; // arrow function
