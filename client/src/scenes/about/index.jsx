// About.js
import React from 'react';
import { Paper,Typography } from '@mui/material';
const useStyles = ((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'center',
    minHeight: '80vh', // Set a minimum height to cover most of the screen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function About() {
  return (
    <div >
      <Paper elevation={3}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Carrier Friend! We are a team of passionate developers dedicated to creating innovative solutions for job seekers and coding enthusiasts.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide users with a user-friendly platform where they can explore a wide range of job opportunities and enhance their coding skills in a collaborative virtual environment.
        </Typography>
        <Typography variant="body1" paragraph>
          With a tech stack including React.js, Express, Mongoose, Socket.io, and Material UI, we're committed to delivering a seamless and enjoyable experience for our users.
        </Typography>
        <Typography variant="body1" paragraph>
          Join us on this exciting journey as we strive to make job hunting and coding collaboration more accessible and engaging than ever before!
        </Typography>
      </Paper>
    </div>
  );
}

export default About;
