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
    '& .MuiPaper-root': {
      backgroundColor: 'rgb(20, 20, 20)',
      alignItems: 'center',
      color: 'white',
      border: `solid 4px ${theme.palette.primary.main}`
    },
    backgroundColor: 'rgb(20, 20, 20,0.9)',
  }));

  const CustomDialogTitle = styled(DialogTitle)(() => ({
    alignItems: "center",
    color: "white",
    fontWeight: 'bold',
  }));

  return (
    <CustomDialog onClose={handleClose} open={open}>
      <Box position='absolute' width= '100%' top={-50} >
        <AnimatedBackground />
      </Box>
      <CustomDialogTitle variant="h4">Contatos</CustomDialogTitle>
      <List>
        <ListItem>
          <AlternateEmailIcon />
          <Typography margin={'0 0 0 8px'} fontSize={'17px'}>
            augusto.citton@gmail.com
          </Typography>
        </ListItem>
        <ListItem>
          <WhatsApp />
          <Typography margin={'0 0 0 8px'} fontSize={'17px'}>  
            (51) 99696-8550
          </Typography>
        </ListItem>
        <a href="https://www.linkedin.com/in/augusto-ludwig/">
          <ListItem>
            <LinkedInIcon />
            <Typography margin={'0 0 0 8px'} fontSize={'17px'}> 
              Augusto Ludwig
            </Typography>
          </ListItem>
        </a>
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
