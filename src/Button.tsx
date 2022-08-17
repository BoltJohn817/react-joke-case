import React from "react";
import styles from "./Button.module.css";

export default ({children, type, ...props}: any) => {
    return (
    <button className={`${styles.button} ${styles[`button-${type}`]}`} {...props}>
        {children}
    </button>
    )
}