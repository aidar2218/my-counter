import React from 'react';
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export const Button = ({title, onClick, disabled}: ButtonPropsType) => {
    return (
        <button className={disabled ? s.disabledButton : s.button}
                onClick={onClick}
                disabled={disabled}
        >
            {title}
        </button>
    );
};

