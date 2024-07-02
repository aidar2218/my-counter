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
    error: boolean
}

export const Settings = ({
                             maxValue,
                             startValue,
                             saveNewMaxValue,
                             saveNewStartValue,
                             disabledSetButton,
                             setValuesCallback,
                             error
}: SettingsPropsType) => {

    return (
        <div className={s.settingsBox}>
            <Values maxValue={maxValue}
                    startValue={startValue}
                    saveNewMaxValue={saveNewMaxValue}
                    saveNewStartValue={saveNewStartValue}/>
            <div className={s.buttonsBox}>
                <Button title={"set"}
                        onClick={setValuesCallback}
                        disabled={disabledSetButton || error}/>
            </div>
        </div>
    );
};