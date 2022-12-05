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
import LoadingComponent from "./LoadingComponent";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100vh',
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

const ParkingVehicleListHeader = () => {
    return (
        <div elevation={1} sx={{backgroundColor: "#a8d4e7", padding: "10px"}}>
            <Grid container alignItems="center" sx={{paddingBottom: "15px"}}>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">License Plate</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Status</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">First Time Spotted</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Last Time Spotted</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Parking Area</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>)
};

const ParkedVehicleListItem = ({statuses, parkedVehicle}) => {
    return (
        <Paper elevation={1} sx={{backgroundColor: "#f3f3f3", padding: "10px", opacity: 0.85}}>
            <Grid container alignItems="center">
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography sx={{
                            padding: "5px",
                            backgroundColor: "white",
                            border: "solid 2px #646464",
                            borderRadius: "8px"
                        }}>{parkedVehicle.licensePlate}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Chip sx={{backgroundColor: statuses[parkedVehicle.status], color: "white"}}
                              label={parkedVehicle.status}/>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="#052c7d">{parkedVehicle.firstTimeSpotted}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography>{parkedVehicle.firstTimeSpotted}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box display="flex" justifyContent="center">
                        <Typography>{parkedVehicle.parkingAreaInfo}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>)
};

// const formatData = (parkingAreas) => {
//     let result = [];
//     parkingAreas.forEach(area  => {
//         result.push({
//             parkingSide: area.parkingSide === "left" ? "L" : "R",
//             ...area
//         })
//     });
//     return result;
// };

const ParkedVehicleComponent = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [parkedVehicles, setParkedVehicles] = useState(null);

    const statuses = {
        "STARTED": "#a1a49a",
        "PAID": "#42a448",
        "UNPAID": "#a44241"
    };

    const getParkedVehicles = () => {
        API.parkedVehicle.getAll().then((response) => {
            setParkedVehicles(response.data)
        }).finally(() => setLoading(false));
    };

    useEffect(() => {
        const timer = setInterval(() => getParkedVehicles(), 2000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div className={classes.container}>
            {loading && <LoadingComponent/>}
            <ParkingVehicleListHeader/>
            <div className={classes.scrollContainer}>
                {!loading && <Stack spacing={2}>
                    <ParkedVehicleListItem statuses={statuses}
                                           parkedVehicle={{
                                               licensePlate: "BC9086",
                                               status: "PAID",
                                               firstTimeSpotted: "2022-01-03T08:37:04Z",
                                               parkingAreaInfo: "Коперника М."
                                           }}/>
                    {parkedVehicles &&
                    parkedVehicles.map(parkedVehicle => <ParkedVehicleListItem statuses={statuses}
                                                                               parkedVehicle={parkedVehicle}/>)}
                    <ParkedVehicleListItem statuses={statuses}
                                           parkedVehicle={{
                                               licensePlate: "BC9086",
                                               status: "PAID",
                                               firstTimeSpotted: "2022-01-03T08:37:04Z",
                                               parkingAreaInfo: "Коперника М."
                                           }}/>
                    <ParkedVehicleListItem statuses={statuses}
                                           parkedVehicle={{
                                               licensePlate: "BC9086",
                                               status: "UNPAID",
                                               firstTimeSpotted: "2022-01-03T08:37:04Z",
                                               parkingAreaInfo: "Коперника М."
                                           }}/>
                </Stack>}
            </div>
        </div>
    )
};
export default ParkedVehicleComponent;
