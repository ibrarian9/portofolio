import "./style/Button.css";
function Button(props) {
  return (
    <a href={props.link} className="btn btn-saya btn-danger">
      {props.text}
    </a>
  );
}
export default Button;
