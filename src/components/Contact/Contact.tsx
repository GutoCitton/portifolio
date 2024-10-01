import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import StyledButton from "../StyledButton/StyledButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, List, ListItem, styled } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";
import GitHubIcon from "@mui/icons-material/GitHub";
import theme from "../../theme";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose("");
  };

  const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "rgb(20, 20, 20)",
      alignItems: "center",
      color: "white",
      border: `solid 4px ${theme.palette.primary.main}`,
    },
    backgroundColor: "rgb(20, 20, 20,0.9)",
  }));

  const CustomDialogTitle = styled(DialogTitle)(() => ({
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  }));

  const StyledLink = styled("a")({
    color: "inherit",
    textDecoration: "none",
    "&:visited": {
      color: "inherit",
    },
    "&:hover": {
      color: theme.palette.secondary.light,
    },
  });

  return (
    <CustomDialog onClose={handleClose} open={open}>
      <Box position="absolute" width="100%" top={-1}>
        <AnimatedBackground />
      </Box>
      <CustomDialogTitle variant="h4">Contatos</CustomDialogTitle>
      <List>
        <ListItem>
          <AlternateEmailIcon />
          <Typography margin={"0 0 0 8px"} fontSize={"17px"}>
            augusto.citton@gmail.com
          </Typography>
        </ListItem>
        <ListItem>
          <WhatsApp />
          <Typography margin={"0 0 0 8px"} fontSize={"17px"}>
            <a href="https://wa.me/555196968550" target="blank">(51) 99696-8550</a>
          </Typography>
        </ListItem>
        <StyledLink
          href="https://www.linkedin.com/in/augusto-ludwig/"
          target="blank"
        >
          <ListItem>
            <LinkedInIcon />
            <Typography margin={"0 0 0 8px"} fontSize={"17px"}>
              Augusto Ludwig
            </Typography>
          </ListItem>
        </StyledLink>
        <StyledLink href="https://github.com/GutoCitton" target="blank">
          <ListItem>
            <GitHubIcon />
            <Typography margin={"0 0 0 8px"} fontSize={"17px"}>
              GitHub
            </Typography>
          </ListItem>
        </StyledLink>
      </List>
    </CustomDialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>
        <EmailOutlinedIcon />
        <Typography component="div">Entre em contato</Typography>
        <br />
      </StyledButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
