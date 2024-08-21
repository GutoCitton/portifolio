import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";

import APIimg from "../../../assets/images/API img.png";
import CssImg from "../../../assets/images/css img.png";
import FirebaseImg from "../../../assets/images/Firebase img.png";
import GitImg from "../../../assets/images/github img.png";
import HTMLIgm from "../../../assets/images/html img.png";
import JSImg from "../../../assets/images/JS img.png";
import MongoImg from "../../../assets/images/Mongodb im.png";
import NodeImg from "../../../assets/images/node img.png";
import ReactImg from "../../../assets/images/react img.png";
import TSimg from "../../../assets/images/TS img.png";
import { AnimatedBackground } from "../../../components/AnimatedBackground/AnimatedBackground";

const Skills = () => {
  const SyleSkills = styled("div")(({ theme }) => [
    {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
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

  const StyledBox = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-5%, -50%)", 
    width: "350%",
    height: "175%",
  }));

  const StyledTypographyIcon = styled(Typography)({
    fontSize: "25px",
    color: "white",
    margin: "0  0 30px 18px",
  });

  const StyledTypography = styled(Typography)({
    fontSize: "40px",
    marginBottom: "30px",
    marginTop: "80px",
    color: "white",
    fontWeight: "bold",
  });

  const StyledImage = styled("img")(() => [
    {
      width: "30px",
      margin: "0 0 30px 0",
    },
  ]);

  return (
    <>
      <SyleSkills id="skills">
        <Container
          maxWidth="lg"
          className="Container"
          sx={{ scrollSnapAlign: "center" }}
        >
          <Grid container>
            <Grid item xs={12} md={12} textAlign={"center"}>
              <StyledTypography>Skills</StyledTypography>
              <Grid
                item
                xs={6}
                md={12}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <List>
                  <StyledBox>
                    <AnimatedBackground />
                  </StyledBox>
                  <ListItem>
                    <StyledImage src={JSImg} />
                    <StyledTypographyIcon>Javascript</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={ReactImg} />
                    <StyledTypographyIcon>React</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={HTMLIgm} />
                    <StyledTypographyIcon>HTML</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={CssImg} />
                    <StyledTypographyIcon>CSS</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={TSimg} />
                    <StyledTypographyIcon>Typescript</StyledTypographyIcon>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <StyledImage src={NodeImg} />
                    <StyledTypographyIcon>Node JS</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={MongoImg} />
                    <StyledTypographyIcon>MongoDB</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={FirebaseImg} />
                    <StyledTypographyIcon>Firebase</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={GitImg} />
                    <StyledTypographyIcon>Git</StyledTypographyIcon>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={APIimg} />
                    <StyledTypographyIcon>API Rest</StyledTypographyIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </SyleSkills>
    </>
  );
};

export default Skills;
