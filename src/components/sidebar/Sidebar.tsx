import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

import Input from "./Input";
import TaskCard from "./TaskCard";
import Button from "./Button";
// import Select from "./Select";
import { filterInput } from "../../store/reducers/filter";
import Modal from "./Modal";

function Sidebar() {
  const dispatch = useDispatch();

  const { listTask } = useSelector((state: RootReducer) => state.task);
  const { textInput } = useSelector((state: RootReducer) => state.filter);

  // Exibir e ocultar formulario (Adicionar Tarefa)
  const [taskForm, setTaskForm] = useState(false);

  // Buscando quantidade de tarefas e filtrando para os cards
  const doneTask = listTask.filter((t) => t.status === "Concluida");
  const pendingTask = listTask.filter((t) => t.status === "Pendente");
  const normalTask = listTask.filter((t) => t.category === "Normal");
  const importantTask = listTask.filter((t) => t.category === "Importante");
  const urgentTask = listTask.filter((t) => t.category === "Urgente");
  const totalTask = listTask.length;

  // Buscando Tarefa pelo input
  function searchTask(e: ChangeEvent<HTMLInputElement>) {
    dispatch(filterInput(e.target.value));
  }

  return (
    <>
      <aside className="xs:absolute flex h-full w-80 flex-col justify-between rounded-lg bg-gray-100 p-3">
        <div>
          <Input
            placeholder="Buscar"
            value={textInput}
            onChange={(e) => searchTask(e)}
          />
          <span className="block py-2"></span>
          <TaskCard control="todas" taskCounter={totalTask} taskType="Todas" />
          <TaskCard
            control="status"
            taskCounter={pendingTask.length}
            taskType="Pendente"
          />
          <TaskCard
            control="status"
            taskCounter={doneTask.length}
            taskType="Concluida"
          />
          <TaskCard
            control="category"
            taskCounter={urgentTask.length}
            taskType="Urgente"
          />
          <TaskCard
            control="category"
            taskCounter={importantTask.length}
            taskType="Importante"
          />
          <TaskCard
            control="category"
            taskCounter={normalTask.length}
            taskType="Normal"
          />
        </div>
        <div>
          <div className="flex gap-1">
            <Button
              text="Adicionar Tarefa"
              icon={false}
              attributes={"w-full"}
              onClick={() => console.log()}
            />
            <Button
              icon={true}
              attributes={"w-1/3"}
              onClick={() => setTaskForm(!taskForm)}
            />
          </div>
        </div>
      </aside>
      <Modal active={taskForm} onClose={() => setTaskForm(!taskForm)} />
    </>
  );
}

export default Sidebar;
