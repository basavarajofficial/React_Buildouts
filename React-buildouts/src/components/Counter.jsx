import {useState} from 'react';
function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h3> {count} </h3>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  )
}

export default Counter;