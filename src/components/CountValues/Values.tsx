import React, {ChangeEvent} from 'react';
import s from "./Values.module.css"

type ValuesPropsType = {
    maxValue: number;
    startValue: number;
    saveNewMaxValue: (value: number) => void;
    saveNewStartValue: (value: number) => void;
    error: boolean
}

export const Values = ({maxValue, startValue, saveNewMaxValue, saveNewStartValue, error}: ValuesPropsType) => {

    const saveNewMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        saveNewMaxValue(Number(event.currentTarget.value));
    }

    const saveNewStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        saveNewStartValue(Number(event.currentTarget.value));
    }

    return (
        <div className={s.valuesBox}>
            <div id={s.maxMin}>
                max value: <input type="number"
                                  id={s.input}
                                  className={maxValue <= startValue || maxValue < 0 ? s.inputError : s.input}
                                  value={maxValue}
                                  onChange={saveNewMaxValueHandler}/>
            </div>
            <div id={s.maxMin}>
                min value: <input type="number"
                                  id={s.input}
                                  className={maxValue <= startValue || startValue < 0 ? s.inputError : s.input}
                                  value={startValue}
                                  onChange={saveNewStartValueHandler}/>
            </div>
        </div>
    );
};