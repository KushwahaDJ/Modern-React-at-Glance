import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import { useState , useEffect} from 'react'


function App() {
  const title = 'Task tracker'
  let [showAddTask, setShowAddTask] = useState(false)
//   const [tasks, setTasks] = useState([
//     {
//         id: 1,
//         text: "Doctors Appointment",
//         day: "Feb 5th at 2:30pm",
//         reminder: true
//       },
//       {
//         id: 2,
//         text: "Meeting at School",
//         day: "Feb 6th at 1:30pm",
//         reminder: true
//       }
// ]);
const [tasks, setTasks] = useState([]);
  // fetch tasks
  useEffect(() => {
    const getTask = async() =>{
        const fetchTaskFromServer = await fetchData();
        setTasks(fetchTaskFromServer);
    }
    getTask();
  }, [])

  // fetch tasks
  const fetchData = async()=>{
    const res =  await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data;
  }

  // taggle add task form

  function tagleAddTask(){
    setShowAddTask(showAddTask = !showAddTask)
  }

  // Delete the task
  const  deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    // console.log(id);
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  // Add task
  const addTask = async (task) => {
    // const id = Math.floor(Math.random()*10000 + 1);
    // const newTask = {id, ...task}
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  }
  return (
    <Router>
    <div className="App">
      <Route path='/' exact render={(props)=>(
        <>
        {showAddTask && <AddTask addTask={addTask}/>}
      <Header title={title} tagleAddTask={tagleAddTask} shoAdd={showAddTask}/>
      <Tasks tasks = {tasks} onClick={deleteTask}/>
        </>
      )} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
