import "./App.css";
import "antd/dist/antd.css";
import { AntDDatePicker, presetDates } from "./DatePicker";
import { DatePicker } from "antd";

function App() {
  return (
    <div className='App'>
      <AntDDatePicker presetDates={presetDates} />
      <DatePicker />
    </div>
  );
}

export default App;
