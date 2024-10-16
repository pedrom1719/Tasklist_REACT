import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import TaskItem from "../task-item/TaskItem";
import SearchTag from "./SearchTag";
import NoResult from "./NoResult";

function Content() {
  let emptyFilter: boolean = true;

  const { listTask } = useSelector((state: RootReducer) => state.task);
  const { textInput, control, value } = useSelector(
    (state: RootReducer) => state.filter,
  );

  function taskFilter() {
    let dbTasks = listTask;

    if (textInput !== undefined) {
      dbTasks = dbTasks.filter((t) =>
        t.title.toLowerCase().includes(textInput.toLowerCase()),
      );

      if (control == "category") {
        dbTasks = dbTasks.filter(
          (t) => t.category.toLowerCase() === value.toLowerCase(),
        );
      } else if (control == "status") {
        dbTasks = dbTasks.filter(
          (t) => t.status.toLowerCase() === value.toLowerCase(),
        );
      }

      if (dbTasks.length > 0) {
        emptyFilter = false;
        return dbTasks;
      } else {
        emptyFilter = true;
        return dbTasks;
      }
    } else {
      return dbTasks;
    }
  }

  return (
    <>
      <main className="flex h-full w-full flex-col justify-between rounded-lg border-2 border-gray-50 p-3 sm:h-[calc(100vh-56px)]">
        <div className="h-full space-y-3 overflow-y-auto">
          {taskFilter().map((taskIndex) => (
            <div key={taskIndex.cd}>
              <TaskItem
                cd={taskIndex.cd}
                title={taskIndex.title}
                category={taskIndex.category}
                status={taskIndex.status}
                desc={taskIndex.desc}
              />
            </div>
          ))}
          <NoResult empty={emptyFilter} textInput={textInput} value={value} />
        </div>

        <header className="mt-4 flex items-center gap-2 rounded-lg border-2 border-gray-100 p-3">
          <h3>
            <b className="mr-[5px] text-violet-500">{taskFilter().length}</b>
            tarefa(s) encontrada(s):
          </h3>
          <div className="flex items-center gap-2">
            <SearchTag content={value} />
            <SearchTag content={textInput ? textInput : "..."} />
          </div>
        </header>
      </main>
    </>
  );
}

export default Content;
