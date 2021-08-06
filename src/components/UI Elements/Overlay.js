import classes from "./Overlay.module.css";
import Button from "./button";

const OverLay = (props) => {
  return (
    <div className={classes.overLay} onMouseOver={props.onMouseOver}>
      <h1>{props.title}</h1>
      <p className={classes.description}>{props.description}</p>
      <Button type="button" onClick={props.onClick} text="Play" />
      <Button text="More Info" />
    </div>
  );
};

export default OverLay;
