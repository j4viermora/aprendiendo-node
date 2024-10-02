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

export const ticketsService = () => {
    let db = [];

    const create = (data) => {
        db.push(data);
    };

    const read = (id) => {
        return db.find((ticket) => ticket.id === id);
    };

    const list = () => {
        return db;
    };

    const update = (id, name) => {
        const newDB  = db.map((ticket) => {
            if (ticket.id === Number(id)) {
                ticket.owner = name;
            }
            return ticket;
        })

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

// Ticket entidad - entity
// id - unico
// owner - string
// event_name - string
// event_date - string
