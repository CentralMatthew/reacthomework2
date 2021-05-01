import {useState} from "react";


export default function Counter(props) {
    let [counter, setCounter] = useState(0)
    const increment = () => setCounter(++counter);
    const decrement = () => setCounter(--counter);
    const reset = () => setCounter(0);
    const increment100 = () => setCounter(counter + 100);
    const decrement100 = () => setCounter(counter - 100);

    return (
        <div>
            counter: {counter}
            <button onClick={increment}>Додати</button>
            <button onClick={decrement}>Відняти</button>
            <button onClick={reset}>Обнулити</button>
            <button onClick={increment100}>Додати 100</button>
            <button onClick={decrement100}>Відняти 100</button>
        </div>
    )

}