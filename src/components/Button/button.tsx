import React from "react";
import "./button.css";

type props={
    textoButton:string
    color?:string
    onClick:any
}

const Button:React.FC<props> =({textoButton="change txt",onClick,color})=>{
    return(
        <div 
            className="button"
            style={{backgroundColor:color}}
            onClick={onClick}
        >    
            <p className="text">{textoButton}</p>
        </div>
        
    )
    
}

export default Button