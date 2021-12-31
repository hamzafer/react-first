import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";

//styles components popular
function App() {
  const name = 'Hamza;'
  const x = true;

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: '1',
        day: '1',
        reminder: false,
      },
      {
        id: 2,
        text: '2',
        day: '2',
        reminder: false,
      },
      {
        id: 3,
        text: '3',
        day: '3',
        reminder: false,
      },
    ]
  )

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // del task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder }
        : task))
  }

  //not html its JSX - dynamic JS expressions
  return (
    <div className="container">
      {/* only single element can be returned*/}
      <Header title='Task Tracker'
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      ></Header>
      {showAddTask && <AddTask onAdd={addTask}></AddTask>}
      {tasks.length > 0 ?
        (
          <Tasks tasks={tasks} onDelete={deleteTask}
            onToggle={toggleReminder}></Tasks>
        )
        :
        ('No Tasks !')
      }
    </div>
  );
}

export default App;
