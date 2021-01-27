import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Menu, MenuItem } from "@material-ui/core";
import { Language } from "@material-ui/icons";

import menu from "./data/menu";
import content from "./data/content";

function Navigation(props) {
    const [menuValue, setMenuValue] = useState(0);
    const [language, setLanguage] = useState("en");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        const { myValue } = event.currentTarget.dataset;

        props.handleSetLanguage(myValue); setLanguage(myValue);
        setAnchorEl(null);
    };

    return (
        <Router>
            <BottomNavigation
                value={menuValue}
                onChange={(event, newValue) => {
                    setMenuValue(newValue);
                }}
                showLabels
            >
                {menu.map((item, counter = 0) => {
                    return (
                        <BottomNavigationAction
                            label={content[language][counter].menuName}
                            icon={item.icon}
                            component={Link}
                            to={item.link}
                            key={`Navigation_${counter++}`}
                        />
                    );
                })}

                <BottomNavigationAction
                    label="Language"
                    icon={<Language />}
                    onClick={handleClick}
                />

                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    variant="selectedMenu"
                >
                    <MenuItem onClick={handleClose} data-my-value={"en"}>English</MenuItem>
                    <MenuItem onClick={handleClose} data-my-value={"ru"}>Русский</MenuItem>
                    <MenuItem onClick={handleClose} data-my-value={"arm"}>Հայերեն</MenuItem>
                </Menu>
            </BottomNavigation>

            <Switch>
                {menu.map((item, counter = 0) => {
                    return (
                        <Route
                            exact
                            path={item.link}
                            component={item.component}
                            key={`Route_${counter++}`}
                        />
                    )
                })}
            </Switch>
        </Router>
    );
}

export default Navigation;
