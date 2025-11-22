import "./App.css";
import { VscAdd } from "react-icons/vsc";
import { Button } from "./components/Buttons";
import { FaShareAlt } from "react-icons/fa";

function App() {
  return (
    <>
      <Button
        variant="primary"
        size="lg"
        text="Add Content"
        onClick={() => {}}
        startIcon={<VscAdd />}
      />
      <Button
        variant="secondary"
        size="lg"
        text="Share Brain"
        onClick={() => {}}
        startIcon={<FaShareAlt />}
      />
    </>
  );
}

export default App;
