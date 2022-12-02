import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@mui/styles";
import EventComponent from "../components/EventTable";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import CustomHistory from "../CustomHistory";
import EventsComponent from "../components/EventsComponent";
import Typography from "@mui/material/Typography";
import ParkingAreaPage from "../components/ParkingAreaComponent";
import cars from "../assets/cars.jpg"

const useStyles = makeStyles(theme => ({
    // container: {
    //     width: '100%',
    //     height: '100vh',
    //     backgroundColor: '#e3e3e3',
    //     overflow: 'hidden'
    // },
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
            style={{flex: 5, overflow: "hidden", padding: 48, paddingTop: 10,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${cars})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function DashboardPage() {
    const classes = useStyles();
    const [value, setValue] = useState(2);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.container}>
            <Box sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh'}}>
                <Tabs value={value} onChange={handleChange}
                      textColor="white"
                      indicatorColor="primary"
                      aria-label="secondary tabs example"
                      sx={{backgroundColor: "#262663", width: 200, flex: 1}}
                      orientation="vertical"
                >

                    <Tab sx={{alignSelf: 'flex-start', color: '#ffffff'}} label="Events"/>
                    <Tab sx={{alignSelf: 'flex-start', color: '#ffffff'}} label="Parked Vehicles"/>
                    <Tab sx={{alignSelf: 'flex-start', color: '#ffffff'}} label="Parking Area"/>
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
