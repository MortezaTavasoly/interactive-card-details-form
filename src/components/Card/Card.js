import "./card.css";
import logo from "../../images/card-logo.svg";
export default function Card({ name, number, month, year, cvc }) {
  return (
    <div className="card">
      <div className="img front">
        <img src={logo} alt="logo" className="logo" />
        <strong className="card-number">
          {number ? number : "0000 0000 0000 0000"}
        </strong>
        <p className="name">{name ? name : "morteza tavasoli"}</p>
        <p className="date">
          {month ? month : "00"}/{year ? year : "00"}
        </p>
      </div>
      <div className="img back">
        <p className="cvc">{cvc ? cvc : "000"}</p>
      </div>
    </div>
  );
}
