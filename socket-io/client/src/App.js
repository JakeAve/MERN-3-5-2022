import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { SocketContextProvider } from "./providers/useSocket";

function App() {
  return (
    <SocketContextProvider>
      <Dashboard />
    </SocketContextProvider>
  );
}

export default App;
