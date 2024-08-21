import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {

  const StyledToolBar = styled(Toolbar)(() => [
    {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  ]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  


  return (
    <>
      <AppBar position="absolute">
        <StyledToolBar>
          <MenuItem onClick={() => scrollToSection('about')}>Sobre</MenuItem>
          <MenuItem onClick={() => scrollToSection('skills')}>Skills</MenuItem>
          <MenuItem onClick={() => scrollToSection('projects')}>Projetos</MenuItem>
        </StyledToolBar>
      </AppBar>
    </>
  );
};

export default NavBar;
