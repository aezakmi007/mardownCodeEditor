import "./App.css";
import RawInputData from "./components/RawInputData";
import MarkDown from "./components/MarkDown";
import MarkDownContextProvider from "./context/markDownContext";

function App() {
  return (
    <MarkDownContextProvider>
      <div class="App">
        <div class="ui container grid">
          <div class="ui row">
            <div class="column eight wide">
              <RawInputData />
            </div>
            <div class="column eight wide">
              <MarkDown />
            </div>
          </div>
        </div>
      </div>
    </MarkDownContextProvider>
  );
}

export default App;
