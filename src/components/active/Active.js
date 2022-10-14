import "./Active.scss";
import starIcon from "../../assets/icon-star.svg";
import Radio from "../../UI/Radio";

const Active = (props) => {
  return (
    <div className="component">
      <div className="component__img-box">
        <img src={starIcon} alt="star" />
      </div>
      <h1 className="component__title">How did we do?</h1>
      <p className="component__text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="component__radio-container">
        <Radio onRatingChange={props.ratingChangeHandler} value="1" />
        <Radio onRatingChange={props.ratingChangeHandler} value="2" />
        <Radio onRatingChange={props.ratingChangeHandler} value="3" />
        <Radio onRatingChange={props.ratingChangeHandler} value="4" />
        <Radio onRatingChange={props.ratingChangeHandler} value="5" />
      </div>

      <button onClick={props.onSubmit} className="component__button">
        Submit
      </button>
    </div>
  );
};

export default Active;
