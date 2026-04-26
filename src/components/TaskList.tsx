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
    <section
      className="w-full flex flex-col gap-2 rounded-xl bg-card p-8"
      aria-label="Task list"
    >
      <EmptyTasks tasks={tasks} />
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </section>
  );
};

export default TaskList;
