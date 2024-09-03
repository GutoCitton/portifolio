import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => [
    {
      backgroundColor: theme.palette.primary.main,
      height: "115vh",
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

  const StyledBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "-100",
    left: "0",
    width: "100%",
    height: "175%",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      display: "none",
    },
  }));

  const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    fontSize: "40px",
    marginBottom: "15px",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      marginTop: "18px",
    },
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    textAlign: "justify",
    fontSize: "28px",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      fontSize: "23px",
      textAlign: "justify",
      marginTop: '40px'
    },
  }));

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
                <StyledTypographyTitle
                  fontSize={"40px"}
                  marginBottom={"15px"}
                  color={"white"}
                  fontWeight={"bold"}
                >
                  Sobre mim
                </StyledTypographyTitle>
                <StyledTypography
                  color={"white"}
                  textAlign={"justify"}
                  fontSize={"28px"}
                >
                  Sou um entusiasta de tecnologia e estou começando minha
                  jornada como desenvolvedor de software, já atuei apoiando na
                  correção, avaliação e testes de pequenas tarefas dos alunos de
                  um programa de capacitação focado em front end. Apaixonado por
                  aprender novas linguagens e tecnologias, estou em busca de
                  oportunidades para aplicar meu conhecimento e crescer
                  profissionalmente.
                </StyledTypography>
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
              <StyledBox position="absolute" width="100%" top={-100} left={0}>
                <AnimatedBackground />
              </StyledBox>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
