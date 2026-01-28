import "./App.css";
import ExpenseForm from "./components/expenceForm";
import ExpenceList from "./components/expenceList";
import FiltersBar from "./components/filterBar";

function App() {
  return (
    <div >
      <h1 className="app-title">Expense Tracker</h1>
      <FiltersBar />

      <div >
        <ExpenseForm />

        <ExpenceList />
      </div>
    </div>
  );
}

export default App;
