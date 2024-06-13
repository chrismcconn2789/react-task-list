import { Task } from "@/types/task";
import { v4 as uuidv4 } from "uuid";

export const addTask = (
  taskText: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  toast: (message: string) => void
) => {
  if (taskText === "") {
  }

  const newTask: Task = {
    id: uuidv4(),
    item: taskText,
    completed: false,
  };

  setTasks([...tasks, newTask]);
  toast(`${taskText} added`);
};

export const deleteTask = (
  taskId: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void,
  toast: (message: string) => void
) => {
  const removedTask = tasks.find((item: Task) => item.id === taskId);
  setTasks(tasks.filter((item: Task) => item.id !== taskId));
  toast(`${removedTask?.item} removed`);
};

export const updateTask = (
  taskId: string,
  tasks: Task[],
  setTasks: (tasks: Task[]) => void
) => {
  setTasks(
    tasks.map((task: Task) =>
      task.id === taskId
        ? { ...task, completed: (task.completed = !task.completed) }
        : task
    )
  );
};
