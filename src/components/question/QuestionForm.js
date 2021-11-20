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
import { addQuestion } from "src/data/data";
import UploadButton from "../../components/UploadButton";
import Alert from "../../utils/Alert";
import { useNavigate } from "react-router-dom";

const states = [
  {
    value: "easy",
    label: "Easy"
  },
  {
    value: "medium",
    label: "Medium"
  },
  {
    value: "hard",
    label: "Hard"
  }
];

const QuestionForm = (props) => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    level: "easy",
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
    const response = await addQuestion(values);

    setOpen(true);
    setCat(response);
    if (response === "success") {
      navigate(`/`);
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
          title="New Question"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the question"
                label="question"
                name="question"
                onChange={handleChange}
                required
                value={values.question}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Option One"
                name="option1"
                onChange={handleChange}
                required
                value={values.option1}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Option Two"
                name="option2"
                onChange={handleChange}
                value={values.option2}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Option Three"
                name="option3"
                onChange={handleChange}
                required
                value={values.option3}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Option Four"
                name="option4"
                onChange={handleChange}
                required
                value={values.option4}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Correct answer"
                name="answer"
                onChange={handleChange}
                required
                value={values.answer}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select level"
                name="level"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.level}
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
