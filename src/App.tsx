import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Grid, TextField, Typography}  from '@material-ui/core';
import { API_KEY, URL } from './data/contants';
import './App.css';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      marginTop: '20px'
    },
    formContent: {
      marginTop: '20px'
    }
  })
)

type Weather = {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

function App() {
  const classes = useStyles();

  const [city, setCity] = useState<string>('');
  const [details, setDetails] = useState<Weather | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeCity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  useEffect(() => {
    ref.current?.focus();
  }, [])
  useEffect(() => {
    const MAIN_URL: string = URL+city+API_KEY;
    console.log(MAIN_URL)
    fetch(MAIN_URL)
      .then(response => response.json())
      .then(data => setDetails(data.main))
      .catch(err => console.error(err))
  }, [city])

  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid className={classes.root} item xs={12}>
          <Typography>Please type in your city</Typography>
        </Grid>
        <Grid className={classes.formContent} item xs={12}>
          <TextField fullWidth label="City" inputRef={ref} value={city} onChange={onChangeCity} placeholder="Check your city"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
