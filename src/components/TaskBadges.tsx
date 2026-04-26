import { Task } from "@/types/task";
import { Badge } from "./ui/badge";

const TaskBadges = ({ tasks }: { tasks: Task[] }) => {
  const { completedTasks, incompleteTasks } = tasks.reduce(
    (counts, task) => ({
      completedTasks: counts.completedTasks + (task.completed ? 1 : 0),
      incompleteTasks: counts.incompleteTasks + (task.completed ? 0 : 1),
    }),
    { completedTasks: 0, incompleteTasks: 0 }
  );

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 flex w-full flex-col gap-2 md:flex-row md:justify-center md:gap-8">
      <Badge className="flex justify-center rounded-lg bg-card px-4 py-2 text-cyan-300 hover:bg-secondary">
        {completedTasks} complete tasks
      </Badge>
      <Badge className="flex justify-center rounded-lg bg-card px-4 py-2 text-gray-400 hover:bg-secondary">
        {incompleteTasks} incomplete tasks
      </Badge>
      <Badge className="flex justify-center rounded-lg bg-card px-4 py-2 text-gray-200 hover:bg-secondary">
        {tasks.length} total tasks
      </Badge>
    </div>
  );
};

export default TaskBadges;
