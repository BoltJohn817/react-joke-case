import React from "react";
import Button from "./Button";
import styles from "./Header.module.css";

export default ({onGetNewJoke}: any) => {
    return (
        <div className={styles.header}>
            <Button type='success' onClick={onGetNewJoke}>Get A New Random Joke</Button>
            <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">View API Docs</a>
        </div>
    )
}