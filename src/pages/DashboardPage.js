import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@mui/styles";
import EventComponent from "../components/EventComponent";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import CustomHistory from "../CustomHistory";
import EventsPage from "./EventsPage";
import Typography from "@mui/material/Typography";

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

//
// const DashboardPage = () => {
//     const classes = useStyles();
//     const [events, setEvents] = React.useState(null);
//
//     const getEvents = () => {
//         axios.get("/api/events").then((response) => {
//             setEvents(response.data);
//         });
//     };
//
//     useEffect(() => {
//         const timer = setInterval(() => getEvents(), 5000);
//         return () => clearInterval(timer);
//     }, []);
//
//     return (
//         <div className={classes.container}>
//             <Grid container>
//                 <Grid item xs={3}>
//                     <div></div>
//                 </Grid>
//                 <Grid item xs={9}>
//                     <EventComponent events={events}/>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// };
// export default DashboardPage;

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
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function DashboardPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (

        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange}
                      textColor="secondary"
                      indicatorColor="secondary"
                      aria-label="secondary tabs example"
                >
                    <Tab label="Events"/>
                    <Tab label="Parked Vehicles"/>
                    <Tab label="Parking Zone"/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <EventsPage/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Box>


    );
}

// icon add custom right corner
// error handling with snackbar would be coooll
