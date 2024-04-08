import React from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';
import { BsPatchQuestion } from "react-icons/bs";

const QuestionBox = ({ question, subtext }) => {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: 30 }}>
            <BsPatchQuestion style={{ color: 'black', fontSize: '3rem', }} />
            <Typography variant="h5" gutterBottom>
                {question}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                {subtext}
            </Typography>
            <TextField
                id="outlined-multiline-flexible"
                label="Your Answer"
                multiline
                maxRows={4}
                fullWidth
                variant="outlined"
                margin="normal"
            />
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </Container>
    );
};

const Screen2 = () => {
    return (
        <>
           <QuestionBox
        question="If your life was a movie, what would be the title?"
        subtext="Choose/create one that reflects your aspirations."
      />
      <QuestionBox
        question="What's your personal tagline?"
        subtext="Come up with a phrase that summarizes you."
      />
        </>
    );
};

export default Screen2;