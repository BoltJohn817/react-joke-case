import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Header, Container } from "./containers";

import { fetchJoke, selectJoke } from "./store/jokeSlice";
import { AppDispatch } from "./store/store";

import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const joke = useSelector(selectJoke);

  const loadJoke = async () => {
    dispatch(fetchJoke());
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <div className={styles.App}>
      <Header
        onGetNewJoke={loadJoke}
      />
      <Container
        joke={joke.joke}
        currentState={joke.jokeState}
        errorOccured={joke.jokeLoadingError}
      />
    </div>
  );
}

export default App;
