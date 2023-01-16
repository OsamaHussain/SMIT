import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'

// const navItems = ['Home', 'About', 'Services', 'Media', 'News', 'Contact'];

const navItems2 = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Media",
    link: "/media",
  },
  {
    name: "News",
    link: "/news",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function Navbar() {

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `login`; 
      navigate(path);
    }
  
    return (
      <AppBar component="nav" position="sticky" className="navbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src="/static/images/logo.png" alt="LOGO" style={{height:50}} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems2.map((item) => (
              <Button key={item.name} sx={{ color: '#fff' }}>
                <Link to={item.link} style={{textDecoration:"none"}}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Box>
            <Button variant='contained' onClick={routeChange}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar;
