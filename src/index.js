import express from "express";
import { ticketsService } from "./tickets_services.js";

const app = express();
const tickets = ticketsService();

app.use(express.json());
app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000 🚀`);
});

app.get("/tickets",async (req, res) => {
    const list = await tickets.list();
    res.send(list);
});

app.get("/tickets/:id", (req, res) => {
    const id = Number(req.params.id);
    const ticket = tickets.read(id);
    res.send(ticket);
});

app.post("/tickets", async (request, response) => {
    const { owner, event_name, event_date } = request.body;

    try {
        const ticket = await tickets.create({
            owner,
            event_name,
            event_date,
        });

        return response.send({ results: ticket.dataValues });
    } catch (error) {
        response.status(500);
        return response.send(error.message);
    }
});

app.patch("/tickets/:id", (request, response) => {
    const id = request.params.id;
    const name = request.body.name;

    tickets.update(id, name);

    return response.send({
        message: "ticket actualizado",
    });
});

app.delete("/tickets/:id", (request, response) => {
    const id = Number(request.params.id);
    tickets.remove(id);
    return response.send({
        message: "ticket eliminado",
    });
});
