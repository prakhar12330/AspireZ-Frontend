import React from 'react'
import {
    Box,
} from "@mui/material";
import aspirezLogo from '../../assets/aspirezLogo.png'

const Landing = () => {
  return (
    <Box 
    sx={{
        bgcolor:'#2A64F6',
        width:'100%',
        height:'100vh',
        overflow: 'hidden',
        display: 'flex',    
        justifyContent: 'center',
        alignItems: 'center',
    }}
    >
    <Box sx={{
         textAlign: 'center',
    }}>
     <img src={aspirezLogo} height={200} alt={' '}/>
    </Box>

    </Box>
  )
}

export default Landing;