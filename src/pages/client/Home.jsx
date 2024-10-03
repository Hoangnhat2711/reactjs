import React, { useState } from 'react';

function Home(props) {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [indexEdit, setIndexEdit] = useState(null);
    const [taskEdit, setTaskEdit] = useState("");
    const addTask = () => {
        const newTask = {
            task: task,
            status: false
        }
        setTodo([...todo, newTask]);
        setTask("");
    }
    
    const removeTask = (index) => {       
        const oldTask = [...todo];
        oldTask.splice(index, 1);
        setTodo(oldTask);
    }

    const handleEdit = (value, index) => {
              setIndexEdit(index);
              setTaskEdit(value);
    }
    const updateTask = () => {
        const oldTask = [...todo];
        oldTask[indexEdit].task = taskEdit;
        setTodo(oldTask);
        setIndexEdit(null);
    }
    return (
        <div>
            <h1 className='text-center my-2'>To Do List </h1>
            <div className='container'>
                <div class="d-flex">
                    <input onChange={(e) => setTask(e.target.value)} value={task} class="form-control me-2" type="search" placeholder="Enter your task name..." aria-label="Search" />
                    <button onClick={addTask} class="btn btn-outline-success text-nowrap" type="submit">Add Task</button>
                </div>

                {todo.map((element, index) => (
                    <div className={`d-flex justify-content-between p-2 align-items-center rounded-3 mt-3 ${index == indexEdit ? "bg-black text-white" : " bg-info-subtle"}`}>
                        <div>{index + 1}</div>
                        {
                            index == indexEdit ? ( <div>
                                <input type="text" value={taskEdit} onChange={(e) => setTaskEdit(e.target.value)} />
                            </div>) : (  <div>{element.task}</div>)
                        }
                        <div>
                            {
                                index == indexEdit ? (<>
                                <button type="button" onClick={updateTask} class="btn btn-success"><i class="fa-solid fa-circle-plus"></i></button>
                                <button type="button" onClick={() => setIndexEdit(null)} class="btn btn-info ms-2"><i class="fa-solid fa-xmark"></i></button>
                                </>) : (      
                                    <button onClick={() => handleEdit(element.task,index)} type="button" class="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i></button>)
                            }             
                            <button onClick={() => removeTask(index)} type="button" class="btn btn-danger ms-2"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;