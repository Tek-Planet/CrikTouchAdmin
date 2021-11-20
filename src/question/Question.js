import * as React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid, Pagination } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductListToolbar from "../components/product/ProductListToolbar";
import FeaturedPost from "./FeaturedPost";
import { deleteItem, fetchQuestions } from "src/data/data";

export default function Question() {
  const [questions, setQuestions] = React.useState([]);

  const removeItem = async (id) => {
    const res = await deleteItem(id);
    if (res === "success") {
      fetchData();
    }
  };

  const fetchData = async () => {
    const data = await fetchQuestions();
    setQuestions(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Questions | Manager</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3
        }}
      >
        <Container>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Container maxWidth="lg">
              <main>
                <Grid container spacing={2}>
                  {questions.map((post) => (
                    <FeaturedPost
                      key={post.question}
                      post={post}
                      removeItem={removeItem}
                    />
                  ))}
                </Grid>
              </main>
            </Container>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3
            }}
          >
            {/* <Pagination color="primary" count={3} size="small" /> */}
          </Box>
        </Container>
      </Box>
    </>
  );
}
