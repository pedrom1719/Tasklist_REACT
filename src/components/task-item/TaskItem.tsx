import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Check,
  Pencil,
  SquareDashed,
  SquareCheck,
  Trash,
  X,
} from "lucide-react";
import { removeTask, applyEdit, finishTask } from "../../store/reducers/tasks";

import TagsList from "./TagsList";
import TaskDesc from "./TaskDesc";
import TaskTitle from "./TaskTitle";
import Task_Item from "../../models/Task";

type TaskItemProps = Task_Item;

let activeEdit: string = "";

function TaskItem({ cd, title, category, status, desc }: TaskItemProps) {
  const dispatch = useDispatch();

  const [done, setDone] = useState(false);
  const [edit, setEdit] = useState(false);
  const [descContent, setDescContent] = useState("");

  useEffect(() => {
    if (desc.length > 0) {
      setDescContent(desc);
    }
  }, [desc]);

  function checkTask() {
    dispatch(
      finishTask({
        cd,
        title,
        category,
        status: "Concluida",
        desc: descContent,
      }),
    );
    setDone(!done);
  }

  function editTask() {
    setEdit(true);
    activeEdit =
      "bg-white border-2 border-gray-200 rounded-lg p-3 outline-none";
  }

  function cancelEdit() {
    setEdit(false);
    setDescContent(desc);
    activeEdit = "";
  }

  function confirmEdit() {
    dispatch(
      applyEdit({
        cd,
        title,
        category,
        status,
        desc: descContent,
      }),
    );
    setEdit(false);
    activeEdit = "";
  }

  return (
    <>
      {/* Main Content */}
      <div
        className={` ${status === "Concluida" ? "grayscale" : ""} block w-full rounded-lg bg-gray-100 p-4 transition-all hover:bg-gray-200/60`}
      >
        {/* TitleContainer */}
        <div className="flex items-start justify-between gap-1 border-b-2 border-gray-200 pb-4">
          {/* Title + Tags */}
          <div>
            {/* Mostrar ID da Tarefa (Para motivo de testes) */}
            {/* <span className="inline-block translate-y-[-5px] text-xs text-gray-400">
              #{cd}
            </span> */}
            <TaskTitle
              onClick={checkTask}
              title={title}
              icon={status === "Concluida" ? SquareCheck : SquareDashed}
              attribute={status === "Concluida" ? "line-through" : ""}
            />
            <ul className="ml-[-2px] flex items-center gap-2">
              <TagsList categ={category} />
              <TagsList categ={status} />
            </ul>
          </div>

          {/* Action Buttons */}
          {edit ? (
            <>
              <div className="flex gap-2">
                <Check
                  onClick={confirmEdit}
                  className="h-7 w-7 cursor-pointer rounded bg-gray-200 p-[7px] text-emerald-500 transition-all hover:bg-emerald-500 hover:text-white"
                />
                <X
                  onClick={cancelEdit}
                  className="h-7 w-7 cursor-pointer rounded bg-gray-200 p-[7px] text-violet-500 transition-all hover:bg-violet-500 hover:text-white"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-2">
                <Pencil
                  onClick={editTask}
                  className="h-7 w-7 cursor-pointer rounded bg-gray-200 p-[7px] text-gray-500 transition-all hover:bg-gray-400 hover:text-white"
                />
                <Trash
                  onClick={() => dispatch(removeTask(cd))}
                  className="h-7 w-7 cursor-pointer rounded bg-gray-200 p-[7px] text-violet-500 transition-all hover:bg-violet-500 hover:text-white"
                />
              </div>
            </>
          )}
        </div>

        {/* Task Description */}
        <TaskDesc
          disabled={!edit}
          value={descContent}
          onChange={(e) => setDescContent(e.target.value)}
          attributes={activeEdit}
        />
      </div>
    </>
  );
}

export default TaskItem;
