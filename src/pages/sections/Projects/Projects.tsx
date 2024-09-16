import { Box, Container, Grid, styled, Typography } from "@mui/material";
import discordLogo from "../../../assets/images/discord logo.jpg";
import pinterestLogo from "../../../assets/images/pinterest logo.jpg";
import instagramLogo from "../../../assets/images/instagram logo.jpg";
import miniBlog from "../../../assets/images/mini blog.jpeg";
import secretWord from "../../../assets/images/secret word.png";
import jornalImg from "../../../assets/images/jornal img.png";

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
    margin: "20px 30px 100px 30px",
    borderRadius: "12px",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      backgroundColor: "black",
      color: "white",
      width: "12vh",
      height: "15vh",
      textAlign: "center",
      margin: "9px",
      marginTop: '10px'
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
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      color: "white",
      fontWeight: "bold",
      marginTop: "12px",
      fontSize: "15px",
      maxWidth: "90px",
      height:'40px',
      display: 'flex',
      alignItems: 'end',
      justifyContent: 'space-around'
    },
  }));

  const StyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
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
            <StyledBox>
              <StyledGridTypography>Clone Discord</StyledGridTypography>
              <StyledGrid bgImage={discordLogo} />
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Clone Pinterest</StyledGridTypography>
              <StyledGrid bgImage={pinterestLogo} />
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Clone Instagram</StyledGridTypography>
              <StyledGrid bgImage={instagramLogo} />
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Mini Blog</StyledGridTypography>
              <StyledGrid bgImage={miniBlog} />
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Secret Word</StyledGridTypography>
              <StyledGrid bgImage={secretWord} />
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>New York Times</StyledGridTypography>
              <StyledGrid bgImage={jornalImg} />
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Project 7</StyledGridTypography>
              <StyledGrid bgImage={""} />
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Project 7</StyledGridTypography>
              <StyledGrid bgImage={""} />
            </StyledBox>
          </Grid>
        </Container>
      </SyledProjects>
    </>
  );
};

export default Projects;
