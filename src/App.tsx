import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Header from './Header';
import Content from './Container';
import { useState, useEffect } from 'react';

const JOKE_REQUEST = "https://3005-15dkatz-officialjokeapi-uf1uft3x6ig.ws-us61.gitpod.io/random_joke";

interface Joke {
  id: Number,
  type: String,
  setup: String,
  punchline: String
}

function App() {
  const [currentState, setCurrentState] = useState("");
  const [joke, setJoke] =  useState<undefined | Joke>();

  const loadFakeJoke = () => {
    setCurrentState("success");
    setJoke({
      id: 10,
      type: 'fake',
      setup: 'If you see a robbery at an Apple Store...',
      punchline: 'Does that make you an iWitness?'
    })
  }

  const loadJoke = async () => {
      setCurrentState("loading");
      fetch(JOKE_REQUEST).then(async (response) => {
          setCurrentState("success");
          const joke = await response.json();
          setJoke(joke);
      }).catch((err) => {
          console.log("Got an error");
          setCurrentState("error");
      })
  }

  useEffect(() => {
      loadJoke();
  }, []);
  return (
    <div className={styles.App}>
      <Header onGetNewJoke={() => { loadJoke() }}/>
      <Content joke={joke} currentState={currentState}/>
    </div>
  );
}

export default App;
