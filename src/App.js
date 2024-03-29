import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import logo from './logo.svg';
import boywithphone from './assets/boywithphone.jpg';
import './App.css';
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Steeper from "./component/Steeper";
import locales from "./assets/locales";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box
        sx={{
          textAlign: 'center',
        }}>
        <img height={180} src={boywithphone}/>
        <Box sx={{
            textAlign:'center',
            width:350,
            margin: '40px auto',
            overflow: "hidden",

        }}>
          <Steeper activeStep={activeStep + 1} />
        </Box>
        <Box>
          {activeStep + 1 === 4 && (
            <CheckCircleIcon
              sx={{ width: 100, height: 100, color: "#6767ec" }}
            />
          )}
        </Box>
        <Box mt={3} mb={5}>
          <Typography
            variant="h5"
            color="#222"
            fontWeight="600"
            fontSize={{ xs: "1.3rem", sm: "1.3rem", md: "1.5rem" }}
            mt={2}
          >
            {" "}
            {locales[activeStep + 1]?.title}{" "}
            
          </Typography>
          <Typography variant="p" color="#888" fontWeight="400">
            {" "}
            {locales[activeStep + 1]?.subTitle}{" "}
  
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left", width: 350, margin: "0 auto" }}>
          {activeStep + 1 === 1 && (
            <Screen1/>
          )}
          {activeStep + 1 === 2 && (
            <Screen2 />
          )}
          {activeStep + 1 === 3 && (
            <Screen3/>
          )}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6767ec",
              "&:hover": {
                backgroundColor: "#6767ec",
              },
              padding: 1,
            }}
            fullWidth
            onClick={activeStep + 1 < 4}
          >
            {activeStep + 1 < 4
              ? "Continue"
              : `Launch `}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
