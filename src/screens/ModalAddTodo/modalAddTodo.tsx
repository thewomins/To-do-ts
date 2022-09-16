import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/modal";
import {Todo,TaskType} from "../../types/Todo.types"
import './modalAddTodo.css'
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";


type props={
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    title:string
    data? : Todo
    onClickSubmit:(todo:Todo)=>void
}

const ModalAddTodo:React.FC<props>=({onClickSubmit, title,data, setShow , show})=>{

    const [name,setName]=useState("");
    const [task,setTask]=useState<TaskType[]>([{id:0,body:"",estado:false}]);

    useEffect(()=>{
        console.log("task",task)
    },[task])

    const onClickOutside = ()=>{
        setShow(false)
    }

    const handleAddTask= ()=>{
        setTask([...task,{id:task.length,body:"",estado:false}])
    }

    const handleDeleteTask= ()=>{
        setTask([...task.slice(0,task.length-1)])
    }

    const onChangeName=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    }

    const onChangeTasks=(event:React.ChangeEvent<HTMLInputElement>,idTask:string)=>{
        console.log(idTask)
        const id= parseInt(idTask);
        setTask([...task.slice(0,id), // separa la primera parte
                { //se edita la parte encontrada
                    ...task[id],//copia del estado anterior de task
                    body: event.target.value //se actualiza el body
                },//fin edicion
            ...task.slice(id+1)// resto de la lista added]);
            ]
        )
    }

    return(
        <div hidden={!show}>
            <Modal
                title={title}
                onClickOutside={onClickOutside}
                >
                <div className="containerDescription">
                    <div>
                        <Input
                            id="nombre"
                            textoInput="Nombre"
                            type="text"
                            color="primary"
                            onChange={onChangeName}
                        />
                        <div className="containerButtonModal">
                            <Button
                                textoButton="Borrar tarea"
                                onClick={()=>(handleDeleteTask())}
                            />
                            <Button
                                textoButton="Añadir tarea"
                                onClick={()=>(handleAddTask())}
                            />
                        </div>
                    </div>
                    <div className="containerTaskModal">
                        {task.map((element,index)=>(
                            <Input
                                style={{margin:5}}
                                id={element.id.toString()}
                                textoInput="Tarea"
                                type="text"
                                color="primary"
                                onChange={onChangeTasks}/>
                        ))}
                    </div>
                    <div className="containerButtonActionModal">
                        <Button
                            textoButton="Cancelar"
                            onClick={()=>onClickOutside()}
                        />
                        <Button
                            textoButton="Añadir"
                            onClick={()=>(onClickSubmit({id:0,list:task,nombre:name}))}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    )
}



export default ModalAddTodo;