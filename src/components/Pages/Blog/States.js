import React, { useState } from 'react';

export const States = () => {
    const [counter, setCounter] = useState(0);

    const increament = () => {
        setCounter(counter + 1);
    };

    const decreament = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <p>Counter {counter}</p>
            <p><button onClick={increament}>Increament</button></p>
            <p><button onClick={decreament}>Decreament</button></p>
        </div>
    )
}
