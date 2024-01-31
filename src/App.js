import "./App.css";
import ListaTareas from "./components/ListaTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <h1 className="freecodecamp-logo-contenedor">Lista de tareas</h1>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
