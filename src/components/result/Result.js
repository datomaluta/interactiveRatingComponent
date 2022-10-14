import "./Result.scss";
import resultImg from "../../assets/illustration-thank-you.svg";

const Result = (props) => {
  return (
    <div className="result">
      <div className="result__img-box">
        <img src={resultImg} alt="thankyou" />
      </div>

      <p className="result__selected">You selected {props.rating} out of 5</p>

      <h1 className="result__title">Thank you!</h1>
      <p className="result__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default Result;
