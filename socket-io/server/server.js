const express = require("express");

const PORT = 8000;

const app = express();

const server = app.listen(PORT, () => console.log(`Servidor está en ${PORT}`));

const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:3000" },
});

function createData(time, amount) {
  return { time, amount };
}

const defaultData = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];

io.on("connection", (socket) => {
  console.table({ id: socket.id });

  socket.emit("welcome", "daaaatooos");

  socket.on("test", (d) => console.log(d));
  socket.on("nuevo-numero", (num) =>
    socket.broadcast.emit("actualizar-grafico", num)
  );
});
