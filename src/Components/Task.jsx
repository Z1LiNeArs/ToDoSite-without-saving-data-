import styles from "./Task.module.css";

export default function Task({id, text, isDone = false, myFn1, myFn2}) {
   const colorClass = isDone ? styles.done : styles.noDone;

    return <div className={`${styles.block} ${colorClass}`}>  
        <div>
            <img src="./calendar.png" alt="img" />
            <p className={styles.tect}>{text}</p>
        </div>
        <div>
            <button  onClick={() => myFn1(id)}>
                <img src="trash.png" alt="trash" />
            </button>
            <button onClick={() => myFn2(id)}>
                <img src="checkMark.png" alt="" />
            </button>
        </div>
    </div>
}