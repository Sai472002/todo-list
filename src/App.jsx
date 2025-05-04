import "./App.css";
import { MessageProvider } from "./Components/custom/CustomMessage";
import Routers from "./Components/Router";


function App() {
  return (
    <div className="h-screen">
      <MessageProvider>
<Routers/>
      </MessageProvider>
    </div>
  );
}

export default App;
