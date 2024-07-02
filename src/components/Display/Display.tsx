import React from 'react';
import s from './Display.module.css';
import {DisplayInfoType} from "../../App";

type DisplayPropsType = {
    value: number
    disabled: boolean
    displayInfo: DisplayInfoType
    error: boolean
}

const Display = ({value, disabled, displayInfo, error}: DisplayPropsType) => {
    return (
        <div className={s.display}>

            {displayInfo === null
                ? <span className={disabled ? s.disableStyle : s.valueStyle}>
                    {value}
                </span>
                : <span className={!error ? s.displayInfoStyle : s.errorStyle}> {!error ? "enter values and press \"set\"" : "Incorrect value!"} </span>}

            {/*<span className={disabled ? s.disableStyle : s.valueStyle}>*/}
            {/*    {displayInfo !== null ? displayInfo : value}*/}
            {/*</span>*/}
        </div>
    );
};

export default Display;