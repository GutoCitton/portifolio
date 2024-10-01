import { Box, Container, Grid, styled, Typography } from "@mui/material";
import discordLogo from "../../../assets/images/discord logo.jpg";
import pinterestLogo from "../../../assets/images/pinterest logo.jpg";
import instagramLogo from "../../../assets/images/instagram logo.jpg";
import miniBlog from "../../../assets/images/mini blog.jpeg";
import secretWord from "../../../assets/images/secret word.png";
import jornalImg from "../../../assets/images/jornal img.png";
import portifolioImg from "../../../assets/images/portifolio img.png";
import previsaoTempo from "../../../assets/images/previsao tempo.png";
import cartaoVisita from "../../../assets/images/card visita.png";

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
    "&:hover": {
      width: "18vh",
      height: "23vh",
    },
    transition: "0.1s",
    border: '2px solid white',
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      backgroundColor: "black",
      color: "white",
      width: "12vh",
      height: "15vh",
      textAlign: "center",
      margin: "9px",
      marginTop: "10px",
    },
  }));

  const StyledTypography = styled(Typography)(() => ({
    fontSize: "40px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "30px",
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
      height: "40px",
      display: "flex",
      alignItems: "end",
      justifyContent: "space-around",
    },
  }));

  const StyledBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
              <StyledGridTypography>ReactGram</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/Udemy-reactgram"
                target="blank"
              >
                <StyledGrid bgImage={instagramLogo} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>New York Times</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/new-york-vemser"
                target="blank"
              >
                <StyledGrid bgImage={jornalImg} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Previsão do Tempo</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/desafio_clima"
                target="blank"
              >
                <StyledGrid bgImage={previsaoTempo} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Mini Blog</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/Udemy-miniblog"
                target="blank"
              >
                <StyledGrid bgImage={miniBlog} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Secret Word</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/Udemy-secretword"
                target="blank"
              >
                <StyledGrid bgImage={secretWord} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Cartão de visita</StyledGridTypography>

              <a
                href="https://github.com/GutoCitton/desafio_card"
                target="blank"
              >
                <StyledGrid bgImage={cartaoVisita} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Clone Discord</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/Clone-Discord"
                target="blank"
              >
                <StyledGrid bgImage={discordLogo} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Clone Pinterest</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/Clone-Pinterest"
                target="blank"
              >
                <StyledGrid bgImage={pinterestLogo} />
              </a>
            </StyledBox>
            <StyledBox>
              <StyledGridTypography>Portifólio</StyledGridTypography>
              <a
                href="https://github.com/GutoCitton/portifolio"
                target="blank"
              >
                <StyledGrid bgImage={portifolioImg} />
              </a>
            </StyledBox>
          </Grid>
        </Container>
      </SyledProjects>
    </>
  );
};

export default Projects;
