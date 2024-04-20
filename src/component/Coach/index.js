import React from 'react'
import {
    Box, Button
} from "@mui/material";
import { FcBusinesswoman } from "react-icons/fc";

const Coach = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{ textAlign: 'center' }}> <FcBusinesswoman style={{ fontSize: '10rem'}} />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
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
                    href='https://aspirez-avatar.vercel.app/'
                >
                    Open My Life Coach
                </Button>
            </Box>
        </Box>
    )
}

export default Coach;