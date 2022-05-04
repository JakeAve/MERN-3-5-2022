import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

const socketInicial = io(":8000");

const socketContext = createContext(socketInicial);

export const useSocketContext = () => useContext(socketContext);

export const SocketContextProvider = ({ children }) => {
  const [socket] = useState(useSocketContext());

  console.log({ socket });

  useEffect(() => {
    const eventHandler = (datos) => console.log(datos);
    socket.on("welcome", eventHandler);

    socket.on("disconect", () => socket.open());

    socket.emit("test", "1234");
    return () => {
      socket.off("welcome", eventHandler);
    };
  }, [socket]);
  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};
