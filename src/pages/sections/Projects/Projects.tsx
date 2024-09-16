import { Box, Container, Grid, styled, Typography } from "@mui/material";
import discordLogo from "../../../assets/images/discord logo.jpg";
import pinterestLogo from "../../../assets/images/pinterest logo.jpg";
import instagramLogo from "../../../assets/images/instagram logo.jpg";
import miniBlog from "../../../assets/images/mini blog.jpeg";
import secretWord from "../../../assets/images/secret word.png";

const Projects = () => {
  interface StyledGridProps {
    bgImage: string;
  }
  const SyledProjects = styled("div")(({ theme }) => [
    {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("md")]: {
        // >= Mobile
        paddingTop: "0px",
      },
      scroll,
    },
  ]);

  const StyledGrid = styled(Grid, {
    shouldForwardProp: (prop) => prop !== "bgImage",
  })<StyledGridProps>(({ theme, bgImage }) => ({
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    width: "15vh",
    height: "20vh",
    textAlign: "center",
    margin: "20px 30px 100px 100px",
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      backgroundColor: "black",
      color: "white",
      width: "12vh",
      height: "15vh",
      textAlign: "center",
      margin: "9px",
      marginTop: '10px',
    },
  }));

  const StyledTypography = styled(Typography)(() => ({
    fontSize: "40px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:'30px'
  }));

  const StyledGridTypography = styled(Typography)(({ theme }) => ({
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "70px",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      color: "white",
      fontWeight: "bold",
      marginLeft: "10px",
      marginTop: "12px",
      fontSize: "15px",
      maxWidth: "80px",
      // height:'40px',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-around'
    },
  }));

  return (
    <>
      <SyledProjects id="projects">
        <Container
          maxWidth="lg"
          className="Container"
          sx={{ scrollSnapAlign: "center" }}
        >
          <StyledTypography>Projetos</StyledTypography>

          <Grid
            item
            container
            xs={12}
            md={12}
            justifyContent={"center"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Box>
              <StyledGridTypography>Clone Discord</StyledGridTypography>
              <StyledGrid bgImage={discordLogo} />
            </Box>
            <Box>
              <StyledGridTypography>Clone Pinterest</StyledGridTypography>
              <StyledGrid bgImage={pinterestLogo} />
            </Box>
            <Box>
              <StyledGridTypography>Clone Instagram</StyledGridTypography>
              <StyledGrid bgImage={instagramLogo} />
            </Box>
            <Box>
              <StyledGridTypography>Mini Blog</StyledGridTypography>
              <StyledGrid bgImage={miniBlog} />
            </Box>
            <Box>
              <StyledGridTypography>Secret Word</StyledGridTypography>
              <StyledGrid bgImage={secretWord} />
            </Box>
            <Box>
              <StyledGridTypography>Project 6</StyledGridTypography>
              <StyledGrid bgImage={""} />
            </Box>
            <Box>
              <StyledGridTypography>Project 7</StyledGridTypography>
              <StyledGrid bgImage={""} />
            </Box>
            <Box>
              <StyledGridTypography>Project 7</StyledGridTypography>
              <StyledGrid bgImage={""} />
            </Box>
          </Grid>
        </Container>
      </SyledProjects>
    </>
  );
};

export default Projects;
