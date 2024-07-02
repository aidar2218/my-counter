import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Settings} from "./components/Settings/Settings";


export type DisplayInfoType = "enter values and press \"set\"" | "Incorrect value!" | null


function App() {

    const [MAX_VALUE, setMaxValue] = useState<number>(5);
    const [START_VALUE, setStartValue] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
    const [disabledSetButton, setDisabledSetButton] = useState<boolean>(true);
    const [displayInfo, setDisplayInfo] = useState<DisplayInfoType>(null);
    const [error, setError] = useState<boolean>(false);

    const incrementCount = () => {
        if (count < MAX_VALUE) {
            setCount(count + 1);
        }
    }

    const resetCount = () => {
        setCount(START_VALUE);
    }

    const saveNewMaxValue = (value: number) => {
        setMaxValue(value);
        setDisabledSetButton(false);
        setDisplayInfo("enter values and press \"set\"");
        if (MAX_VALUE === START_VALUE || MAX_VALUE < START_VALUE || MAX_VALUE === 0) {
            setError(true);
            setDisplayInfo("Incorrect value!")
        } else {
            setError(false);
        }
    }

    const saveNewStartValue = (value: number) => {
        setStartValue(value);
        setDisabledSetButton(false);
        setDisplayInfo("enter values and press \"set\"");
        if (MAX_VALUE === START_VALUE || MAX_VALUE < START_VALUE || START_VALUE < 0) {
            setError(true);
            setDisplayInfo("Incorrect value!")
        } else {
            setError(false);
        }
    }

    const setValuesCallback = () => {
        saveNewMaxValue(MAX_VALUE);
        saveNewStartValue(START_VALUE);
        setDisabledSetButton(true);
        setCount(START_VALUE);
        setDisplayInfo(null);
    }


    return (
        <div className="App">
            <Settings maxValue={MAX_VALUE}
                      startValue={START_VALUE}
                      saveNewMaxValue={saveNewMaxValue}
                      saveNewStartValue={saveNewStartValue}
                      disabledSetButton={disabledSetButton}
                      setValuesCallback={setValuesCallback}
                      error={error}
            />
            <Counter count={count}
                     maxValue={MAX_VALUE}
                     startValue={START_VALUE}
                     incrementCount={incrementCount}
                     resetCount={resetCount}
                     displayInfo={displayInfo}
                     error={error}
            />
        </div>
    );
}

export default App;
