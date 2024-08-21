import {Box, Container, Grid, styled, Typography, } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png";
import DownloadingIcon from "@mui/icons-material/Downloading";
import StyledButton from "../../../components/StyledButton/StyledButton";
import theme from "../../../theme";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";
import SimpleDialogDemo from "../../../components/Contact/Contact";


const Hero = () => {
  const StyledHero = styled("div")(({theme}) => [
    {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.up('xs')]: { // <= Mobile
        paddingTop: '100px'
      },
      [theme.breakpoints.up('md')]: { // >= Mobile
        paddingTop: '0px'
      }
    },
  ]);

  const StyledImage = styled("img")(() => [
    {
      width: "75%",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.primary.contrastText}`
    },
  ]);

  const DowloadCV = () => {
    const link = document.createElement("a");
    link.download = 'CV - AUGUSTO CITTON LUDWIG.pdf';
    link.href = '../../../assets/documents/CV - AUGUSTO CITTON LUDWIG.pdf';
    link.click();
  }


  return (
    <>
      <StyledHero>
        <Container maxWidth="lg" className='Container' sx={{ scrollSnapAlign: 'center' }}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={5} >
              <Box position='relative'>
                <Box position='absolute' width= '150%' top={-100} right={-30}>
                  <AnimatedBackground />
                </Box>
                <Box position='relative' textAlign='center'>
                  <StyledImage src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" fontWeight={'bold'} variant="h1" textAlign="center" pb={2}>
                Augusto Citton
              </Typography>
              <Typography color="primary.contrastText" variant="h3" textAlign="center">
                Desenvolvedor em ascenção
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={8}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                    <StyledButton onClick={()=> DowloadCV()}>
                      <DownloadingIcon />
                      <Typography>
                        Dowload CV
                      </Typography>
                    </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                <SimpleDialogDemo />                     
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
