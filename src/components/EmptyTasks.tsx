import { Task } from "@/types/task";

const EmptyTasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {tasks.length === 0 && (
        <div className="rounded-xl bg-card p-4">
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
