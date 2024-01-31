import React, { useState } from "react";
import "../stylesheets/Formulario.css";
import { v4 as uuid } from "uuid";

function Formulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // console.log("Enviando...");
    const tareaNueva = {
      id: uuid(),
      texto: input,
      completado: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Nueva tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton" type="submit">
        Agregar tarea
      </button>
    </form>
  );
}

export default Formulario;
