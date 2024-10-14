import {
  CircleAlert,
  CircleCheck,
  CircleX,
  CircleDot,
  CircleDashed,
  CircleMinus,
} from "lucide-react";
import { ElementType } from "react";
import IconTag from "../task-item/IconTag";
import { useDispatch, useSelector } from "react-redux";
import { filterTag } from "../../store/reducers/filter";
import { RootReducer } from "../../store";

export interface TaskCardProps {
  control: "category" | "status" | "todas";
  taskType: string;
  taskCounter: number;
}

function TaskCard({ control, taskType, taskCounter }: TaskCardProps) {
  const { filter } = useSelector((state: RootReducer) => state);

  const dispatch = useDispatch();
  const filterByTag = () => {
    dispatch(
      filterTag({
        textInput: "",
        control: control,
        value: taskType,
      }),
    );
  };

  function checkActive() {
    const sameControl = filter.control === control;
    const sameValue = filter.value === taskType;

    return sameControl && sameValue;
  }
  const activeCard = checkActive();

  // Define valores padrao
  let selectedIcon: ElementType;

  switch (taskType) {
    case "Importante":
      selectedIcon = CircleAlert;
      break;
    case "Urgente":
      selectedIcon = CircleX;
      break;
    case "Normal":
      selectedIcon = CircleDot;
      break;
    case "Pendente":
      selectedIcon = CircleDashed;
      break;
    case "Concluida":
      selectedIcon = CircleCheck;
      break;
    default:
      selectedIcon = CircleMinus;
      break;
  }

  return (
    <>
      <article
        data-active={activeCard}
        onClick={filterByTag}
        className={` ${activeCard ? "border-violet-500" : "border-transparent"} mt-2 flex cursor-pointer items-center justify-between rounded-lg border-2 bg-white px-3 py-2 transition-all hover:ps-4`}
      >
        <h2
          className={` ${activeCard ? "text-violet-500" : "text-gray-400"} text-3xl font-semibold text-gray-500`}
        >
          {taskCounter}
        </h2>

        <div className="flex flex-col items-end gap-0">
          <h4 className="text-xs text-gray-500">{taskType}</h4>
          <IconTag
            icon={selectedIcon}
            color={`
                            ${activeCard ? "text-violet-500" : "text-gray-400"}
                            h-4 w-4 my-1`}
          />
        </div>
      </article>
    </>
  );
}

export default TaskCard;
