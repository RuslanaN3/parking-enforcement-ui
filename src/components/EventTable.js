import React, {useEffect} from "react";
import Paper from "@mui/material/Paper";
import {makeStyles} from "@mui/styles";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

const useStyles = makeStyles(theme => ({
    stickyHeader: {
        backgroundColor: "blue"

    },
    table: {
        height: "100%"
    },
    paper: {
        height: '5.5vh',
    }
}));

const EventTable = ({events}) => {
    const classes = useStyles();

    return (

        <TableContainer sx={{backgroundColor: '#f3f3f3', maxHeight: '90vh', opacity: 0.85}} component={Paper}>
            <Table stickyHeader

                   sx={{minWidth: 650, maxWidth: '100%', overflowY: 'scroll' }} size="small"
                   aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Timestamp</TableCell>
                        <TableCell align="right">License plate</TableCell>
                        <TableCell align="right">Confidence</TableCell>
                        <TableCell align="right">Camera Id</TableCell>
                        <TableCell align="right">Cycle</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events && events.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="right">{row.timestamp}</TableCell>
                            <TableCell align="right">{row.vehicleData.licensePlate}</TableCell>
                            <TableCell align="right">{row.vehicleData.confidence}</TableCell>
                            <TableCell align="right">{row.cameraId}</TableCell>
                            <TableCell align="right">{row.cycle}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};
export default EventTable;