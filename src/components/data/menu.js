import React from "react";

import { Home, Event, DateRange, AddCircle } from "@material-ui/icons";

import HomePage from "./../Home";
import NearbyAsteroid from "./../NearbyAsteroid";
import APoD from "./../APoD";
import SubmitPlanet from "./../SubmitPlanet";

export default [
    {
        link: "/",
        icon: <Home />,
        component: HomePage
    },
    {
        link: "/asteroids",
        icon: <DateRange />,
        component: NearbyAsteroid
    },
    {
        link: "/apod",
        icon: <Event />,
        component: APoD
    },
    {
        link: "/submit-planet",
        icon: <AddCircle />,
        component: SubmitPlanet
    }
];