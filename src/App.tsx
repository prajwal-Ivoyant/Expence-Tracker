import "./App.css";
import ExpenseForm from "./components/expenceForm";
import ExpenceList from "./components/expenceList";
import Navbar from "./components/NavBar";
import FiltersBar from "./components/filterBar";
import SummaryCards from "./components/SummayCards";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <SummaryCards />

      <div className="main-grid">

        <div className="left-panel">
          <ExpenseForm />
        </div>

        <div className="right-panel">
          <FiltersBar />
          <ExpenceList />
        </div>
      </div>
    </div>
  );
}

export default App;
