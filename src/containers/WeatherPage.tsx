import React from 'react';
import { Grid, Typography } from '@material-ui/core';

interface IProps {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
}

const WeatherPage: React.FC<{data: IProps | null}> = ({data}) => {
    console.log(data);

    return ( 
   
    <Grid style={{marginTop: '40px'}} container>
      
                <Grid item xs={12}>
                    <Typography>{data?.feels_like}</Typography>
                    <Typography></Typography>
                </Grid>
            
    </Grid> 

    );
}
 
export default WeatherPage;