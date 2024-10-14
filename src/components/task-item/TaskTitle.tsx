import { ElementType } from "react";

import IconTag from "./IconTag";

export interface TaskTitleProps {
  onClick: () => void;
  title: string;
  icon: ElementType;
  attribute?: string;
}

function TaskTitle({ onClick, title, icon, attribute }: TaskTitleProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="mb-3 flex items-center gap-2 hover:cursor-pointer"
      >
        <IconTag icon={icon} color="text-gray-400" />
        <h2
          className={`select-none text-2xl font-bold text-violet-500 ${attribute}`}
        >
          {title}
        </h2>
      </div>
    </>
  );
}

export default TaskTitle;
