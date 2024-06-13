import { Task } from "@/types/task";
import EmptyTasks from "./EmptyTasks";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  onUpdateTask,
  onDeleteTask,
}: {
  tasks: Task[];
  onUpdateTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}) => {
  return (
    <div className="w-full flex flex-col bg-[#18181C] rounded-xl p-8 gap-2">
      <EmptyTasks tasks={tasks} />
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
