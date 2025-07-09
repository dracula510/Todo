import React, { useState, useEffect } from 'react'
import classes from './Todo.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Light from '../Asset/Light.png';
import Moon from '../Asset/Moon.png';
import Search from '../Asset/Search.png';
import Trash from '../Asset/trash.png';
import Up from '../Asset/Up.png';
import Down from '../Asset/Down.png';
import Plus from '../Asset/Plus.svg';







const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [on, setOn] = useState(true);
    const [note, setNote] = useState(false);
    const [isOn, setIsDark] = useState(true)
    // const [open, setOpen] = useState(true);
    // const [close, setClose] = useState(true);



    useEffect(() => {
        document.body.classList.add('body');
    }, [])


    const openMe = () => {
        setNote(true);
    }

    const closeMe = () => {
        setNote(false)
    }


    const lightOn = () => {
        setIsDark(prevState => !prevState)
    }

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(e){
        if(newTask.trim() !== ""){
            e.preventDefault();
            setTasks(t => [...tasks, newTask]);
            setNewTask("")
        }

        setNote(false)
    }

    function clickMe(){
      setOn(prevState => !prevState);
    }

    function deleteTask(index){ 
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    function moveTaskDown(index){
         if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }


    return(
        <div className={classes.body} data-theme={isOn ? 'light' : 'dark'}>

        <div className={classes.todoList}>
            <h1>TODO LIST</h1>

            <form>
                <div className={classes.Search}>
                 <img src={Search} />
                 <input type='search' placeholder='Search note...' onClick={(e) =>   e.preventDefault()} />
                </div>

                <div className={classes.Span}>
                <Dropdown>
                 <Dropdown.Toggle variant="danger" id="dropdown-basic-function" className={classes.Dropdown}>All </Dropdown.Toggle>                                             

                   <Dropdown.Menu className={classes.Dropdownmenu}>
                     <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Complete</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Incomplete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <img src={isOn ? Moon : Light} onClick={lightOn} />
                </div>

               <div className={classes.onlyMe} onClick={openMe}>
                  <p>New Note</p>
                  <img src={Plus} />
               </div>
            </form>

            <ol>
                {tasks.map((task, index) =>
                    <div>
                    <li key={index}>
                        <div className={classes.Text}>
                          <input type='checkbox' id={index}/>
                          <label className={classes.text} onClick={clickMe} htmlFor={index}>{task}</label>
                        </div>

                        <div className={classes.ControlBtn}>
                          <img className={classes.deleteButton} src={Trash} onClick={() => deleteTask(index)}/>
                          <img className={classes.moveButton} src={Up} onClick={() => moveTaskUp(index)}/>
                          <img className={classes.moveButton} src={Down} onClick={() => moveTaskDown(index)}/>
                        </div>
                    </li>
                    <div className={classes.Border}></div>
                    </div>             
                )}
            </ol>
  
            <div className={classes.Add} onClick={openMe}>
                <img src={Plus} />
            </div>

            {note === true && (
            <div className={classes.Tododinput}>
                <h2>NEW NOTE</h2>
                <input type='text' value={newTask} onChange={handleInputChange} placeholder='New note ...' />

                <div className={classes.Btn}>
                    <button onClick={closeMe}>CANCEL</button>
                    <button onClick={addTask}>APPLY</button>
                </div>
            </div>
            )}
        </div>
        </div>
    );
}

export default Todo;