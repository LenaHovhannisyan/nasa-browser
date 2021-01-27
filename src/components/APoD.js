import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Grid, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';

import OneDayInfo from "./OneDayInfo"

export default function APoD(props) {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());

    const [data, setData] = useState({ hits: [] });

    const fetchData = async () => {
        const params = {
            date: selectedDate.getFullYear() + "-" + (selectedDate.getMonth() + 1) + "-" + selectedDate.getDate(),
            api_key: "573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx"
        }

        const res = await axios.get(
            "https://api.nasa.gov/planetary/apod", { params }
        );

        setData(res.data);
    }

    return (
        <Paper className={classes.root} variant='outlined'>

            <div className={classes.paper}>
                <Typography variant="subtitle1" component="h5" className={classes.margin}>
                    Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Fragment>
                                <KeyboardDatePicker
                                    autoOk
                                    variant="inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                />
                            </Fragment>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" size="medium" color="primary" onClick={fetchData}>
                            Go
                        </Button>
                    </Grid>

                </Grid>

                {
                    data && <OneDayInfo
                        title={data.title}
                        explanation={data.explanation}
                        imgUrl={data.hdurl}
                    />
                }
            </div>

        </Paper>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        margin: theme.spacing(0, 'auto')
    },
    paper: {
        width: '60%',
        margin: theme.spacing(0, 'auto'),
        paddingTop: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    margin: {
        margin: theme.spacing(1),
    }
}));