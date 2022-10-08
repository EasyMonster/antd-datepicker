import "./App.css";
import "antd/dist/antd.css";
import { AntDDatePicker, presetDates } from "./DatePicker";

function App() {
  return (
    <div className='App'>
      <AntDDatePicker presetDates={presetDates} />
    </div>
  );
}

export default App;
