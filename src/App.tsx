import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


function App() {

    const MAX_VALUE = 5;
    const START_VALUE = 0;
    const [count, setCount] = useState<number>(0);

    const incrementCount = () => {
        if (count < MAX_VALUE) {
            setCount(count + 1);
        }
    }

    const resetCount = () => {
        setCount(START_VALUE);
    }


    return (
        <div className="App">
            <Settings />
            <Counter count={count}
                     maxValue={MAX_VALUE}
                     startValue={START_VALUE}
                     incrementCount={incrementCount}
                     resetCount={resetCount}
            />
        </div>
    );
}

export default App;
