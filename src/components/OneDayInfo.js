import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

export default function OneDayInfo(props) {
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <Typography variant="subtitle1" component="h5" className={classes.margin}>
                {props.title}
            </Typography>
            <Typography variant="subtitle2" component="h5" className={classes.margin}>
                {props.explanation}
            </Typography>
            <img src={props.imgUrl} className={classes.image} />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%'
    },
    paper: {
        width: '100%',
        margin: theme.spacing(0, 'auto'),
        paddingTop: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    margin: {
        margin: theme.spacing(1),
    }
}));