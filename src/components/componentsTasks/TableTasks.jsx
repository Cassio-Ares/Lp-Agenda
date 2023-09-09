import "./TableTasks.scss";
import { FaTrash, FaPen } from "react-icons/fa6";
import CardAdd from "../Cards/CardAdd";
import CardDel from '../Cards/CardDel'
import { useState } from "react";

const TableTasks = ({items = [], removeTask}) => {
    const [del, setDel]= useState(false)
    const [edit, setEdit] = useState (false)

    // States para negar 
    function delet(){
      setDel(!del)
    }

    function edite(){
      setEdit(!edit)
    }

    //const para remover (new)
     const deletYes = (e) =>{
      e.preventDefault()
      removeTask(items)
     }

    

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <td className="table_pg">{item.title}</td>
              <td>
              <input type="checkbox" />
            </td>
            <td className="icons">
                <FaPen onClick={edite}  />
                {edit === true &&(
                  <CardAdd onclickNo={edite} />
                )}
                <FaTrash onClick={delet} />
                {del === true &&(
                  <CardDel onclickNo={delet}  onclickYes={deletYes} />
                )}
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTasks;
