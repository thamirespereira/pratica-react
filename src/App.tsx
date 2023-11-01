import Card from "./assets/components/card/Card";
import Curtir from "./assets/components/curtir/Curtir";
import './App.css';
import Tarefa from "./assets/components/tarefa/Tarefa";
import Home from "./assets/components/home/Home";

function App() {
  return (
    <>
    <Card titulo='Stray Kids'
          descricao='Grupo' />
    <Curtir/>
    <Tarefa/>
    <Home/>
    </>
    
  );
}

export default App
