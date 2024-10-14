import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, CircleX } from "lucide-react";
import { insertTask } from "../../store/reducers/tasks";
import { RootReducer } from "../../store";

import Input from "./Input";
import Select from "./Select";

export interface ModalProps {
  active: boolean;
  onClose: () => void;
}

function Modal(this: unknown, { active, onClose }: ModalProps) {
  const { listTask } = useSelector((state: RootReducer) => state.task);

  const dispatch = useDispatch();

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const inputTitle = form.elements[0] as HTMLInputElement;
    const inputDesc = form.elements[1] as HTMLInputElement;
    const inputCategory = form.elements[2] as HTMLInputElement;
    const inputCD = listTask.length;

    console.log(inputCD);

    dispatch(
      insertTask({
        cd: inputCD,
        title: inputTitle.value,
        category: inputCategory.value,
        status: "Pendente",
        desc: inputDesc.value,
      }),
    );

    form.reset();
    onClose();
  }

  return (
    <>
      <div
        className={` ${active ? "pointer-events-auto bg-gray-600/40 backdrop-blur-sm" : "pointer-events-none bg-gray-600/0"} absolute z-10 m-[-12px] flex h-full w-full items-center justify-center transition-all`}
      >
        <div
          className={` ${active ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-[-40%] opacity-0"} relative flex h-[40vh] w-[50vh] flex-col justify-between rounded-2xl bg-gray-100 p-4 shadow-lg transition-transform`}
        >
          <CircleX
            onClick={onClose}
            className="absolute right-3 top-3 h-7 w-7 cursor-pointer rounded-full p-1 text-red-400 hover:bg-gray-200"
          />
          <h2 className="py-4 pl-3 text-3xl font-bold text-violet-500">
            Adicione uma nova tarefa!
          </h2>
          <form
            onSubmit={(e) => addTask(e)}
            className={`space-y-2 p-2 transition-all`}
          >
            <Input placeholder="Tarefa" />
            <Input placeholder="Descrição" attributes="h-20 items-start" />
            <Select />
            <button
              type="submit"
              className="flex w-full items-center justify-between rounded-lg bg-violet-500 px-3 py-2 text-left font-bold text-white outline-none transition-all hover:bg-violet-600 hover:pr-5"
            >
              Adicionar tarefa
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
