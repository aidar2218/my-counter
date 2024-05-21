import React from 'react';
import s from './Counter.module.css';
import Display from "../Display/Display";
import {Button} from "../Button/Button";

type CounterPropsType = {
    count: number;
    maxValue: number
    startValue: number
    incrementCount: () => void
    resetCount: () => void
}

export const Counter = ({count, maxValue, startValue, incrementCount, resetCount}: CounterPropsType) => {
    return (
        <div className={s.counter}>
            <Display value={count}
                     disabled={count === maxValue}
            />
            <div className={s.boxForButtons}>
                <Button title={"Inc"}
                        onClick={incrementCount}
                        disabled={count === maxValue}
                />
                <Button title={"Reset"}
                        onClick={resetCount}
                        disabled={count === startValue}
                />
            </div>
        </div>
    );
};

