import { useState, useEffect } from "react";
import Counter from "./Counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { id: 1, title: "counter1" },
    // { id: 2, title: "counter2" },
    // { id: 3, title: "counter3" },
    // { id: 4, title: "counter4" },
  ]);

  // იგივეა რაც this.componentDidMount
  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // იგივეა რაც this.componentDidUpdate
  useEffect(() => {
    console.log("componentDidUpdate");
  });

  const handleRemove = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div>
      <h1>Counters</h1>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          title={counter.title}
          handleRemove={() => handleRemove(counter.id)}
        />
      ))}
    </div>
  );
};

export default Counters;
