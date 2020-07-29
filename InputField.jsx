import React from "react";
import { Box, TextField } from "@material-ui/core";

export default function InputField(props) {
  return (
    <Box>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-full-width"
          value={props.input}
          label="Image"
          fullWidth
          onChange={props.onChange}
        />
      </form>
    </Box>
  );
}
