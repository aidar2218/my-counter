import React from 'react';
import s from "./Values.module.css"

type ValuesPropsType = {

}

export const Values = ({}: ValuesPropsType) => {
    return (
        <div className={s.valuesBox}>
            <div id={s.maxMin}>max value: <input type="number"/></div>
            <div id={s.maxMin}>min value: <input type="number"/></div>
        </div>
    );
};