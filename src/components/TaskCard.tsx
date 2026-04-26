import { Task } from "@/types/task";
import { Circle, CircleCheckFill, Cross } from "akar-icons";
import { Button } from "./ui/button";

const TaskCard = ({
  task,
  onUpdateTask,
  onDeleteTask,
}: {
  task: Task;
  onUpdateTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}) => {
  const completionLabel = task.completed ? "Mark as incomplete" : "Mark as complete";

  return (
    <div className="my-1 flex items-center justify-between rounded-xl bg-secondary px-2 py-2">
      <div className="flex items-center">
        <Button
          className="gap-2 bg-transparent hover:bg-transparent"
          onClick={() => onUpdateTask(task.id)}
          aria-label={`${completionLabel}: ${task.item}`}
        >
          {task.completed ? (
            <CircleCheckFill
              className="text-cyan-300 outline-cyan-500"
              strokeWidth={2}
              size={20}
            />
          ) : (
            <Circle
              className="text-cyan-300 outline-cyan-500"
              strokeWidth={2}
              size={20}
            />
          )}
          <span
            className={
              task.completed
                ? "px-1 text-xs font-light text-gray-100 line-through opacity-40 md:text-lg"
                : "px-1 text-xs font-light text-gray-100 md:text-lg"
            }
          >
            {task.item}
          </span>
        </Button>
      </div>
      <div>
        <Button
          className="flex h-8 gap-2 bg-transparent text-red-500 hover:bg-red-800/20 md:h-10"
          variant="destructive"
          onClick={() => onDeleteTask(task.id)}
          aria-label={`Delete task: ${task.item}`}
        >
          <Cross strokeWidth={2} size={16} className="size-3 md:size-4" />
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
