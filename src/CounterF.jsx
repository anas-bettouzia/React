import { use } from "react";
import { useEffect, useState } from "react";

const CounterF = ({initialCount = 0, step = 5}) => {
    console.log("CounterF : render");
    const [count,setCount] = useState(initialCount);
    const [loading,setLoading] = useState(true);
 
    useEffect(() => {
        console.log("CounterF : useEffect");
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const handleIncrement = () => setCount(count + step);

    const handleDecrement = () => setCount(count - step);

    const handleReset = () => setCount(initialCount);


    return (
        <>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <p>Compteur : {count}</p>
            <button onClick={handleIncrement}>+{step}</button>
            <button onClick={handleDecrement}>-{step}</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        )}
      </>
    );
};
export default CounterF;