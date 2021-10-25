import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

const MyTextFeild = ({
  name,
  lable,
  formChange,
  half,
  type,
  handleShowPassword,
  value,
}) => {
  return (
    <Grid item sm={half ? 6 : 12} xs={12}>
      <TextField
        name={name}
        label={lable}
        onChange={formChange}
        fullWidth
        required
        variant="outlined"
        value={value}
        type={type}
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default MyTextFeild;
