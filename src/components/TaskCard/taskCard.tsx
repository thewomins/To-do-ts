import React from "react";
import './taskCard.css'
import {TaskType} from "../../types/Todo.types"

type props={
    task:TaskType,
    onClickTask:any,
}

const TaskCard:React.FC<props>=({task, onClickTask})=>{
    return(
        <div 
            className="task"
            onClick={onClickTask}
            > 
            <p>{task.body}</p>
                {
                    task.estado? 
                    <p className="state">yes</p>
                    :<p className="state">nel</p>
                }
        </div>
    )
    
}

export default TaskCard