import type { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/types/task";

type TaskSetter = Dispatch<SetStateAction<Task[]>>;

export const createTask = (taskText: string): Task => ({
  id: uuidv4(),
  item: taskText.trim(),
  completed: false,
});

export const removeTaskById = (tasks: Task[], taskId: string) => {
  const removedTask = tasks.find((task) => task.id === taskId);

  return {
    nextTasks: tasks.filter((task) => task.id !== taskId),
    removedTask,
  };
};

export const toggleTaskCompletion = (tasks: Task[], taskId: string) =>
  tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );

export const addTask = (
  taskText: string,
  setTasks: TaskSetter,
  toast: (message: string) => void
) => {
  const normalizedTaskText = taskText.trim();

  if (!normalizedTaskText) {
    return;
  }

  const newTask = createTask(normalizedTaskText);

  setTasks((previousTasks) => [...previousTasks, newTask]);
  toast(`${newTask.item} added`);
};

export const deleteTask = (
  taskId: string,
  setTasks: TaskSetter,
  toast: (message: string) => void
) => {
  let removedTaskLabel = "Task removed";

  setTasks((previousTasks) => {
    const { nextTasks, removedTask } = removeTaskById(previousTasks, taskId);
    if (removedTask) {
      removedTaskLabel = `${removedTask.item} removed`;
    }

    return nextTasks;
  });

  toast(removedTaskLabel);
};

export const updateTask = (taskId: string, setTasks: TaskSetter) => {
  setTasks((previousTasks) => toggleTaskCompletion(previousTasks, taskId));
};
