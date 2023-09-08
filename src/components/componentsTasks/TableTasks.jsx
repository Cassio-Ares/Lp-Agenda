import "./TableTasks.scss";
import { FaTrash, FaPen } from "react-icons/fa6";

const TableTasks = ({text}) => {
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
          <tr>
            <td>
              <p>{text}</p>
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td className="icons">
              <FaPen />
              <FaTrash />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTasks;
