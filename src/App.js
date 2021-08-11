import "./App.css";
import RawInputData from "./components/RawInputData";
import MarkDown from "./components/MarkDown";
import { MarkDownContextProvider } from "./context/markDownContext";

function App() {
  return (
    <MarkDownContextProvider>
      <div className="App">
        <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <RawInputData />
            </div>
            <div className="column eight wide">
              <MarkDown />
            </div>
          </div>
        </div>
      </div>
    </MarkDownContextProvider>
  );
}

export default App;
