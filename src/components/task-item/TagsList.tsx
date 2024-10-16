import { ElementType } from "react";

import IconTag from "./IconTag";
import {
  CircleAlert,
  CircleX,
  CircleDot,
  CircleDashed,
  CircleCheck,
} from "lucide-react";

export interface TagsListProps {
  categ: string;
  icon?: ElementType;
  color?: string;
}

function TagsList({ categ, icon, color }: TagsListProps) {
  // Define valores padrao
  let selectedIcon: ElementType;
  let selectedColor: string;

  switch (categ) {
    case "Importante":
      selectedIcon = CircleAlert;
      selectedColor = "text-red-500";
      break;
    case "Urgente":
      selectedIcon = CircleX;
      selectedColor = "text-yellow-500";
      break;
    case "Normal":
      selectedIcon = CircleDot;
      selectedColor = "text-blue-500";
      break;
    case "Pendente":
      selectedIcon = CircleDashed;
      selectedColor = "text-gray-500";
      break;
    case "Concluida":
      selectedIcon = CircleCheck;
      selectedColor = "text-emerald-500";
      break;
    default:
      selectedIcon = icon || CircleDot;
      selectedColor = color || "text-gray-500";
      break;
  }

  return (
    <>
      <li className="flex items-center gap-1 rounded-full bg-white pb-1 pl-1 pr-2 pt-[2px] text-[10px] text-gray-600 sm:text-[14px]">
        <IconTag
          icon={selectedIcon}
          color={`h-4 w-4 mb-[-1px] ${selectedColor}`}
        />
        {categ}
      </li>
    </>
  );
}

export default TagsList;
