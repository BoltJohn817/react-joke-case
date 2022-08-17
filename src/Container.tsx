import { Fragment, useEffect, useState } from "react"
import { render } from "@testing-library/react";
import styles from './Container.module.css';
import Quote from "./Quote";
import Button from "./Button";

export default ({currentState, joke} : any) => {
    const [showPunchLine, setShowPunchline] = useState(false);
    useEffect(() => {
        setShowPunchline(false);
    }, [joke]);
    let renderItem;
    if (currentState === "loading") {
        renderItem = <h2 className={styles.h2}>LOADING YOUR JOKE...</h2>
    } else if (currentState === 'error') {
        renderItem = <h2 className={styles.error}>THERE WAS AN ERROR LOADING YOUR JOKE.</h2>
    } else {
        renderItem = <>
            <Quote >{joke?.setup}</Quote>
            {
                showPunchLine ?
                <Fragment>
                    <div className={styles["button-container"]}>
                        <Button type='primary' onClick={() => {setShowPunchline(false)}}>Hide Punchline</Button>
                    </div>
                    <Quote>{joke?.punchline}</Quote>
                </Fragment> :
                <Fragment>
                    <div className={styles["button-container"]}>
                    <Button type='primary' onClick={() => {console.log("FDsfdsfd");setShowPunchline(true)}}>Show Punchline</Button>
                    </div>
                </Fragment>
            }
            </>
    }
    return <div className={styles.container}>
        {renderItem}
    </div>
}