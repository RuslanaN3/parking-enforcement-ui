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
import Container from "@mui/material/Container";

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


const EventsComponent = () => {
    const classes = useStyles();
    const [events, setEvents] = useState(null);

    const getEvents = () => {
        API.events.getAll().then((response) => {
            setEvents(response.data)
        })
    };

    useEffect(() => {
        const timer = setInterval(() => getEvents(), 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={3}>
                    <div></div>
                </Grid>
                <Grid item xs={9}>
                    <EventComponent events={events}/>
                </Grid>
            </Grid>
        </Container>
    )
};
export default EventsComponent;
