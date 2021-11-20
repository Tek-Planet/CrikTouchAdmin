import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";

import NewsForm from "../news/NewsForm";

const Account = () => (
  <>
    <Helmet>
      <title>Add | News</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={9} md={6} xs={12}>
            <NewsForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;
