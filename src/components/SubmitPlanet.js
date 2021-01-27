import React, { useState } from "react";
import { Paper, Button, Grid, TextField, Typography, FormControl, Select, InputLabel, MenuItem } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

function SubmitPlanet() {
    const classes = useStyles();
    const planetName = useFormInput("");
    const diameter = useFormInput("");
    const galaxyName = useFormInput("");
    const distance = useFormInput("");
    const yourName = useFormInput("");
    const yourEmail = useFormInput("");

    const handleSubmit = e => {
        e.preventDefault();

        const FormData = {
            planetName: planetName.value,
            galaxyName: galaxyName.value,
            diameter: diameter.value,
            distance: distance.value,
            yourName: yourName.value,
            yourEmail: yourEmail.value
        };

        console.log("Save form data--->", FormData)
    };

    return (
        <Paper className={classes.rootPaper} variant='outlined'>

            <div className={classes.paper}>
                <Typography variant="subtitle1" component="h5" className={classes.margin}>
                    Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
                </Typography>
                <form className={classes.root} onSubmit={handleSubmit}>
                    <div className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    fullWidth
                                    label="Planet Name"
                                    variant="outlined"
                                    {...planetName}
                                />

                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">Galaxy name</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        {...galaxyName}
                                        label="Galaxy name"
                                        fullWidth
                                    >
                                        <MenuItem value={"Milky Way"}>Milky Way</MenuItem>
                                        <MenuItem value={"Messier 83"}>Messier 83</MenuItem>
                                        <MenuItem value={"Black Eye Galaxy"}>Black Eye Galaxy</MenuItem>
                                        <MenuItem value={"Pinwheel"}>Pinwheel</MenuItem>
                                        <MenuItem value={"Canis Major Dwarf"}>Canis Major Dwarf</MenuItem>
                                        <MenuItem value={"Somewhere else"}>Somewhere else...</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    label="Diameter (km)"
                                    variant="outlined"
                                    type="number"
                                    {...diameter}
                                />

                                <TextField
                                    fullWidth
                                    label="Distance (mln km)"
                                    variant="outlined"
                                    type="number"
                                    {...distance}
                                />

                                <TextField
                                    fullWidth
                                    label="Your name"
                                    variant="outlined"
                                    {...yourName}
                                />

                                <TextField
                                    fullWidth
                                    label="Your email"
                                    variant="outlined"
                                    type="email"
                                    {...yourEmail}
                                />

                                <Button variant="contained" size="medium" color="primary" type="submit">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </div>
        </Paper>
    );
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
        display: 'flex',
        flexWrap: 'wrap',
    },
    rootPaper: {
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: "100%",
    },
}));

export default SubmitPlanet;
