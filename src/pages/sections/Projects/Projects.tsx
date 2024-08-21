import { Container, Grid, styled, Typography } from "@mui/material";

const Projects = () => {
  const SyledProjects = styled("div")(({ theme }) => [
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

  const StyledGrid = styled(Grid)(() => ({
    backgroundColor: "black",
    color: "white",
    width: "15vh",
    height: "20vh",
    textAlign: "center",
    margin: "50px",
  }));

  const StyledAndamento = styled(Typography)(() => ({
    fontSize: "40px",
    color:"white",
    fontWeight:"bold",
    position:"absolute",
    marginLeft:'110px',
    backgroundColor:'rgb(0, 0, 0, 0.9)',
    padding:'280px',
    marginTop: '-170px'
  }));

  return (
    <>
      <SyledProjects id="projects">
        <Container
          maxWidth="lg"
          className="Container"
          sx={{ scrollSnapAlign: "center" }}
        >
          <Typography
            fontSize={'40px'}
            marginBottom={"35px"}
            marginTop={"90px"}
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Projetos
          </Typography>
          <StyledAndamento
           
          >
            EM ANDAMENTO...
          </StyledAndamento>
          <Grid item container xs={12} md={12} justifyContent={"center"}>
            <StyledGrid>Project 1</StyledGrid>
            <StyledGrid>Project 1</StyledGrid>
            <StyledGrid>Project 1</StyledGrid>
            <StyledGrid>Project 1</StyledGrid>
            <StyledGrid>Project 1</StyledGrid>
            <StyledGrid>Project 1</StyledGrid>
            <StyledGrid>Project 1</StyledGrid>
          </Grid>
        </Container>
      </SyledProjects>
    </>
  );
};

export default Projects;
