import "./InputTasks.scss";
import Button from '../Button'
import { useState } from "react";

const InputTasks = ({btn_event, handleSubmit, dataTasks  }) => {
  const [task, setTask] = useState(dataTasks || { })

   const submit = (e) => {
     e.preventDefault()
     console.log(task)
   /handleSubmit(task)
   }

  
    const handleChange = (e) => {
    setTask({ title: e.target.value });
    // console.log(task);
  };

  //  const submit = (e) => {
  //   e.preventDefault();
  //    setItems((prev) => {
  //    return [...prev, task];
  //   });
  // };

  return (
    <div >
      <form onSubmit={submit} className="form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nova tarefa..."
          onChange={handleChange}
        />
        <Button  text= '+' styles= 'btn_form' />      
      </form>
    </div>
  );
};

export default InputTasks;
