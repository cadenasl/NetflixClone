import classes from "./button.module.css";

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
