import "./Input_tasks.scss";
import Button from '../Button'

const Input_tasks = ({ onChange, submit }) => {
  return (
    <div >
      <form onSubmit={submit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Nova tarefa..."
          onChange={onChange}
        />
        <Button text= '+' styles= 'btn_form' />      
      </form>
    </div>
  );
};

export default Input_tasks;
