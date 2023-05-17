import { useEffect, useState } from "react";
import "./Counter.scss";

const defaultValue = 0;

const Counter = (props) => {
  const [count, setCount] = useState(defaultValue);

  useEffect(() => {
    console.log("componentDidUpdate counter1");
  }, [count]);

  const handleIncrease = () => setCount(count + 1);

  const handleDecrease = () => setCount(count - 1);

  const [count2, setCount2] = useState(defaultValue);

  useEffect(() => {
    console.log("componentDidUpdate counter2");
  }, [count2]);

  const handleIncrease2 = () => setCount2(count2 + 1);

  const handleDecrease2 = () => setCount2(count2 - 1);

  return (
    <div className="counter">
      <div>
        <span>counter1: </span>
        <strong>{count}</strong>

        <button className="increase" onClick={handleIncrease}>
          Increase
        </button>
        <button className="decrease" onClick={handleDecrease}>
          Decrease
        </button>
        <button className="remove" onClick={props.handleRemove}>
          Remove
        </button>
      </div>

      <div>
        <span>counter2: </span>
        <strong>{count2}</strong>

        <button className="increase" onClick={handleIncrease2}>
          Increase
        </button>
        <button className="decrease" onClick={handleDecrease2}>
          Decrease
        </button>
        <button className="remove" onClick={props.handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;
