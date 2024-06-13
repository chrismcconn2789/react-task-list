import { CirclePlus, TriangleAlert } from "akar-icons";
import { ReactElement, useState } from "react";
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

  const handleAddTask = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      onAddTask(taskText);
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
        ) as string & ReactElement,
        duration: 1500,
      });
    }
  };

  return (
    <div className="w-full p-8 flex flex-col gap-8 bg-[#18181C] rounded-xl p-4">
      <div className="flex flex-col gap-1">
        <Label
          htmlFor="item"
          className="text-xs md:text-md text-gray-100 font-light mb-2"
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
          onKeyDown={(e) => (e.key === "Enter" ? handleAddTask(e) : null)}
          aria-label="Task Input"
          maxLength={40}
          required
        />
      </div>
      <Button
        type="button"
        variant="default"
        className="text-gray-100 bg-cyan-600 hover:bg-cyan-800 gap-2"
        tabIndex={0}
        onClick={handleAddTask}
        aria-label="Add Task"
      >
        <CirclePlus strokeWidth={2} size={20} className="size-4 md:size-6" />
        <span className="font-light">Add Task</span>
      </Button>
    </div>
  );
};

export default TaskInput;
