// Issues : Submit button should be linked with return key

import { useState } from "react";

export default function InputButton() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTaskList([...taskList, task]);
    console.log(taskList);
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Your to do list</p>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
