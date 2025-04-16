import { useState, useEffect } from "react";

function App() {

  const [tasks, setTasks] = useState({});
  const [task, setTask] = useState(null);
  const [status, setStatus] = useState('pending');
  const [activeEditPart, setActiveEditPart] = useState(null)


  const handleAddTask = () => {

    if (!task) {
      return
    }

    let newTask = { name: task, state: status };

    let tempTasks = tasks;
    tempTasks[new Date().getTime()] = newTask;
    setTasks(tempTasks);
    console.log(tasks);

  }

  const handleDeleteTask = (id) => {

    let tempTasks = tasks;
    let final = Object.entries(tempTasks).filter((taskObj) => taskObj[0] !== id);
    setTasks(Object.fromEntries(final));

  }

  const handleUpdateTask = (id) => {
    
  }

  const handleConfirmUpdateTask = (id) => {
    
  }

  const handleCancelUpdateTask = (id) => {
    
  }

  const onTaskChange = (e) => { setTask(e.target.value) }

  const onStatusChange = (e) => { setStatus(e.target.value) }

  return (
    <>
      <div className="w-full h-screen mb-20 bg-gray-200">

        <h1 className="text-5xl font-bold text-center pt-5">ToDo</h1>

        {/* Input Box */}
        <div className="flex justify-center">
          <div className="relative w-[90vw] h-[6vh] flex justify-center items-center border-1 rounded-lg mt-5">
            <input type="text" name="task" className="absolute bg-white w-full h-full rounded-lg pl-3 outline-0" placeholder="Add task..." onChange={onTaskChange} />

            <select name="task-status" id="task-status" className="absolute h-[80%] right-28 rounded-lg px-3 bg-gray-400 outline-0" onChange={onStatusChange}>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>

            <button onClick={handleAddTask} className="absolute right-0 bg-green-300 px-5 h-full rounded-r-lg">Add Task</button>
          </div>
        </div>

        <h3 className="text-3xl mt-10 text-center font-medium">Your tasks :</h3>

        {/* Task Viewer */}
        <div className="w-full flex justify-center mt-5">
          <div className="w-[90vw] h-fit bg-gray-300 rounded-lg text-center p-8 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {tasks && Object.entries(tasks).map((i, index) => (
              <div key={index} className="relative w-[100%]  p-5 bg-white shadow-md rounded-lg transition-all hover:shadow-xl/20">
                {activeEditPart === index ? <>
                  <input type="text" name="task" onChange={onTaskChange} className="text-center text-2xl font-medium mb-20 outline-0" placeholder="Enter the new task..." />
                  <select name="task-status" id="task-status" onChange={onStatusChange} className="absolute bottom-15 left-1/3 px-3 py-1 bg-gray-400 rounded-lg">
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>

                  <button className="absolute bottom-0 left-0 right-1/2 py-4 text-white bg-gray-600 rounded-bl-lg" onClick={() => handleConfirmUpdateTask(i[0])}>
                    Confirm
                  </button>
                  <button className="absolute bottom-0 left-1/2 right-0 py-4 text-white bg-gray-700 rounded-br-lg" onClick={() => handleCancelUpdateTask(i[0])}>
                    Cancel
                  </button>
                </> : <>
                  <h1 className="text-center text-2xl font-medium mb-18">
                    {i[1].name}
                  </h1>
                  <div className="absolute bottom-15 left-1/3">
                    Status: {i[1].state}
                  </div>

                  <button className="absolute bottom-0 left-0 right-1/2 py-4 text-white bg-gray-600 rounded-bl-lg" onClick={() => handleUpdateTask(i[0])}>
                    Update
                  </button>
                  <button className="absolute bottom-0 left-1/2 right-0 py-4 text-white bg-gray-700 rounded-br-lg" onClick={() => handleDeleteTask(i[0])}>
                    Delete
                  </button>
                </>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;