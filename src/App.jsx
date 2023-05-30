import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import { Container, Button, Spinner } from "react-bootstrap";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    //realizar una peticion get
    //https://thesimpsonsquoteapi.glitch.me/quotes
    try {
      setMostrarSpinner(true)
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato[0]);
      setPersonaje(dato[0]);
      //ocultar el spinner
      setTimeout(()=>{
        setMostrarSpinner(false);
      }, 2500)
      
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="my-5">
      <Spinner variant="primary"></Spinner>
    </div>
  ) : (
    <Frase personaje={personaje}></Frase>
  );

  return (
    <>
      <Container className="text-center my-5">
        <img src={logo} alt="Logo de los simpsons" className="w-50" />
        {mostrarComponente}
        <Button variant="warning" onClick={consultarAPI}>
          Obtener frase
        </Button>
      </Container>
    </>
  );
}

export default App;
