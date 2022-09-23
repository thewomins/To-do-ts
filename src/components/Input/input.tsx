import React, {useEffect} from "react";
import "./input.css";

type color = "primary" | "secondary" | "tertiary";
type schema = {
  bgColorInput: string;
  enfasisColorInput: string;
  textFocusColor: string;
  textNoFocusColor: string;
};

const schemas = (color?: color): schema => {
  const schema: schema = {
    bgColorInput: "#fff",
    enfasisColorInput: "blue",
    textFocusColor: "rgba(0, 0, 0, 0.3)",
    textNoFocusColor: "rgba(0, 0, 0, 0.8)",
  };
  if (color === "primary") {
    schema.bgColorInput = "#fff";
    schema.enfasisColorInput = "blue";
    schema.textFocusColor = "rgba(0, 0, 0, 0.3)";
    schema.textNoFocusColor = "rgba(0, 0, 0, 0.8)";
  }
  return schema;
};

type props = {
  id: string;
  textoInput: string;
  color?: color;
  onChange?: any;
  style?: any;
  type: string;
  value?: string;
};

//to change variables in css
function setColors(colorSchema: schema) {
  Object.entries(colorSchema).forEach(element => {
    console.log(element[0], element[1]);
    document.documentElement.style.setProperty("--" + element[0], element[1]);
  });
}

const Input: React.FC<props> = ({
  textoInput = "change txt",
  id,
  type,
  onChange,
  style,
  color,
  value,
}) => {
  useEffect(() => {
    setColors(schemas(color));
  }, [color]);

  return (
    <div className="input-field-fill" style={style}>
      <input
        type={type}
        className="form__field"
        placeholder=" "
        name={textoInput}
        id={id}
        onChange={e => onChange(e, id)}
        required
        value={value}
      />
      <label htmlFor={id} className="form__label">
        {textoInput}
      </label>
    </div>
  );
};

export default Input;
