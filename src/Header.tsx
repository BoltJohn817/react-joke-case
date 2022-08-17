import React from "react";
import Button from "./Button";
import styles from "./Header.module.css";

export default ({onGetNewJoke}: any) => {
    return (
        <div className={styles.header}>
            <Button type='success' onClick={onGetNewJoke}>Get A New Random Joke</Button>
            <a href="#" >View API Docs</a>
        </div>
    )
}