import "./Casilla.css";

const Casilla = ({key,valor}) => {
  return <div className="casilla" key={key}>{valor}</div>;
};

export default Casilla;
