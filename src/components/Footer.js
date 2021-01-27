import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export default function Footer() {
    const classes = useStyles();

    return (
        <Typography variant="subtitle1" component="h5" className={classes.margin}>
            © {new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        textAlign: 'center',
    },
}));