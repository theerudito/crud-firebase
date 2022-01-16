import {saveTask, getTask, onSnapshot, collection, db, eliminarTarea, obtenerTarea, actualizarTarea} from "./firebase.js"

const contenedorTareas = document.getElementById("tasks-container")
const taskForm = document.getElementById("task-form")

let editarEstado = false
let id = ""

window.addEventListener("DOMContentLoaded", async () =>{

onSnapshot(collection(db, "task"), (querySnapshot)=> {
  
  let html = ""

  querySnapshot.forEach(doc => {
     const task = doc.data()
     html += `
           <div>
             <h3>${task.title}</h3>
             <p>${task.description}</p>
             <button class="btn-delete" data-id="${doc.id}">Borrar</button>
             <button class="btn-edit" data-id="${doc.id}">Editar</button>
           </div>`
    console.log(doc.data())
  })
 
  contenedorTareas.innerHTML = html

  const botonesEliminar = contenedorTareas.querySelectorAll(".btn-delete")

  botonesEliminar.forEach(btn => {
    btn.addEventListener("click", ({target: {dataset}}) =>{
          eliminarTarea(dataset.id);
    })
  })

  const btnsEdit = contenedorTareas.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {

          const doc = await obtenerTarea(e.target.dataset.id);
          const task = doc.data(); // convertir datos

          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;

          editarEstado = true
          id = e.target.dataset.id

          taskForm["btn-task-save"].innerText = "Actualizar"
    })
  })

})

})

taskForm.addEventListener("submit", (e) =>{
  e.preventDefault()

  const title = taskForm["task-title"]
  const description = taskForm["task-description"]
  
  if (!editarEstado) {
    saveTask(title.value, description.value)
  } else {
    
    actualizarTarea(id,{title: title.value, description: description.value
    })

    editarEstado = false
  }
  
  taskForm.reset()
})

