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

const Screen1 = () => {
    return (
        <>
            <QuestionBox
                question="What's your superpower ? Share that standout skill/ability of yours."
                subtext="Tell us what makes you unique."
            />
            <QuestionBox
                question="If you were a set of hashtags, what would those be?"
                subtext="Drop some hashtags that define you."
            />
        </>
    );
};

export default Screen1;