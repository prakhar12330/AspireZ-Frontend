import { Button, Box, Typography} from "@mui/material";
import { MdOutlineWavingHand } from "react-icons/md";
import { TbMichelinBibGourmand } from "react-icons/tb";

const Home = ({ setAuth }) => {


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
            <Box sx={{ textAlign: 'center' }}>
                <TbMichelinBibGourmand style={{ fontSize: '8rem' }} />
           </Box>
            
            <Box sx={{ textAlign: 'center' }}>
                <Box mt={3} mb={5}>
                    <Typography
                        variant="h5"
                        color="#222"
                        fontWeight="600"
                        fontSize={{ xs: "1.3rem", sm: "1.3rem", md: "1.5rem" }}
                        mt={2}
                    >
                        Glad to have you with us, <span style={{ color: 'blue' }}>Prakhar Singh</span> <MdOutlineWavingHand style={{ color: 'black', fontSize: '2rem', marginLeft: '10px' }} />
                    </Typography>

                </Box>
                
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
                    onClick={() => setAuth(false)}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    );
};

export default Home;


