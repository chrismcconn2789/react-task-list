import { Task } from "@/types/task";

const EmptyTasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.length === 0 && (
        <div className="p-4 bg-[#18181C] rounded-xl">
          <h2 className="text-gray-100 text-lg text-center font-semibold">
            No current tasks
          </h2>
          <p className="text-gray-500 text-center text-xs">
            Add a new task to see your task list
          </p>
        </div>
      )}
    </div>
  );
};

export default EmptyTasks;
