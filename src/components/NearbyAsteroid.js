import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button, Grid, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';

import Table from "./Table";

export default function NearbyAsteroid(props) {
    const classes = useStyles();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [diffInDays, setDiffInDays] = useState();

    const [data, setData] = useState({ arr: [] });

    const fetchData = async () => {
        differenceInDays(startDate, endDate);

        const params = {
            start_date: startDate.getFullYear() + "-" + (startDate.getMonth() + 1) + "-" + startDate.getDate(),
            end_date: endDate.getFullYear() + "-" + (endDate.getMonth() + 1) + "-" + endDate.getDate(),
            api_key: "573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx"
        }

        const res = await axios.get(
            "https://api.nasa.gov/neo/rest/v1/feed", { params }
        );

        setData(res.data);
    }

    const differenceInDays = (start_day, end_day) => {
        let diffInTime = end_day.getTime() - start_day.getTime();
        let days = Math.ceil(diffInTime / (1000 * 3600 * 24));
        setDiffInDays(days)
    }

    return (
        <Paper className={classes.root} variant='outlined'>
            <div className={classes.paper}>
                <Typography variant="subtitle1" component="h5" className={classes.margin}>
                    Search for Asteroids based on their closest approach date to Earth
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Fragment>
                                <KeyboardDatePicker
                                    autoOk
                                    variant="inline"
                                    value={startDate}
                                    onChange={setStartDate}
                                />
                            </Fragment>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Fragment>
                                <KeyboardDatePicker
                                    autoOk
                                    variant="inline"
                                    value={endDate}
                                    onChange={setEndDate}
                                />
                            </Fragment>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button variant="contained" size="medium" color="primary" onClick={fetchData}>
                            Go
                        </Button>
                    </Grid>
                </Grid>

                {
                    diffInDays > 7 &&
                    <Typography variant="subtitle1" component="h5" className={classes.margin}>
                        Range should not exceed 1 week
                    </Typography>
                }

            </div>

            <Table rows={data && data.near_earth_objects} />

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
    button: {
        margin: theme.spacing(3, 1),
    },
    margin: {
        margin: theme.spacing(1),
    },
}));