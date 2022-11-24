import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="todoapp">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
