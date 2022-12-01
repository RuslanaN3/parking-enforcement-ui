import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@mui/styles";
import EventComponent from "../components/EventComponent";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import CustomHistory from "../CustomHistory";
import EventsComponent from "../components/EventsComponent";
import Typography from "@mui/material/Typography";
import ParkingAreaPage from "../components/ParkingAreaComponent";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#e3e3e3',
        overflow: 'hidden'
    },
    layout: {
        display: 'flex'
    },
    space: {
        display: 'flex',
        flex: 2
    }
}));


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 4}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function DashboardPage() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.container}>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}>
                    <Tabs value={value} onChange={handleChange}
                          textColor="white"
                          indicatorColor="secondary"
                          aria-label="secondary tabs example"
                          sx={{backgroundColor: "#262663"}}
                          orientation="vertical"
                    >
                        <Tab label="Events"/>
                        <Tab label="Parked Vehicles"/>
                        <Tab label="Parking Area"/>
                    </Tabs>

                <TabPanel value={value} index={0}>
                    <EventsComponent/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ParkingAreaPage/>
                </TabPanel>
            </Box>
        </div>

    );
}


// icon add custom right corner
// error handling with snackbar would be coooll
