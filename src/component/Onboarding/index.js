import React from 'react';
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import boywithphone from '../../assets/boywithphone.jpg';
import relaxingWomen from '../../assets/relaxingWomen.svg';
import checklist from '../../assets/checklist.svg';
import nerd from '../../assets/nerd.svg';
import Screen1 from "../../screens/Screen1";
import Screen2 from "../../screens/Screen2";
import Screen3 from "../../screens/Screen3";
import Steeper from "../../component/Steeper";
import locales from "../../assets/locales";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";





const Onboarding = () => {

    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    };
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
              {activeStep + 1 === 1 && (
                  <img height={180} src={boywithphone} alt={' '} />
              )}
              {activeStep + 1 === 2 && (
                  <img height={210} src={relaxingWomen} alt={' '} />
              )}
              {activeStep + 1 === 3 && (
                  <img height={200} src={checklist} alt={' '} />
              )}
              {activeStep + 1 === 4 && (
                  <img height={150} src={nerd} alt={' '} />
              )}

              <Box sx={{
                  textAlign: 'center',
                  width: 350,
                  margin: '40px auto',
                  overflow: "hidden",

              }}>
                  <Steeper activeStep={activeStep + 1} />
              </Box>
              <Box>
                  {activeStep + 1 === 4 && (
                      <CheckCircleIcon
                          sx={{ width: 50, height: 50, color: "#6767ec" }}
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
                      <Screen1 />
                  )}
                  {activeStep + 1 === 2 && (
                      <Screen2 />
                  )}
                  {activeStep + 1 === 3 && (
                      <Screen3 />
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
                      onClick={activeStep + 1 < 4 && nextStep}
                  >
                      {activeStep + 1 < 4
                          ? "Continue"
                          : "Log In"}
                  </Button>
              </Box>
          </Box>
      </Box> 
  )
}

export default Onboarding;