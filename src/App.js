import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import routes from "./routes";
import authroutes from "./authroutes";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {
  const content = useRoutes(routes);
  const authcontent = useRoutes(authroutes);
  const [user, setuser] = React.useState(null);

  const auth = getAuth();
  console.log(auth);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setuser(user);
    } else {
      setuser(null);
    }
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {user ? content : authcontent}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
