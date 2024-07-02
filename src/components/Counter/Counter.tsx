import React from 'react';
import s from './Counter.module.css';
import Display from "../Display/Display";
import {Button} from "../Button/Button";
import {DisplayInfoType} from "../../App";

type CounterPropsType = {
    count: number;
    maxValue: number
    startValue: number
    incrementCount: () => void
    resetCount: () => void
    displayInfo: DisplayInfoType
    error: boolean
}

export const Counter = ({
                            count, maxValue, startValue,
                            incrementCount, resetCount, displayInfo,
                            error}: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display value={count}
                     disabled={count === maxValue}
                     displayInfo={displayInfo}
                     error={error}

            />
            <div className={s.boxForButtons}>
                <Button title={"Inc"}
                        onClick={incrementCount}
                        disabled={count === maxValue || displayInfo !== null}
                />
                <Button title={"Reset"}
                        onClick={resetCount}
                        disabled={count === startValue || displayInfo !== null}
                />
            </div>
        </div>
    );
};

