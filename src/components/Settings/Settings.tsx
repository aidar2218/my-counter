import React from 'react';
import s from "./Settings.module.css"
import {Values} from "../CountValues/Values";
import {Button} from "../Button/Button";

type SettingsPropsType = {}

export const Settings = ({}: SettingsPropsType) => {
    return (
        <div className={s.settingsBox}>
            <Values/>
            <div className={s.buttonsBox}>
                <Button title={"set"} onClick={() => {}} />
            </div>
        </div>
    );
};