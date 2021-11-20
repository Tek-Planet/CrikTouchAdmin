import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Grid
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
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

const ProductListToolbar = (props) => {
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const [values, setValues] = React.useState({
    title: "",
    description: "",
    type: "News",
    image: null
  });
  return (
    <Box {...props}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {/* <Button>Import</Button>
      <Button sx={{ mx: 1 }}>Export</Button> */}
        <Grid item md={2} xs={6}>
          {/* <TextField
            sx={{
              height: 30
            }}
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
          </TextField> */}
        </Grid>
        <Button color="primary" variant="contained" href={"/addNews"}>
          Add News
        </Button>
      </Box>
      {/* <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box> */}
    </Box>
  );
};

export default ProductListToolbar;
