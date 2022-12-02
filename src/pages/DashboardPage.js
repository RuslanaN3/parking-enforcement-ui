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
import {styled} from '@mui/material/styles';
import ParkedVehicleComponent from "../components/ParkedVehicleComponent";

const useStyles = makeStyles(theme => ({
    tab: {
        alignSelf: 'flex-start',
        color: '#ffffff'
    }
}));

const CustomTab = styled((props) => <Tab {...props} />)(({theme}) => ({
    alignSelf: 'flex-start',
    color: '#ffffff',
    background: 'linear-gradient(180deg, #5959de 0%, #1f1f5c 100%),#262026',
    alignItems: "start",
    width: "100%"
}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{
                flex: 5, overflow: "hidden", padding: 48, paddingTop: 10,
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
    const [value, setValue] = useState(0);


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
                      variant="fullWidth"
                      sx={{backgroundColor: "#262663", width: 200, flex: 1}}
                      orientation="vertical"
                >
                    <CustomTab label="Events"/>
                    <CustomTab label="Parked Vehicles"/>
                    <CustomTab label="Parking Area"/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <EventsComponent/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ParkedVehicleComponent />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ParkingAreaPage/>
                </TabPanel>
            </Box>
        </div>

    );
}
