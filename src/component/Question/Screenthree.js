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

const Screen3 = () => {
    return (
        <>
            <QuestionBox
                question="Who are your heroes?"
                subtext="Tell us whom you look up to and why."
            />
            <QuestionBox
                question="How would your friends describe you in three words?"
                subtext="Describe yourself based on what your friends would say."
            />
            <QuestionBox
                question="If you walk into a party, name 3 people whom you would like to meet there."
                subtext="Tell us about your ideal party companions."
            />
        </>
    );
};

export default Screen3;