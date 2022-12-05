import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {makeStyles} from "@mui/styles/index";


const useStyles = makeStyles(() => ({
    container: {
        background: "blur(3px)",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const LoadingComponent = () => {
    const classes = useStyles();

    return (<div className={classes.container}>
        <CircularProgress sx={{color: "#e2ecff"}} size={60}/>
    </div>)
};

export default LoadingComponent;