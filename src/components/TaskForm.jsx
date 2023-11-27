
import { useState } from 'react'
import './TaskForm.css'






function TaskForm({ inAgregarTarea }) {


    const [nuevaTarea, setNuevaTarea] = useState('')


    function hacerClick() {
        if (nuevaTarea.trim() !== '') {
            inAgregarTarea(nuevaTarea)
            setNuevaTarea('')
        } else {
            alert("El campo esta vacío")
        }

    }


    return (

        <div className='form'>

            <h2>Ingresar tarea</h2>
            <input type="text"
                id="task" 
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)} />

            <button onClick={hacerClick} >Agregar</button>

        </div>



    )



}

export default  TaskForm 