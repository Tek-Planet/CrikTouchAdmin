import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { AppBar, Box, Hidden, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputIcon from "@material-ui/icons/Input";
import Logo from "./Logo";
import { getAuth, signOut } from "firebase/auth";

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const signOutuser = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />

        <IconButton
          onClick={() => {
            signOutuser();
          }}
          color="inherit"
          size="large"
        >
          <InputIcon />
        </IconButton>

        <Hidden>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
