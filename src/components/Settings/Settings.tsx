import React from 'react';
import s from "./Settings.module.css"
import {Values} from "../CountValues/Values";
import {Button} from "../Button/Button";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    saveNewMaxValue: (value: number) => void
    saveNewStartValue: (value: number) => void
    disabledSetButton: boolean
    setValuesCallback: () => void
}

export const Settings = ({
                             maxValue,
                             startValue,
                             saveNewMaxValue,
                             saveNewStartValue,
                             disabledSetButton,
                             setValuesCallback,
}: SettingsPropsType) => {

    return (
        <div className={s.settingsBox}>
            <Values maxValue={maxValue}
                    startValue={startValue}
                    saveNewMaxValue={saveNewMaxValue}
                    saveNewStartValue={saveNewStartValue}
                    error={maxValue <= startValue || maxValue <= 0 || startValue < 0}/>
            <div className={s.buttonsBox}>
                <Button title={"set"}
                        onClick={setValuesCallback}
                        disabled={disabledSetButton || maxValue <= startValue || maxValue <= 0 || startValue < 0} />
            </div>
        </div>
    );
};