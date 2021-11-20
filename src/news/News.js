import * as React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid, Pagination } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopBar from "./TopBar";
import FeaturedPost from "./FeaturedPost";
import { deleteNew, fetchNews } from "src/data/data";
import NewsModal from "../components/NewsModal";

export default function Question() {
  const [questions, setQuestions] = React.useState([]);
  const [news, setNews] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (item) => {
    setOpen(true);
    setNews(item);
  };

  const removeItem = async (id) => {
    const res = await deleteNew(id);
    if (res === "success") {
      fetchData();
    }
  };

  const fetchData = async () => {
    const data = await fetchNews();
    setQuestions(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>News | Page</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3
        }}
      >
        <Container>
          <TopBar />
          <Box sx={{ pt: 3 }}>
            <Container maxWidth="lg">
              <main>
                <Grid container spacing={2}>
                  {questions.map((post) => (
                    <FeaturedPost
                      key={post.question}
                      post={post}
                      removeItem={removeItem}
                      handleOpen={handleOpen}
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
        <NewsModal news={news} handleClose={handleClose} open={open} />
      </Box>
    </>
  );
}
