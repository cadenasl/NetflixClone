import classes from "./backdrop.module.css";

const BackDrop = (props) => {
  return (
    <div className={classes.backDrop} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default BackDrop;
