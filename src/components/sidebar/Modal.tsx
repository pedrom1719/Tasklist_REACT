import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, CircleX, SquareDashed } from "lucide-react";
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
    let inputCD = listTask.length;

    if (listTask.find((index) => index.cd === inputCD)) {
      inputCD += 1;
    }

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
        className={` ${active ? "pointer-events-auto bg-gradient-to-b from-gray-600/40 to-gray-600/70 backdrop-blur-[2px]" : "pointer-events-none bg-gray-600/0"} absolute z-10 m-[-12px] flex h-full w-full items-center justify-center transition-all`}
      >
        <div
          className={` ${active ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-[-40%] opacity-0"} relative flex min-h-[40vh] w-[55vh] max-w-[90%] flex-col justify-between rounded-2xl bg-gray-100 p-3 shadow-lg transition-transform`}
        >
          <CircleX
            onClick={onClose}
            className="absolute right-8 top-[30px] h-7 w-7 cursor-pointer rounded-full bg-gray-50 p-1 text-gray-600 transition-colors hover:text-red-400"
          />
          <h2 className="flex items-center gap-2 rounded-t-xl bg-gray-200/90 px-5 py-4 text-2xl font-bold text-violet-500">
            <SquareDashed className="text-gray-400" />
            Nova Tarefa
          </h2>

          <p className="mb-3 mt-2 p-3 text-xs text-gray-500">
            <b className="text-base text-gray-600">Adicionando nova tarefa:</b>
            <br />
            Digite as informacoes para inserir na lista de tarefas.
          </p>
          <form
            onSubmit={(e) => addTask(e)}
            onReset={onClose}
            className={`space-y-2 transition-all`}
          >
            <Input placeholder="Tarefa" />
            <Input placeholder="Descrição" attributes="h-20 items-start" />
            <Select />
            <div className="!mt-3 flex gap-1 border-t-2 border-gray-200/70 pt-3">
              <button
                type="reset"
                className="w-[33%] rounded-lg bg-gray-200 px-3 py-2 text-left font-semibold text-gray-400 outline-none transition-all hover:text-red-400"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex w-[67%] items-center justify-between rounded-lg bg-violet-500 px-3 py-2 text-left font-semibold text-white outline-none transition-all hover:bg-violet-600"
              >
                Adicionar tarefa
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
