import React, {useEffect, useState} from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import {makeStyles} from "@mui/styles";
import EventComponent from "../components/EventComponent";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#cbe7e2'
    },
    layout: {
        display: 'flex'
    },
    space: {
        display: 'flex',
        flex: 2
    }
}));


const DashboardPage = () => {
    const classes = useStyles();
    const [events, setEvents] = React.useState(null);

    const getEvents = () => {
        axios.get("/api/events").then((response) => {
            setEvents(response.data);
        });
    };

    useEffect(() => {
        const timer = setInterval(() => getEvents(), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item xs={3}>
                    <div></div>
                </Grid>
                <Grid item xs={9}>
                    <EventComponent events={events}/>
                </Grid>
            </Grid>
        </div>
    )
};
export default DashboardPage;