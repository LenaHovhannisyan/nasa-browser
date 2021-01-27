import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
    const classes = useStyles();
    const [language, setLanguage] = useState("en");

    return (
        <div >
            <h1 className={classes.heading}>Nasa Browser</h1>
            <Navigation language={language}
                handleSetLanguage={language => {
                    setLanguage(language);
                }} />

            <Footer />
        </div>
    );
}
    ;

const useStyles = makeStyles(() => ({
    heading: {
        textAlign: "center",
        textTransform: "uppercase"
    }
}));

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;