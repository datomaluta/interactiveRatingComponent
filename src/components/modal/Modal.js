import { useState } from "react";
import Container from "../../layout/Container";
import Active from "../active/Active";
import Result from "../result/Result";

const Modal = () => {
  const [rating, setRating] = useState("");
  const [displayResult, setDisplayResult] = useState(false);

  const ratingChangeHandler = (event) => {
    setRating(event.target.value);
  };

  const displayResultHandler = () => {
    if (rating) {
      setDisplayResult(true);
    } else {
      return;
    }
  };

  return (
    <Container>
      {displayResult ? (
        <Result rating={rating} />
      ) : (
        <Active
          onSubmit={displayResultHandler}
          ratingChangeHandler={ratingChangeHandler}
        />
      )}
    </Container>
  );
};

export default Modal;
