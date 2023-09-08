import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Input_tasks from "../../components/components_Tasks/Input_tasks";
import Table_Tasks from "../../components/components_Tasks/Table_Tasks";

import "./index.scss";

const Tasks = ( ) => {
  return (
    <div className="task">
      <Header />
      <Container styles='main_container'>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <Table_Tasks/>
        <Input_tasks/>
      </Container>
    </div>
  );
};

export default Tasks;
