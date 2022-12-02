import React, {useEffect, useState} from "react";
import axios from "axios/index";
import {makeStyles} from "@mui/styles/index";
import API, {eventsConst} from "../api/API";
import Container from "@mui/material/Container";
import EventTable from "./EventTable";
import Tabs from "@mui/material/Tabs";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        backgroundColor: '#e7e6e1',
        maxHeight: '850px'
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

        <EventTable events={eventsConst}/>

    )
};
export default EventsComponent;
