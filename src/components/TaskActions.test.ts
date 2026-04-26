import { describe, expect, it } from "vitest";
import {
  createTask,
  removeTaskById,
  toggleTaskCompletion,
} from "./TaskActions";

describe("TaskActions helpers", () => {
  it("creates a trimmed task", () => {
    const task = createTask("  Write tests  ");

    expect(task.item).toBe("Write tests");
    expect(task.completed).toBe(false);
    expect(task.id).toBeTypeOf("string");
  });

  it("removes a task by id and returns the removed task", () => {
    const tasks = [
      { id: "1", item: "One", completed: false },
      { id: "2", item: "Two", completed: true },
    ];

    const { nextTasks, removedTask } = removeTaskById(tasks, "2");

    expect(nextTasks).toEqual([{ id: "1", item: "One", completed: false }]);
    expect(removedTask).toEqual({ id: "2", item: "Two", completed: true });
  });

  it("toggles only the matching task without mutating the input array", () => {
    const tasks = [
      { id: "1", item: "One", completed: false },
      { id: "2", item: "Two", completed: true },
    ];

    const nextTasks = toggleTaskCompletion(tasks, "1");

    expect(nextTasks).toEqual([
      { id: "1", item: "One", completed: true },
      { id: "2", item: "Two", completed: true },
    ]);
    expect(tasks).toEqual([
      { id: "1", item: "One", completed: false },
      { id: "2", item: "Two", completed: true },
    ]);
    expect(nextTasks[0]).not.toBe(tasks[0]);
  });
});
