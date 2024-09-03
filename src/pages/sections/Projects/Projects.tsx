import { Box, Container, Grid, styled, Typography } from "@mui/material";

const Projects = () => {
  const SyledProjects = styled("div")(({ theme }) => [
    {
      backgroundColor: theme.palette.primary.main,
      height: "120vh",
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

  const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: "black",
    color: "white",
    width: "15vh",
    height: "20vh",
    textAlign: "center",
    margin: "50px",
    [theme.breakpoints.down("md")]: {
      // <= Mobile
      backgroundColor: "black",
      color: "white",
      width: "15vh",
      height: "20vh",
      textAlign: "center",
      margin: "6px",
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
          <Typography
            fontSize={"40px"}
            marginBottom={"35px"}
            // marginTop={"90px"}
            color={"white"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Projetos
          </Typography>

          <Grid
            item
            container
            xs={12}
            md={12}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Box>
              <Typography>Project 1</Typography>
              <StyledGrid />
            </Box>
            <Box>
              <Typography>Project 2</Typography>
              <StyledGrid />
            </Box>
            <Box>
              <Typography>Project 3</Typography>
              <StyledGrid />
            </Box>
            <Box>
              <Typography>Project 4</Typography>
              <StyledGrid />
            </Box>
            <Box>
              <Typography>Project 5</Typography>
              <StyledGrid />
            </Box>
            <Box>
              <Typography>Project 6</Typography>
              <StyledGrid />
            </Box>
            <Box>
              <Typography>Project 7</Typography>
              <StyledGrid />
            </Box>
            <Box>
              <Typography>Project 7</Typography>
              <StyledGrid />
            </Box>
          </Grid>
        </Container>
      </SyledProjects>
    </>
  );
};

export default Projects;
