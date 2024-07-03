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
}

export const Counter = ({
                            count, maxValue, startValue,
                            incrementCount, resetCount, displayInfo
                        }: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display value={count}
                     disabled={count === maxValue}
                     displayInfo={displayInfo}
                     error={maxValue <= startValue || maxValue < 0 || startValue < 0}/>

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

