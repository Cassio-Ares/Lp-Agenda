import "./Table_Tasks.scss";
import { FaTrash, FaPen } from "react-icons/fa6";

const Table_Tasks = () => {
  return (
    <div className="table">
      <table >
        <tr>
          <th>Tarefa</th>
          <th>Status</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            <p>faxina na casa</p>
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td className="icons">
            <FaPen />
            <FaTrash />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table_Tasks;
