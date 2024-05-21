import React from 'react';
import s from './Display.module.css';

type DisplayPropsType = {
    value: number;
    disabled: boolean;
}

const Display = ({value, disabled}: DisplayPropsType) => {
    return (
        <div className={s.display}>
            <span className={disabled ? s.disableStyle : s.valueStyle}>
                {value}
            </span>
        </div>
    );
};

export default Display;