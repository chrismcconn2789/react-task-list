import { CirclePlus, TriangleAlert } from "akar-icons";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

const TaskInput = ({
  onAddTask,
}: {
  onAddTask: (taskText: string) => void;
}) => {
  const [taskText, setTaskText] = useState<string>("");

  const { toast } = useToast();

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalizedTaskText = taskText.trim();

    if (normalizedTaskText !== "") {
      onAddTask(normalizedTaskText);
      setTaskText("");
    } else {
      toast({
        title: (
          <div className="flex flex-row gap-2 items-center">
            <TriangleAlert
              strokeWidth={2}
              size={16}
              className="text-amber-300"
            />
            <span className="text-gray-100">Enter a name to add a task</span>
          </div>
        ),
        duration: 1500,
      });
    }
  };

  return (
    <form
      className="w-full rounded-xl bg-card p-4 md:p-8"
      onSubmit={handleAddTask}
    >
      <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <Label
          htmlFor="item"
          className="mb-2 text-xs font-light text-gray-100 md:text-base"
        >
          Task Name
        </Label>
        <Input
          id="item"
          type="text"
          name="item"
          className="text-base text-gray-100 border-cyan-300/50 focus-visible:ring-cyan-600"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add your next task"
          maxLength={40}
          required
        />
      </div>
      <Button
        type="submit"
        variant="default"
        className="text-gray-100 bg-cyan-600 hover:bg-cyan-800 gap-2"
        aria-label="Add Task"
      >
        <CirclePlus strokeWidth={2} size={20} className="size-4 md:size-6" />
        <span className="font-light">Add Task</span>
      </Button>
      </div>
    </form>
  );
};

export default TaskInput;
