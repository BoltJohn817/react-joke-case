import React from "react";
import { Button } from "../../components";
import styles from "./index.module.css";

interface IHeaderProps {
  onGetNewJoke: () => void;
}

const Header: React.FC<IHeaderProps> = ({ onGetNewJoke }) => {
  return (
    <div className={styles.header}>
      <Button buttonStyle="success" onClick={onGetNewJoke}>
        Get A New Random Joke
      </Button>
      <a href="https://github.com/15Dkatz/official_joke_api" target="_blank">
        View API Docs
      </a>
    </div>
  );
};

export default Header;
