import "./App.css";
import Destinations from "./components/Destinations";
function App() {
  return (
    <div>
      <Destinations />
      <div>
        <ul className="flex justify-end">
          <li className="m-2">Home</li>
          <li className="m-2">Contact</li>
          <li className="m-2">Report</li>
          <li className="m-2">Help</li>
          <li className="m-2">Location</li>
        </ul>
      </div>
      <div className="flex m-20">
        <div className="w-44 h-44 bg-gray-400 m-2"></div>
        <div className="w-44 h-44 bg-pink-300 m-2"></div>
        <div className="w-44 h-44 bg-teal-400 m-2"></div>
      </div>
    </div>
  );
}
export default App;
