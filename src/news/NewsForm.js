import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from "@material-ui/core";
import { addNews } from "src/data/data";
import UploadButton from "../components/UploadButton";
import Alert from "../utils/Alert";
import { useNavigate } from "react-router-dom";

const states = [
  {
    label: "News",
    value: "News"
  },
  {
    label: "Top Pick",
    value: "Top Pick"
  }
];

const QuestionForm = (props) => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    description: "",
    type: "News",
    image: null
  });
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState(null);

  const imageEvent = (img) => {
    setValues({
      ...values,
      image: img
    });
  };

  const save = async () => {
    const response = await addNews(values);

    setOpen(true);
    setCat(response);
    if (response === "success") {
      navigate(`/news`);
    }
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader
          subheader="fill each field as required"
          title="Create News"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="title"
                name="title"
                onChange={handleChange}
                required
                value={values.title}
                variant="outlined"
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
                multiline={true}
                rows={5}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Category"
                name="type"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.type}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2
          }}
        >
          <UploadButton imageEvent={imageEvent} />

          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              save();
            }}
          >
            Save details
          </Button>
        </Box>
        <Alert handleClose={handleClose} cat={cat} open={open} />
      </Card>
    </form>
  );
};

export default QuestionForm;
