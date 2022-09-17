import React from "react";
import Modal from "../../components/Modal/modal";
import { Todo } from "../../types/Todo.types";
import "./modalTodo.css";
import TaskCard from "../../components/TaskCard/taskCard";

type props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  Todo?: Todo;
};

const ModalTodo: React.FC<props> = ({ setShow, show, Todo }) => {
  //const [name,setName]=useState("");
  //const [task,setTask]=useState<TaskType[]>([{id:0,body:"",estado:false}]);

  const onClickOutside = () => {
    setShow(false);
  };

  return (
    <div hidden={!show}>
      <Modal title={Todo?.nombre} onClickOutside={onClickOutside}>
        <div className="containerDescription">
          <div className="containerTaskModal">
            {Todo?.list.map((task, index) => (
              <TaskCard //items de tareas
                key={index}
                task={task}
                onClickTask={() => console.log(task)}
                withCheck={false}
              >
                {/*items in the right of task card */}
              </TaskCard>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTodo;
