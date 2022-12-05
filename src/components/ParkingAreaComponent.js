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
import GridItem from "./GridItem";

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
        <div elevation={1} sx={{backgroundColor: "#a8d4e7", margin: "45px"}}>
            <Grid container sx={{paddingBottom: "15px"}}>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">District</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Street</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Parking type</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Parking side</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2} justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Parking places amount</Typography>
                    </Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display="flex" justifyContent="center">
                        <Typography color="white">Area type</Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>)
};

const ParkingAreaListItem = ({areaTypes, area}) => {
    return (
        <Paper elevation={1}
               sx={{backgroundColor: "#f3f3f3", padding: "10px", opacity: 0.85, backdropFilter: "blur(3px)"}}>
            <Grid container alignItems="center">
                <GridItem xs={2}>
                    <Chip sx={{fontSize: "1.1em"}} variant="outlined" label={area.address.district}/>
                </GridItem>
                <GridItem xs={2}>
                    <Typography>{area.address.street}</Typography>
                </GridItem>
                <GridItem xs={2}>
                    <Typography color="#052c7d">{area.parkingType}</Typography>
                </GridItem >
                <GridItem xs={2}>
                    <Chip sx={{ fontStyle: "bold"}} label={area.parkingSide}/>
                </GridItem>
                <GridItem xs={2}>
                    <Typography>{area.parkingPlacesAmount}</Typography>
                </GridItem>
                <GridItem xs={2}>
                    <Chip sx={{backgroundColor: areaTypes[area.areaType], color: "white"}} label={area.areaType}/>
                </GridItem>
            </Grid>
        </Paper>)
};


const ParkingAreaComponent = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [parkingAreas, setParkingAreas] = useState(null);

    const areaTypes = {
        "PAID": "#0288d1",
        "SPECIAL": "#d18800",
        "PROHIBITED": "#d13d00"
    };

    const getParkingAreas = () => {
        API.parkingAreas.getAll()
            .then((response) => {
                setParkingAreas(formatData(response.data))
            })
            .finally(() => setLoading(false));
    };

    const formatData = (parkingAreas) => {
        let result = [];
        parkingAreas.forEach(area => {
            result.push({
                ...area,
                parkingSide: area.parkingSide === "left" ? "L" : "R",
            })
        });
        console.log("result", result)
        return result;
    };

    useEffect(() => {
        const timer = setInterval(() => getParkingAreas(), 2000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div className={classes.container}>
            {loading && <LoadingComponent/>}
            <ParkingAreaListHeader/>
            <div className={classes.scrollContainer}>
                {!loading && <Stack spacing={2}>
                    {parkingAreas && parkingAreas.map(area => <ParkingAreaListItem areaTypes={areaTypes}
                                                                                   area={area}/>)}
                </Stack>}
            </div>
        </div>
    )
};
export default ParkingAreaComponent;
