import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

const style = {
  position: "absolute",
  top: 100,
  left: "20%",
  right: "20%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4
};

export default function BasicModal(props) {
  const { handleClose, open, news } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <CardMedia
                      component="img"
                      image={news.image}
                      alt="Paella dish"
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
                    <Typography
                      sx={{
                        color: "text.primary",
                        mb: 1
                      }}
                      variant="h4"
                    >
                      {news.title}
                    </Typography>
                    <Typography variant="6" color="text.primary">
                      Category: {news.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
