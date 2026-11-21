import {useEffect, useState} from "react";
import Task from "./Task";
import styles from "./Wrap.module.css"


export default function Wrap() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [doneTask, setDone] = useState(0)

    function onChange(e) {
        setInputValue(e.target.value)
    }


    
    function handleSubmit(e) {
        e.preventDefault()
        if (!inputValue.trim()) return;
        setItems([...items, {
            id: crypto.randomUUID(),
            text: inputValue,
            isDone: false,
        }]);
        setInputValue('');
    }

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleDoneTask = (id) => { 
            setItems(items.map(item => 
                item.id === id ?( 
                item.isDone ? ( { ...item, isDone: false })  
                    :{ ...item, isDone: true }) 
                : item
            )
        );
    
    };

    const funcDelDone = () => {
        setItems(items.filter(i => i.isDone !== true))
        setDone(0)
    }

    const funcAllDel= () => {
        setItems([])
        setDone(0)
    }

    useEffect(() => {
        const done = items.filter(i => i.isDone);
        setDone(done.length)
    }, [items]);

    return <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Enter new todo" className={styles.inptForm} type="text" value={inputValue} onChange={onChange}/>
            <button className={styles.btnForm}>Submit</button>
        </form>
        <div  >
        <button onClick={funcDelDone}>
            <img src="reload.png" alt="убрать выполненные" />
        </button>
        <button onClick={funcAllDel}>
            <img src="trash.png" alt="убрать все" />
        </button>
        </div>
        <ol>
            {items.map(i => <Task key={i.id} id={i.id} text={i.text} isDone={i.isDone} myFn1={handleDelete} myFn2={handleDoneTask}/>)}
        </ol>

        {doneTask ? <h3>you done {doneTask} Task</h3> : ""}
    </>
}