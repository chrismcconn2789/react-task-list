import { Task } from "@/types/task";
import { Button } from "./ui/button";
import { Circle, CircleCheckFill, Cross } from "akar-icons";

const TaskCard = ({
  task,
  onUpdateTask,
  onDeleteTask,
}: {
  task: Task;
  onUpdateTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}) => {
  return <div className="flex items-center p-2 justify-between bg-[#121217] rounded-xl my-1">
  <div className="flex items-center">
    <Button
      className="bg-transparent hover:bg-transparent gap-2"
      onClick={() => onUpdateTask(task.id)}
      tabIndex={0}
      aria-label="Check/Uncheck Task"
    >
      {task.completed ? (
        <CircleCheckFill className="text-cyan-300 outline-cyan-500" strokeWidth={2} size={20} />
      ) : (
        <Circle className="text-cyan-300 outline-cyan-500" strokeWidth={2} size={20} />
      )}
      <span
        className={`${
          task.completed
            ? "text-xs md:text-lg text-gray-100 font-light px-1 line-through opacity-40"
            : "text-xs  md:text-lg text-gray-100 font-light px-1"
        }`}
      >
        {task.item}
      </span>
    </Button>
  </div>
  <div>
    <Button
      className="flex gap-2 bg-transparent text-red-500 h-8 md:h-10 hover:bg-red-800/20"
      variant="destructive"
      onClick={() => onDeleteTask(task.id)}
      aria-label="Delete Task"
      tabIndex={0}
    >
      <Cross strokeWidth={2} size={16} className="md:size-4 size-3" />
    </Button>
  </div>
</div>;
};

export default TaskCard;
