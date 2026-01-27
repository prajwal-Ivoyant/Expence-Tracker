import "./App.css";
import ExpenseForm from "./components/expenceForm";
import ExpenceList from "./components/expenceList";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Expense Tracker</h1>

      <div className="app-section">
        <ExpenseForm />

        <ExpenceList />
      </div>
    </div>
  );
}

export default App;
