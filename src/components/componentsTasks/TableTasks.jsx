import "./TableTasks.scss";
import CardDel from '../Cards/CardDel'
import { FaTrash, FaPen } from "react-icons/fa6";
import { useState } from "react";

const TableTasks = ({items = []}) => {
    const [del, setDel]= useState(false)
    const [edit, setEdit] = useState (false)

    function delet(){
      setDel(true)
    }

    function edite(){
      setEdit(true)
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
                <FaPen   />
                <FaTrash onClick={delet} />
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
