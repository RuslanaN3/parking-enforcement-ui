import React, {useEffect, useState} from "react";
import axios from "axios/index";
import {makeStyles} from "@mui/styles/index";
import EventComponent from "./EventComponent";
import Grid from "@mui/material/Grid/index";
import Tab from "@mui/material/Tab/index";
import Tabs from "@mui/material/Tabs/index";
import Box from "@mui/material/Box/index";
import {History as CustomHistory} from "history/index";
import API from "../api/API";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#e7e6e1'
    },
    layout: {
        display: 'flex'
    },
    space: {
        display: 'flex',
        flex: 2
    }
}));


const ParkingAreaComponent = () => {
    const classes = useStyles();
    const [parkingAreas, setParkingAreas] = useState(null);

    const getEvents = () => {
        API.parkingAreas.getAll().then((response) => {
            setParkingAreas(response.data)
        })
    };

    useEffect(() => {
        const timer = setInterval(() => getEvents(), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={3}>
                    <div></div>
                </Grid>
                <Grid item xs={9}>
                    {parkingAreas && parkingAreas.map(parkingArea => <div>{parkingArea.areaType}</div>)}
                </Grid>
            </Grid>
        </div>
    )
};
export default ParkingAreaComponent;
