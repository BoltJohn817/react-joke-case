import React, { Fragment, useEffect, useState } from "react";
import { render } from "@testing-library/react";
import styles from "./index.module.css";
import { StyledQuote, StyledButton } from "../../Components";

import { Joke, JOKE_STATE } from "../../types";

interface IContainerProps {
  currentState: JOKE_STATE;
  errorOccured: boolean;
  joke: Joke | undefined;
}

const Container: React.FC<IContainerProps> = ({
  currentState,
  errorOccured,
  joke,
}) => {
  const [showPunchLine, setShowPunchline] = useState(false);
  useEffect(() => {
    setShowPunchline(false);
  }, [joke]);
  let renderItem;
  if (currentState === JOKE_STATE.STATE_LOADING) {
    renderItem = <h2 className={styles.h2}>LOADING YOUR JOKE...</h2>;
  } else if (errorOccured) {
    renderItem = (
      <h2 className={styles.error}>THERE WAS AN ERROR LOADING YOUR JOKE.</h2>
    );
  } else if (currentState === JOKE_STATE.STATE_DONE) {
    renderItem = (
      <>
        <StyledQuote>{joke?.setup}</StyledQuote>
        {showPunchLine ? (
          <Fragment>
            <div className={styles["button-container"]}>
              <StyledButton
                buttonStyle="primary"
                onClick={() => {
                  setShowPunchline(false);
                }}
              >
                Hide Punchline
              </StyledButton>
            </div>
            <StyledQuote>{joke?.punchline}</StyledQuote>
          </Fragment>
        ) : (
          <Fragment>
            <div className={styles["button-container"]}>
              <StyledButton
                buttonStyle="primary"
                onClick={() => {
                  setShowPunchline(true);
                }}
              >
                Show Punchline
              </StyledButton>
            </div>
          </Fragment>
        )}
      </>
    );
  }
  return <div className={styles.container}>{renderItem}</div>;
};

export default Container;
