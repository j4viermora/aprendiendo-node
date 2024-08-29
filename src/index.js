// Crear el ticket
// Consultar el ticket
// Actualizar el ticket
// Eliminar el ticket
// Listar todos los tickets

// CRUD
// Create
// Read
// Update
// Delete

const ticketsService = () => {
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
            if (ticket.id === id) {
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

const tickets = ticketsService();
const main = () => {
    // console.log(ticketsList, "primera consulta")

    tickets.create({
        id: 1,
        owner: "Diego",
        event_name: "Cine",
        event_date: "2022-11-11",
    });
    tickets.create({
        id: 2,
        owner: "Diego",
        event_name: "Cine",
        event_date: "2022-11-11",
    });

    // console.log(ticketsList, "primera consulta lista de eventos");

    // obtener un ticket

    // const getOne = ticketsList.find((ticket) => ticket.id === 2);

    // console.log(getOne)
    // console.log(tickets.remove(2), "first");
    console.log(tickets.list(), "first");
    // update one ticket
    tickets.update(1, "Brian Luzardo");
    console.log(tickets.list(), "updated");

};
main();

// Ticket entidad - entity
// id - unico
// owner - string
// event_name - string
// event_date - string
