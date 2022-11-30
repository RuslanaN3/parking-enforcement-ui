import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@mui/styles";
import EventComponent from "../components/EventComponent";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import {History as CustomHistory} from "history";

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


const EventsPage = () => {
    const classes = useStyles();
    const [events, setEvents] = useState(null);

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
                    hiiiii
                    <EventComponent events={events}/>
                </Grid>
            </Grid>
        </div>
    )
};
export default EventsPage;
