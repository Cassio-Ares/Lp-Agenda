import "./TableTasks.scss";
import { FaTrash, FaPen } from "react-icons/fa6";

const TableTasks = ({items = [] }) => {
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
                <FaPen />
                <FaTrash />
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
