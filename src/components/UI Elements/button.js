import classes from "./button.module.css";
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
