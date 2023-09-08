import Container from "../../components/Container";
import Header from "../../components/Header";
import InputTasks from "../../components/componentsTasks/InputTasks";
import TableTasks from "../../components/componentsTasks/TableTasks";
import { useState } from "react"; //indicado por suport
import db from "../../../db.json"
import "./index.scss";

const Tasks = ({name}) => {
//Father 
const [items, setItems] = useState([...db.ex]); //indicado por suport

function create(task) {
    task.title = [];

    fetch("http://localhost:3000/tasks", {
     method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(task),
    })
      .then((resp) => resp.json)
       .then((data) => {
        console.log(task);
       })
       .catch((err) => console.log(err));
   }

  return (
    <div className="task">
      <Header />
      <Container styles='main_container'>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <TableTasks text={name}/>
        <InputTasks handleSubmit={create}/>
      </Container>
    </div>
  );
};

export default Tasks;
