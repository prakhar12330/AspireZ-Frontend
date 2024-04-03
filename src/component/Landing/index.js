import React from 'react'
import {
  Box, Button
} from "@mui/material";
import aspirezLogo from '../../assets/aspirezLogo.png'

const Landing = () => {
  return (
    <Box
      sx={{
        bgcolor: '#2A64F6',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <img src={aspirezLogo} height={200} alt={' '} />
      </Box>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#D3D3D3',
            },
            padding: 1,
            width: 200,
            color: 'black',
            fontWeight: 'medium',
          }}
          href='/onboarding'
        >
          Get Started
        </Button>
      </Box>
    </Box>
  )
}

export default Landing;