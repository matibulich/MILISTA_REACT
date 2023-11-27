import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './TaskList.css'

//Mostramos las tareas renderizxadas

function TaskLists({ tareas, inBorrarTarea, inTareaRealizada }) {





  return (

   
    
    <div className='mostrar_items'>
    <h3>Listado de Tareas:</h3>
      <ul>
        {tareas.map((tarea) => (
          <li className={tarea.realizada ? 'tarea_realizada' : 'tarea_no_realizada'} key={tarea.id}>
            {tarea.tarea}
            <div className='iconos'>
            <FontAwesomeIcon icon={faCircleCheck} className='tilde' onClick={() => inTareaRealizada(tarea.id)} />
            <FontAwesomeIcon icon={faCircleXmark} className='cruz' onClick={() => inBorrarTarea(tarea.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>


  );


}

export default TaskLists;
