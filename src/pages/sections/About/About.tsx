import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => [
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
      scroll,
    },
  ]);

  return (
    <>
      <StyledAbout id="about">
        <Container
          maxWidth="lg"
          className="Container"
          sx={{ scrollSnapAlign: "center" }}
        >
          <Grid container>
            <Grid item xs={12} md={8} textAlign={"center"}>
              <Box position="relative">
                <Typography
                  variant="h3"
                  marginBottom={"15px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Sobre mim
                </Typography>
                <Typography
                  color={"white"}
                  textAlign={"justify"}
                  fontSize={"30px"}
                >
                  Sou um entusiasta de tecnologia e estou começando minha
                  jornada na tecnologia como desenvolvedor de software.
                  Apaixonado por aprender novas linguagens e tecnologias, estou
                  em busca de oportunidades para aplicar meu conhecimento e
                  crescer profissionalmente. Vamos conectar e explorar possíveis
                  colaborações!
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              marginTop={10}
              position={"relative"}
              alignItems={"center"}
            >
              <Box position="absolute" width="80vh" top={-280} left={-40}>
                <AnimatedBackground />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
