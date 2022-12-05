import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid/index";
import React from "react";

const GridItem = ({xs, ...props}) => {
    return (
        <Grid item xs={xs}>
            <Box display="flex" justifyContent="center">
                {props.children}
            </Box>
        </Grid>
    )
};

export default GridItem;