import React, {useEffect, useState} from "react";
import axios from "axios/index";
import {makeStyles} from "@mui/styles/index";
import EventComponent from "./EventTable";
import Grid from "@mui/material/Grid/index";
import Tab from "@mui/material/Tab/index";
import Tabs from "@mui/material/Tabs/index";
import Box from "@mui/material/Box/index";
import {History as CustomHistory} from "history/index";
import API from "../api/API";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100vh'
    },
    layout: {
        display: 'flex'
    },
    space: {
        display: 'flex',
        flex: 2
    }
}));

const ListElement = () => {

    return (
        <Grid container>


        </Grid>

    )
}



const ParkingAreaComponent = () => {
    const classes = useStyles();
    const [parkingAreas, setParkingAreas] = useState(null);

    const getParkingAreas = () => {
        API.parkingAreas.getAll().then((response) => {
            setParkingAreas(response.data)
        })
    };

    useEffect(() => {
        const timer = setInterval(() => getParkingAreas(), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={classes.container}>
            <Stack spacing={2}>
                {parkingAreas && parkingAreas.map(p =>
                    <Paper sx={{padding: "10px"}}>
                        <p>District: {p.address.district}</p>
                        <p>{p.address.street}</p>

                    </Paper>)
                }
            </Stack>
        </div>
    )
};
export default ParkingAreaComponent;
