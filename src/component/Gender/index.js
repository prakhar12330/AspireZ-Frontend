import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from '@mui/material/Typography';
import { MdOutlineTransgender } from "react-icons/md";

const Gender = () => {
    const [input, setinput] = useState({

        gender:'none'
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
                        What is your <span style={{ color: 'blue' }}>Gender</span>? <MdOutlineTransgender style={{ color: 'black', fontSize: '3rem', marginLeft: '1px' }} />
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
                            <InputLabel>Gender</InputLabel>
                            <Select
                                name="gender"
                                value={input.gender}
                                label="Gender"
                                onChange={handler}
                                sx={{ margin: 3 }}
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Other</MenuItem>
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

export default Gender;

