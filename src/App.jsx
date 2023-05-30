import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logosimpson.png';
import { Container, Button } from 'react-bootstrap';
import Frase from './components/Frase';

function App() {

  return (
    <>
    <Container className='text-center my-5'>
        <img src={logo} alt='Logo de los simpsons' className='w-50' /> 
        <Frase></Frase>
        <Button variant="warning">Obtener frase</Button>
    </Container>
   
      
    </>
  )
}

export default App
