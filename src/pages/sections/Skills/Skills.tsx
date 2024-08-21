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

  const StyledTypography = styled(Typography)({
    fontSize: "25px",
    color: "white",
    margin: "0  0 30px 18px",
  });

  const StyledImage = styled("img")(() => [
    {
      width: "65px",
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
              <Typography
                variant="h3"
                marginBottom={"120px"}
                marginTop={"150px"}
                color={"white"}
                fontWeight={"bold"}
              >
                Skills
              </Typography>
              <Grid
                item
                xs={6}
                md={12}
                display={"flex"}
                justifyContent={"space-around"}
              >
                <List>
                  <Box position="absolute" width="100vh" top={-335} left={-75}>
                    <AnimatedBackground />
                  </Box>
                  <ListItem>
                    <StyledImage src={JSImg} />
                    <StyledTypography>Javascript</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={ReactImg} />
                    <StyledTypography>React</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={HTMLIgm} />
                    <StyledTypography>HTML</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={CssImg} />
                    <StyledTypography>CSS</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={TSimg} />
                    <StyledTypography>Typescript</StyledTypography>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <StyledImage src={NodeImg} />
                    <StyledTypography>Node JS</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={MongoImg} />
                    <StyledTypography>MongoDB</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={FirebaseImg} />
                    <StyledTypography>Firebase</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={GitImg} />
                    <StyledTypography>Git</StyledTypography>
                  </ListItem>
                  <ListItem>
                    <StyledImage src={APIimg} />
                    <StyledTypography>API Rest</StyledTypography>
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
