import { CircleCheck, Info, ReactFill, TrashCan } from "akar-icons";
import { ReactElement } from "react";
import Footer from "./components/Footer";
import { addTask, deleteTask, updateTask } from "./components/TaskActions";
import TaskBadges from "./components/TaskBadges";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Toaster } from "./components/ui/toaster";
import { useToast } from "./components/ui/use-toast";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Task } from "./types/task";

function App() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const { toast } = useToast();

  const handleAddTask = (taskText: string) =>
    addTask(taskText, tasks, setTasks, (message: string) => {
      toast({
        title: (
          <div className="flex flex-row gap-2 items-center">
            <Info strokeWidth={2} size={16} className="text-cyan-300" />
            <span className="text-gray-100">Task Added</span>
          </div>
        ) as string & ReactElement,
        description: `${message}`,
        duration: 1500,
      });
    });

  const handleDeleteTask = (taskId: string) =>
    deleteTask(taskId, tasks, setTasks, (message: string) => {
      toast({
        title: (
          <div className="flex flex-row gap-2 items-center">
            <TrashCan strokeWidth={2} size={16} className="text-red-500" />
            <span className="text-gray-100">Task Removed</span>
          </div>
        ) as string & ReactElement,
        description: `${message}`,
        duration: 1500,
      });
    });
  const handleUpdateTask = (taskId: string) => {
    updateTask(taskId, tasks, setTasks);
    if (tasks.every((task) => task.completed)) {
      toast({
        title: (
          <div className="flex flex-row gap-2 items-center">
            <CircleCheck strokeWidth={2} size={16} className="text-green-500" />
            <span className="text-gray-100 font-light">
              All tasks completed
            </span>
          </div>
        ) as string & ReactElement,
        duration: 1500,
      });
    }
  };

  return (
    <div className="dark font-deca max-w-4xl m-auto flex flex-col items-center justify-center p-2 gap-4 md:gap-8">
      <Toaster />
      <div className="w-full flex flex-col gap-8">
        <div className="flex justify-between px-8">
          <div className="flex flex-row">
            <h1 className="text-5xl text-gray-100">tas</h1>
            <span className="text-5xl text-cyan-300">ks.</span>
          </div>
          <div>
            <ReactFill size={50} strokeWidth={2} className="text-cyan-300" />
          </div>
        </div>
        <TaskInput onAddTask={handleAddTask} />
      </div>
      <TaskList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskBadges tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
