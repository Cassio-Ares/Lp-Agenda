import Container from "../../components/Container";
import Header from "../../components/Header";
import InputTasks from "../../components/componentsTasks/InputTasks";
import TableTasks from "../../components/componentsTasks/TableTasks";
import { useEffect, useState } from "react"; //indicado por suport
import db from "../../../db.json";
import "./index.scss";

const Tasks = ({ }) => {
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

  useEffect//????
  function show() {
    fetch("http://localhost:3000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json)
      .then((data) => {
        console.log(dados);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="task">
      <Header />
      <Container styles="main_container">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <TableTasks items={items} />
        <InputTasks  setItems={setItems} handleSubmit={create} />
      </Container>
    </div>
  );
};

export default Tasks;
