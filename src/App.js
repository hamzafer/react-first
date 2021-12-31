import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDetails from "./components/TaskDetails";

//styles components popular
function App() {
  const name = 'Hamza;'
  const x = true;

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Walk',
        day: 'Saturday',
        reminder: false,
        details: 'Burn 500 Calories'
      },
      {
        id: 2,
        text: 'Cheat Day',
        day: 'Sunday',
        reminder: false,
        details: 'Burger/Pizza'
      },
      {
        id: 3,
        text: 'Cancel Subscription',
        day: 'Wednesday',
        reminder: false,
        details: 'Slides go presentation'
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
    <Router>
      <div className="container">
        {/* only single element can be returned*/}

        <Header title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}>
        </Header>
        <Routes>
          <Route path='/' element={
            <>
              {showAddTask && <AddTask onAdd={addTask}></AddTask>}

              {tasks.length > 0 ?
                (
                  <Tasks tasks={tasks} onDelete={deleteTask}
                    onToggle={toggleReminder}></Tasks>
                )
                :
                ('No Tasks !')
              }
            </>
          }></Route>

          <Route path='/about' element={<About></About>}></Route>
          
          <Route path='/task/:id' element={<TaskDetails
          tasks={tasks}
          >
          </TaskDetails>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
