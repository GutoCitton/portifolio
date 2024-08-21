import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../theme";
import { ArrowUpward } from "@mui/icons-material";

interface BackToTopBtnProps {
  showBelow: number;
}

const BackToTopBtn: React.FC<BackToTopBtnProps> = ({ showBelow }) => {
  const StyledBackToTopBtn = styled("button")(() => [
    {
      zIndex: 2,
      width: "50px",
      height: "50px",
      position: "fixed",
      bottom: "2vh",
      backgroundColor: "transparent",
      color: theme.palette.primary.contrastText,
      border: 'none',
      borderRadius: "25%",
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: "50%",
        border: `solid 3px ${theme.palette.primary.dark}`
      },
      transition: "0.3s",
      right: "5%"
    },
  ]);

  const [show, setShow] = useState<boolean>(showBelow ? false : true);

  const handleScroll = () => {
    const yOffset: number = window.scrollY;

    if (yOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  return (
    <>
      {show && (
        <StyledBackToTopBtn onClick={handleClick} >
          <ArrowUpward />
        </StyledBackToTopBtn>
      )}
    </>
  );
};

export default BackToTopBtn;
