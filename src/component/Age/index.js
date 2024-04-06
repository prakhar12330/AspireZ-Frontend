import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from '@mui/material/Typography';
import { FaChild } from "react-icons/fa";

const Age = () => {
    const [input, setinput] = useState({

        age: 0,
    });

    const handler = (e) => {
        setinput((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }));
    };
    const sub = (e) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{ textAlign: 'center' }}>
                <Box >
                    <Typography
                        variant="h5"
                        color="#222"
                        fontWeight="600"
                        fontSize={{ xs: "1.3rem", sm: "1.3rem", md: "1.5rem" }}
                        mt={2}
                    >
                        What is your Age? <FaChild style={{ color: 'black', fontSize: '3rem', marginLeft: '1px' }} />
                    </Typography>

                </Box>

            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Box mt={3} mb={5}>
                    <form
                        style={{ display: "flex", flexDirection: "column", margin: 3 }}
                        onSubmit={sub}
                    >

                        <FormControl
                            sx={{
                                width: 200,
                                color: 'blue',
                            }}
                            fullWidth
                        >
                            <InputLabel>Age</InputLabel>
                            <Select
                                name="age"
                                value={input.age}
                                label="Age"
                                onChange={handler}
                                sx={{ margin: 3 }}
                            >
                                <MenuItem value={10}>Less than 18</MenuItem>
                                <MenuItem value={20}>18 - 23</MenuItem>
                                <MenuItem value={30}>24 - 30</MenuItem>
                                <MenuItem value={20}>30 - 40</MenuItem>
                                <MenuItem value={30}>Above 40</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#2A64F6',
                                '&:hover': {
                                    backgroundColor: '#D3D3D3',
                                },
                                padding: 1,
                                width: 200,
                                color: 'white',
                                fontWeight: 'medium',
                            }}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default Age;

