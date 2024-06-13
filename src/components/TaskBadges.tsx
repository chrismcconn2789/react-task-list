import { Task } from "@/types/task";
import { Badge } from "./ui/badge";

const TaskBadges = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-2 md:gap-8 mb-8 w-full">
      {tasks.length > 0 && (
        <Badge className="flex text-cyan-300 bg-[#18181C] justify-center rounded-lg px-4 py-2 hover:bg-[#121217]">
          {tasks?.filter((task: Task) => task.completed).length} complete tasks
        </Badge>
      )}
      {tasks.length > 0 && (
        <Badge className="flex text-gray-400 bg-[#18181C] justify-center rounded-lg px-4 py-2 hover:bg-[#121217]">
          {tasks?.filter((task: Task) => !task.completed).length} incomplete
          tasks
        </Badge>
      )}
      {tasks.length > 0 && (
        <Badge className="flex text-gray-200 bg-[#18181C] justify-center rounded-lg px-4 py-2 hover:bg-[#121217]">
          {tasks?.length} total tasks
        </Badge>
      )}
    </div>
  );
};

export default TaskBadges;
