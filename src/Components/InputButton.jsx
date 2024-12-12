// Issues : Submit button should be linked with return key

import { useState } from "react";

export default function InputButton() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  }

  return (
    <>
      <form className="inputform" onSubmit={(e) => handleSubmit(e)}>
        <p>Your to do list</p>
        <div className="inputarea">
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            className="inputbox"
          ></input>
          <button type="submit">Add</button>
        </div>
      </form>
      {taskList.map((task) => (
        <li>{task}</li>
      ))}
    </>
  );
}
