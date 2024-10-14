import { CircleX } from "lucide-react";

export interface NoResultProps {
  empty?: boolean;
  textInput?: string;
  value: string;
}

function NoResult({ empty, textInput, value }: NoResultProps) {
  return (
    <>
      <div
        className={` ${empty ? "visible" : "invisible"} flex items-center gap-1 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-500 transition-all`}
      >
        <CircleX className="mr-1 h-5 w-5 text-violet-500" />
        Nenhuma tarefa
        <b className="text-violet-500">
          {textInput}&nbsp;
          <span className="font-normal text-gray-500">em</span>
        </b>
        <i className="font-bold text-gray-500">{value}</i>
      </div>
    </>
  );
}

export default NoResult;
