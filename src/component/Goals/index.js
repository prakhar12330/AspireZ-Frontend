import { Box, Button } from "@mui/material";
import React from "react";
import { TextField, Autocomplete } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';
import CheckIcon from "@mui/icons-material/Check";
import { GoGoal } from "react-icons/go";

const names = [
    "Express myself better",
    "Get Really Good at Something",
    "Keep Fit & Strong",
    "Feel Safe Everywhere",
    "Stay Close to Family & Friends",
    "Help People Around You",
    "Be Your Own Boss",
    "Fit In & Stand Out",
    "Be Someone Everyone Knows",
    "Look Good, Feel Good",
    "Create wealth",
    "Have the Time of my Life",
    "Find my Zen"
];


const Goals = () => {
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
                        Select your top <span style={{ color: 'blue' }}>Goals</span>.<GoGoal style={{ color: 'black', fontSize: '3rem', marginLeft: '1px', }} />
                    </Typography>

                </Box>

            </Box>

            <Box sx={{ textAlign: 'center' }}>
                <Box mt={3} mb={5}>
                    <form
                        style={{ display: "flex", flexDirection: "column", margin: 3 }}

                    >

                        <Autocomplete
                            sx={{ m: 1, width: 300 }}
                            multiple
                            options={names}
                            getOptionLabel={(option) => option}
                            disableCloseOnSelect
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Goals"
                                    placeholder="Select one or multiple"
                                />
                            )}
                            renderOption={(props, option, { selected }) => (
                                <MenuItem
                                    {...props}
                                    key={option}
                                    value={option}
                                    sx={{ justifyContent: "space-between" }}
                                >
                                    {option}
                                    {selected ? <CheckIcon color="info" /> : null}
                                </MenuItem>
                            )}
                        />
                    </form>
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
                </Box>
            </Box>
        </Box>
    )
}

export default Goals