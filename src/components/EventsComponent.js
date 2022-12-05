import React, {useEffect, useState} from "react";
import axios from "axios/index";
import {makeStyles} from "@mui/styles/index";
import API, {eventsConst} from "../api/API";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import LoadingComponent from "./LoadingComponent";

const useStyles = makeStyles(theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.6em',
            margin: '2px'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
            backgroundColor: '#4080c3'


        }
    },
    container: {
        width: '100%',
        height: '95vh',
        overflow: "hidden"
    },
    scrollContainer: {
        height: "100%",
        width: "100%",
        overflow: "auto",
        paddingBottom: '20px'
    },
    layout: {
        display: 'flex'
    },
    space: {
        display: 'flex',
        flex: 2
    }
}));

const EventListHeader = () => {
    return (
        <div elevation={1} sx={{backgroundColor: "#a8d4e7", padding: "10px"}}>
            <Grid container>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Timestamp</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">License Plate</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Confidence</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Camera id</Typography>
                    </Box>
                </Grid>

            </Grid>
        </div>)
};

const EventListItem = ({event}) => {
    return (
        <Paper elevation={3} sx={{backgroundColor: "#f3f3f3", padding: "5px", opacity: 0.85}}>
            <Grid container alignItems="center">
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography>{event.timestamp}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography sx={{
                            padding: "5px",
                            backgroundColor: "white",
                            border: "solid 2px #646464",
                            borderRadius: "8px"
                        }}>{event.vehicleData.licensePlate}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="#052c7d">{event.vehicleData.confidence}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography>{event.cameraId}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>)
};


const EventsComponent = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState(null);

    const getEvents = () => {
        API.events.getAll()
            .then((response) => {
                setEvents(response.data)
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const timer = setInterval(() => getEvents(), 3000);
        return () => clearInterval(timer);
    }, []);

    return (

        <div className={classes.container}>
            {loading && <LoadingComponent/>}
            <EventListHeader/>
            <div className={classes.scrollContainer}>
                {!loading && <Stack spacing={2}>
                    {events && events.map(event => <EventListItem event={event}/>)}
                </Stack>}

            </div>
        </div>

    )
};
export default EventsComponent;
