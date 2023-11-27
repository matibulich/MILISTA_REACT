
import React, { useEffect, useState } from 'react'
import './App.css'
import  TaskForm  from './TaskForm.jsx';
import TaskLists from './TaskList.jsx';





function App() {
  const [tareas, setTareas] = useState([]); // tareas empieza con el array vacío. (agregarTarea) le suma una nueva tarea 




  function agregarTarea(nuevaTarea) {
    setTareas([...tareas, { id: Date.now(), tarea: nuevaTarea, realizada: false }]); // con el elemento de propagacion(...) seCrea un nuevo array con las tareas ya existentes, y agrego (nuevaTarea) 
  }

  function borrarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id)); //se crea un nuevo array excluyendo la tarea que tiene el id pasado.
  }

  function tareaRealizada(id) {
    setTareas(tareas.map((tarea) => (tarea.id === id ? { ...tarea, realizada: !tarea.realizada } : tarea))); //si es verdadero cambia al opuesto !(true/false), si es falso lo deja como estaba(tarea)
  }





  useEffect(() => {

    localStorage.setItem("tareas", JSON.stringify(tareas))
  }, [tareas])


 



  return (
    <div>
      <TaskForm inAgregarTarea={agregarTarea} />     {/* llamamos a la funcion pasada x param y le pasamos (agregarTarea) */}
      <TaskLists tareas={tareas} inBorrarTarea={borrarTarea} inTareaRealizada={tareaRealizada} />




    </div>


  )



}

export default App
