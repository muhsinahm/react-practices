import "./App.css";
import Shapes from "./components/Shapes/Shapes";
// import Checklist from "./components/Checklist/Checklist";
// import Dropdown from "./components/Dropdown/Dropdown";
const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

function App() {
  return (
    <div>
      {/* <Checklist /> */}
      {/* <Dropdown /> */}
      <Shapes data={BOX_DATA} />
    </div>
  );
}

export default App;
