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
    console.log("body del a principal");

    let db = [];

    const create = (data) => {
        db.push(data)
    };

    const read = () => {
        console.log("body del read");
    };

    const list = () => {
       return db
    };

    const update = () => {
        console.log("body del update");
    };

    const remove = () => {
        console.log("body del delete");
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
    
    const ticketsList = tickets.list();
    console.log(ticketsList, "primera consulta")
    
    tickets.create({
        "id": 1,
        "owner": "Diego",
        "event_name": "Cine",
        "event_date": "2022-11-11"
    });

    console.log(ticketsList, "segunda consulta")

}
main()




// Ticket entidad - entity
// id - unico
// owner - string
// event_name - string
// event_date - string