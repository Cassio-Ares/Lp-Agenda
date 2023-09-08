import Container from "../../components/Container";
import Header from "../../components/Header";
import InputTasks from "../../components/componentsTasks/InputTasks";
import TableTasks from "../../components/componentsTasks/TableTasks";
import { useEffect, useState } from "react"; 
import db from "../../../db.json";
import "./index.scss";
import CardAdd from "../../components/Cards/CardAdd";
import CardDel from "../../components/Cards/CardDel";

const Tasks = ({ }) => {
  //Father
  const [items, setItems] = useState([...db.ex]); 

 
  // useEffect//????
  // function show() {
  //   fetch("http://localhost:3000/tasks", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json)
  //     .then((data) => {
  //       console.log(dados);
  //     })
  //     .catch((err) => console.log(err));
  // }

  //delete

  function removeTask(){

  }
  
  //edit

  function editTask(){
    
  }

  return (
    <div className="task">
      <Header />
      <Container styles="main_container">
       <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <TableTasks items={items} />
        <InputTasks  setItems={setItems}/>
      </Container>
    </div>
  );
};

export default Tasks;
