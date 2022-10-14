import "./Radio.scss";

const Radio = (props) => {
  return (
    <div className="radio">
      <input
        className="radio__input"
        id={props.value}
        name="rating"
        type="radio"
        onChange={props.onRatingChange}
        value={props.value}
      />
      <label className="radio__label" htmlFor={props.value}>
        {props.value}
      </label>
    </div>
  );
};

export default Radio;
