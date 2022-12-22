import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Home = () => {
  const classes = useStyles();
  return (
    <video autoPlay loop src="/src/assets/video/space.mp4" className={classes.video}></video>
  );
};

const useStyles = makeStyles(() => ({
  video: {
    '& body': {
      margin: 0
    },
    right: 0,
    bottom: 0,
    width: " 100%",
    minHeight: "100%"
  }
}));

export default Home;
