import Homepage from "./Homepage";
import EmployeePage from "./EmployeePage";


function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
      <Homepage />
      <EmployeePage />
    </div>
  );
}

export default App;
