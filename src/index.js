import express from "express";
import { ticketsService } from "./tickets_services.js"

const app = express();
const tickets = ticketsService();

app.use(express.json());
app.listen(3000, () => {
  console.log(`Servidor corriendo en el puerto 3000 🚀`);
});

app.get("/tickets", (req, res) => {
  const list = tickets.list();
  res.send(list);
});

app.post("/tickets", (request, response) => {

  const {
    owner,
    event_name,
    event_date,
  } = request.body;


  tickets.create({
    id: new Date().getTime(),
    owner,
    event_name,
    event_date,
  });
  

  return response.send(
    {
      message: "ticket creado",
      owner,
      event_name,
      event_date,
    }
  );
});