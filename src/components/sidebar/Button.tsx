import { CirclePlus } from "lucide-react";

export interface ButtonProps {
  text?: string;
  icon?: boolean;
  attributes?: string;
  onClick: () => void;
}

function Button({ text, icon, attributes, onClick }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={` ${attributes} flex items-center justify-center gap-2 rounded-lg bg-violet-500 px-2 py-4 text-sm font-bold text-white transition-all hover:gap-3 hover:bg-violet-600`}
      >
        {text}
        {icon && <CirclePlus />}
      </button>
    </>
  );
}

export default Button;
