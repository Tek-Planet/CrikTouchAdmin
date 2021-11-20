import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Delete from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { deleteItem } from "src/data/data";

function FeaturedPost(props) {
  const { post, removeItem, handleOpen } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  }));

  return (
    <Grid item xs={12} md={6} lg={4}>
      <CardActionArea component="a" href="#">
        <Card sx={{ height: 350 }}>
          <CardMedia
            component="img"
            height="194"
            image={post.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="h4" color="text.primary">
              {post.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {post.description.length > 100
                ? post.description.substr(0, 100) + " ....."
                : post.description}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton
              onClick={() => {
                removeItem(post.id);
              }}
              aria-label="delete"
            >
              <Delete sx={{ color: pink[500] }} />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={() => {
                handleOpen(post);
              }}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({}).isRequired
};

export default FeaturedPost;
