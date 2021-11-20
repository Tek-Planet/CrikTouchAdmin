import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";

import QuestionForm from "../components/question/QuestionForm";

const Account = () => (
  <>
    <Helmet>
      <title>Add | Question</title>
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
            <QuestionForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Account;
