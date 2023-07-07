import { useState } from "react";

const App = () => {
  return (
    <>
      <div>App</div>
      <HOC cmp={Counter} color="red" />
      <HOC cmp={Counter} color="lightblue" />
    </>
  );
};

function HOC(props) {
  return (
    <>
      <div style={{ background: props.color }}>
        <props.cmp />
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
    </>
  );
}

export default App;
