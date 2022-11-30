import React, {useEffect} from "react";
import Paper from "@mui/material/Paper";
import {makeStyles} from "@mui/styles";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles(theme => ({
    containerEvents: {
        height: '90vh',
        overflow: 'scroll'
    },
    table: {
        height: "100%"
    },
    paper: {
        height: '5.5vh',
    }
}));

const EventComponent = ({events}) => {
    const classes = useStyles();


    return (
        <div className={classes.containerEvents}>
            <TableContainer className={classes.table} component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">timestamp</TableCell>
                            <TableCell align="right">licensePlate</TableCell>
                            <TableCell align="right">licencePlateConfidence</TableCell>
                            <TableCell align="right">cameraId</TableCell>
                            <TableCell align="right">cycle</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events && events.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="right">{row.timestamp}</TableCell>
                                <TableCell align="right">{row.licensePlate}</TableCell>
                                <TableCell align="right">{row.licencePlateConfidence}</TableCell>
                                <TableCell align="right">{row.cameraId}</TableCell>
                                <TableCell align="right">{row.cycle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
export default EventComponent;