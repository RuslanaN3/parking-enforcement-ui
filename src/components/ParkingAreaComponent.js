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
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

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

const ParkingAreaListHeader = ({area}) => {
    return (
        <div elevation={1} sx={{backgroundColor: "#a8d4e7", padding: "10px"}}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography color="white">District/Street</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography color="white">Parking type</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography color="white">Parking side</Typography>
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <Typography color="white">Parking places amount</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography color="white">Area type</Typography>
                </Grid>
            </Grid>
        </div>)
};

const ParkingAreaListItem = ({area}) => {
    return (
        <Paper elevation={1} sx={{backgroundColor: "#f3f3f3", padding: "10px", opacity: 0.85}}>
            <Grid container>
                <Grid item xs={3} direction="vertical">
                    <Typography>{area.address.district}</Typography>
                    <Typography>{area.address.street}</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="center">
                    <Typography color="#052c7d" >{area.parkingType}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>{area.parkingSide}</Typography>
                </Grid>
                <Grid item xs={3} justifyContent="center">
                    <Typography>{area.parkingPlacesAmount}</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="center">
                    <Chip label={area.areaType} />
                </Grid>
            </Grid>
        </Paper>)
};



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
                <ParkingAreaListHeader />
                {parkingAreas && parkingAreas.map(area => <ParkingAreaListItem area={area}/>)}
            </Stack>
        </div>
    )
};
export default ParkingAreaComponent;
