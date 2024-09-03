import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../assets/images/avatar.png";
import DownloadingIcon from "@mui/icons-material/Downloading";
import StyledButton from "../../../components/StyledButton/StyledButton";
import theme from "../../../theme";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";
import SimpleDialogDemo from "../../../components/Contact/Contact";
import CVGuto from "../../../assets/documents/CV - AUGUSTO CITTON LUDWIG.pdf";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => [
    {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("xs")]: {
        // <= Mobile
        paddingTop: "100px",
      },
      [theme.breakpoints.up("md")]: {
        // >= Mobile
        paddingTop: "0px",
      },
      [theme.breakpoints.down("md")]: {
        // >= Mobile
        paddingTop: "0px",
        paddingBotton: "100px",
      },
    },
  ]);

  const StyledBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "-100px",
    right: "-30px",
    width: "140%",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      width: "100%",
      position: "absolute",
      top: "50px",
      right: "0px",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
    fontSize: '40px',
    textAlign: "center",
    pb: 2,
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      color: theme.palette.primary.contrastText,
    fontWeight: "bold",
    fontSize: '40px',
    textAlign: "center",
    pb: 2,
    marginTop: '0px'
    },
  }));

  const StyledImage = styled("img")(() => [
    {
      width: "75%",
      borderRadius: "50%",
      border: `1px solid ${theme.palette.primary.contrastText}`,
    },
  ]);

  const DowloadCV = () => {
    const link = document.createElement("a");
    link.download = "CV - AUGUSTO CITTON LUDWIG.pdf";
    link.href = CVGuto;
    link.click();
  };

  return (
    <>
      <StyledHero>
        <Container
          maxWidth="lg"
          className="Container"
          sx={{ scrollSnapAlign: "center" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <StyledBox>
                  <AnimatedBackground />
                </StyledBox>
                <Box position="relative" textAlign="center">
                  <StyledImage src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <StyledTypography>Augusto Citton</StyledTypography>
              <Typography
                color="primary.contrastText"
                variant="h5"
                textAlign="center"
              >
                Desenvolvedor em ascenção
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={8}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => DowloadCV()}>
                    <DownloadingIcon />
                    <Typography>Dowload CV</Typography>
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
